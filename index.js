const express = require('express');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect').default;

const app = express();

app.use(sslRedirect());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/skoodles', require('./routes/api/skoodles'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));