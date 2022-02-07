document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

export class SkoodlesClient extends HTMLElement {

    constructor() {
        super();
        this.web3 = new Web3(window.ethereum);
    }

    _account = '';
    get account() {
        return this._account;
    }
    set account(v) {
        this._account = v;
        document.getElementById('metamask').innerHTML = v ? `${v.substring(0, 5)}...` : 'Metamask';
    }

    async connectedCallback() {

        // keep active account updated
        ethereum.on('accountsChanged', (accounts) => {
            this.account = accounts[0];
        });
        const accounts = await this.web3.eth.getAccounts();
        if (accounts) this.account = accounts[0];
        document.getElementById('metamask').addEventListener('click', async () => {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                this.account = accounts[0];
            } catch (error) {
                if (error.code === 4001) {
                    // User rejected request
                }
                console.error(error);
            }
        });

    }
}

window.customElements.define('skoodles-client', SkoodlesClient);