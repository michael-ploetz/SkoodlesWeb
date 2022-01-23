const express = require('express');
const router = express.Router();

// Get Single Member
router.get('/:id', (req, res) => {
    const skoodle = ALL_SKOODLES.find((skoodle) => skoodle.custom_fields.edition === parseInt(req.params.id));

    if (skoodle) {
        res.json(skoodle);
    } else {
        res.status(400).json({ msg: `No skoodle with the id of ${req.params.id}` });
    }
});

module.exports = router;

const ALL_SKOODLES = [
    {
        "name": "Crypto Skoodle #1",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/1.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Spooky "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 31 "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "a67bd18a8cfa971b234b6cf0b401888e54386c46",
            "edition": 1,
            "date": 1642854625016
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/1.png"
    },
    {
        "name": "Crypto Skoodle #2",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/2.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 33 "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "890eb347bc0d85555cd2d23494cb3d9c4f753af1",
            "edition": 2,
            "date": 1642854625271
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/2.png"
    },
    {
        "name": "Crypto Skoodle #3",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/3.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Pink  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Short "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 30 "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Receding "
            }
        ],
        "custom_fields": {
            "dna": "848a57b2916c51ff6a6ad6ee6530db6ea19817f4",
            "edition": 3,
            "date": 1642854625368
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/3.png"
    },
    {
        "name": "Crypto Skoodle #4",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/4.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Golden "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Spooky "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 33 "
            },
            {
                "trait_type": "Hair",
                "value": "Green Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "e1b837df3739a534c7bcb6226c4f21eaba932576",
            "edition": 4,
            "date": 1642854625466
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/4.png"
    },
    {
        "name": "Crypto Skoodle #5",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/5.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 31 "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Receding "
            }
        ],
        "custom_fields": {
            "dna": "8b678d88a152f5973a5ece98fed54d46e129866a",
            "edition": 5,
            "date": 1642854625565
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/5.png"
    },
    {
        "name": "Crypto Skoodle #6",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/6.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "White "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Big Cartoon "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "1c44c0551afa098139f56fb7ce5461718fbcdc76",
            "edition": 6,
            "date": 1642854625662
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/6.png"
    },
    {
        "name": "Crypto Skoodle #7",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/7.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Dead "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Receding "
            }
        ],
        "custom_fields": {
            "dna": "3c17b283a49e14177f201fda9741d3185897ec75",
            "edition": 7,
            "date": 1642854625910
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/7.png"
    },
    {
        "name": "Crypto Skoodle #8",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/8.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "Relaxed "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "cfed9ed68953c745ff6e0ec8129981e71180bea4",
            "edition": 8,
            "date": 1642854626165
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/8.png"
    },
    {
        "name": "Crypto Skoodle #9",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/9.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "White "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "128c47c9ea79213011d2849b51ab69b3ab34c200",
            "edition": 9,
            "date": 1642854626264
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/9.png"
    },
    {
        "name": "Crypto Skoodle #10",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/10.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Golden "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Sunglasses "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "c3984162faed542d4151d28e87eb8d23b142e17b",
            "edition": 10,
            "date": 1642854626364
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/10.png"
    },
    {
        "name": "Crypto Skoodle #11",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/11.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Sunglasses "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "34f976dda228e06cd154741dc25822b8ce9e8823",
            "edition": 11,
            "date": 1642854626464
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/11.png"
    },
    {
        "name": "Crypto Skoodle #12",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/12.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Rainbow "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Spooky "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Pure Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Receding "
            }
        ],
        "custom_fields": {
            "dna": "78915f51a5e7e3dd589250c8fb50fc440e3fbec9",
            "edition": 12,
            "date": 1642854626566
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/12.png"
    },
    {
        "name": "Crypto Skoodle #13",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/13.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Rainbow "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Beanie "
            }
        ],
        "custom_fields": {
            "dna": "deaba92a7925d44c21fff96ab4e8594c0b807f23",
            "edition": 13,
            "date": 1642854626812
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/13.png"
    },
    {
        "name": "Crypto Skoodle #14",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/14.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 34 "
            },
            {
                "trait_type": "Hair",
                "value": "Green Beanie "
            }
        ],
        "custom_fields": {
            "dna": "bded6a6543506e8deb8117d250bb18b1c255f5fc",
            "edition": 14,
            "date": 1642854627022
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/14.png"
    },
    {
        "name": "Crypto Skoodle #15",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/15.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "In love "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "2d42351ad70032bcdf1e4db05c37e692819fa9b9",
            "edition": 15,
            "date": 1642854627126
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/15.png"
    },
    {
        "name": "Crypto Skoodle #16",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/16.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 34 "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "33b5bcb22b04b97cee94acd74b4e471caed4baf4",
            "edition": 16,
            "date": 1642854627224
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/16.png"
    },
    {
        "name": "Crypto Skoodle #17",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/17.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "88928cad7fd339c544a7db9c01e99a9e6c62e3e4",
            "edition": 17,
            "date": 1642854627320
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/17.png"
    },
    {
        "name": "Crypto Skoodle #18",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/18.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 31 "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "4a2ab8ef33a9ad995e07aead36269ea20a3f12e9",
            "edition": 18,
            "date": 1642854627419
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/18.png"
    },
    {
        "name": "Crypto Skoodle #19",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/19.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Short "
            },
            {
                "trait_type": "Eyes",
                "value": "Relaxed "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "d3740f459f6f4cfad99914d070b5b89302c8c1f2",
            "edition": 19,
            "date": 1642854627514
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/19.png"
    },
    {
        "name": "Crypto Skoodle #20",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/20.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "9a0fbda28e3bf928bdeb66f77690be1d5e9d1c72",
            "edition": 20,
            "date": 1642854627612
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/20.png"
    },
    {
        "name": "Crypto Skoodle #21",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/21.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "White "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "38d9f9800690c8de62894d60444843a626524bed",
            "edition": 21,
            "date": 1642854627724
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/21.png"
    },
    {
        "name": "Crypto Skoodle #22",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/22.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Short "
            },
            {
                "trait_type": "Eyes",
                "value": "Sneaky Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Green Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "e739194f49adacc7852edbb811e1978303b07a14",
            "edition": 22,
            "date": 1642854627982
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/22.png"
    },
    {
        "name": "Crypto Skoodle #23",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/23.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Sunglasses "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Beanie "
            }
        ],
        "custom_fields": {
            "dna": "89f7f8efe3f7a68fc97ec26b9a1a9060e4a7f9c3",
            "edition": 23,
            "date": 1642854628082
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/23.png"
    },
    {
        "name": "Crypto Skoodle #24",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/24.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Dead "
            },
            {
                "trait_type": "Hair",
                "value": "Green Beanie "
            }
        ],
        "custom_fields": {
            "dna": "4b8dbd796f1409f47385b66c733eb09305edd329",
            "edition": 24,
            "date": 1642854628188
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/24.png"
    },
    {
        "name": "Crypto Skoodle #25",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/25.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Blue "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "dc9eb947bf228029b01353dd446745c7f1009ed9",
            "edition": 25,
            "date": 1642854628284
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/25.png"
    },
    {
        "name": "Crypto Skoodle #26",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/26.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 32 "
            },
            {
                "trait_type": "Hair",
                "value": "Green Beanie "
            }
        ],
        "custom_fields": {
            "dna": "726d126496848b72f5e36c15f42460ebbd359a3c",
            "edition": 26,
            "date": 1642854628486
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/26.png"
    },
    {
        "name": "Crypto Skoodle #27",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/27.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient3  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Spooky "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Sneaky Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Receding "
            }
        ],
        "custom_fields": {
            "dna": "80005191529f78f091a0a8cd90d2268378048032",
            "edition": 27,
            "date": 1642854628731
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/27.png"
    },
    {
        "name": "Crypto Skoodle #28",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/28.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "White Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Eye Pink "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "9c1adea566fbc795eaa17078f4d7f3cd6f9972a1",
            "edition": 28,
            "date": 1642854628982
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/28.png"
    },
    {
        "name": "Crypto Skoodle #29",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/29.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient3  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 31 "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Receding "
            }
        ],
        "custom_fields": {
            "dna": "a3418f6b1e8cdd61b52d30de4eae7d9419f69af7",
            "edition": 29,
            "date": 1642854629233
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/29.png"
    },
    {
        "name": "Crypto Skoodle #30",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/30.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Golden "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "In love "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Beanie "
            }
        ],
        "custom_fields": {
            "dna": "6284cfa303d3b28776a24d1d9eb765d826109613",
            "edition": 30,
            "date": 1642854629329
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/30.png"
    },
    {
        "name": "Crypto Skoodle #31",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/31.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Pink  "
            },
            {
                "trait_type": "Bones",
                "value": "Rainbow "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Short "
            },
            {
                "trait_type": "Eyes",
                "value": "Dead "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "32ac150d58b05d97b6cdcc2b807a5bbb79737ff6",
            "edition": 31,
            "date": 1642854629426
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/31.png"
    },
    {
        "name": "Crypto Skoodle #32",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/32.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Short "
            },
            {
                "trait_type": "Eyes",
                "value": "Pure Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Receding "
            }
        ],
        "custom_fields": {
            "dna": "b13c7d125c40f0cbaca44822d2dff95d93d664c0",
            "edition": 32,
            "date": 1642854629524
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/32.png"
    },
    {
        "name": "Crypto Skoodle #33",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/33.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "White "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "ee6f6a9b2fbd10c1839a2f934fc7463778b8d413",
            "edition": 33,
            "date": 1642854629770
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/33.png"
    },
    {
        "name": "Crypto Skoodle #34",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/34.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Receding "
            }
        ],
        "custom_fields": {
            "dna": "7aec09c26168ebdeee50d786da5dc1cf9005043e",
            "edition": 34,
            "date": 1642854629870
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/34.png"
    },
    {
        "name": "Crypto Skoodle #35",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/35.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "White "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 32 "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Beanie "
            }
        ],
        "custom_fields": {
            "dna": "9095186f06779bd070e56e668e432350990c4637",
            "edition": 35,
            "date": 1642854629970
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/35.png"
    },
    {
        "name": "Crypto Skoodle #36",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/36.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "Big Cartoon "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Beanie "
            }
        ],
        "custom_fields": {
            "dna": "c750d2149e4f3ff7c7e865d0e698588fa5689490",
            "edition": 36,
            "date": 1642854630069
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/36.png"
    },
    {
        "name": "Crypto Skoodle #37",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/37.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Blue "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "Sunglasses "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "470183fb6b1b37db61157acf322526e27ee47952",
            "edition": 37,
            "date": 1642854630165
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/37.png"
    },
    {
        "name": "Crypto Skoodle #38",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/38.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient3  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Relaxed "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "8a95c5c59571e6f4f2c60ee98a8d4bb04cc91f4d",
            "edition": 38,
            "date": 1642854630409
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/38.png"
    },
    {
        "name": "Crypto Skoodle #39",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/39.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient3  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "White Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 31 "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "e896d7aca1fa278e9296f01c72aa58b42e7fe129",
            "edition": 39,
            "date": 1642854630657
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/39.png"
    },
    {
        "name": "Crypto Skoodle #40",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/40.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "White "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "White Short "
            },
            {
                "trait_type": "Eyes",
                "value": "Pure Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "7c9ff1ab84203aece07f439b84b197e1cd96d28e",
            "edition": 40,
            "date": 1642854630867
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/40.png"
    },
    {
        "name": "Crypto Skoodle #41",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/41.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 30 "
            },
            {
                "trait_type": "Hair",
                "value": "Green Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "8f5beefa075ff02568e66ecd14095c8716e88f23",
            "edition": 41,
            "date": 1642854630974
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/41.png"
    },
    {
        "name": "Crypto Skoodle #42",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/42.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Green  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 34 "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Receding "
            }
        ],
        "custom_fields": {
            "dna": "cdc63149867d5723dd0b037be26fb98ae1f7d51f",
            "edition": 42,
            "date": 1642854631077
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/42.png"
    },
    {
        "name": "Crypto Skoodle #43",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/43.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "White Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "In love "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "d6746accf661b82b6b35151fb87417e17ebc2cc7",
            "edition": 43,
            "date": 1642854631174
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/43.png"
    },
    {
        "name": "Crypto Skoodle #44",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/44.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "Relaxed "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Beanie "
            }
        ],
        "custom_fields": {
            "dna": "0d7b81232d92eae33945b1a61a350bd87eec1748",
            "edition": 44,
            "date": 1642854631412
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/44.png"
    },
    {
        "name": "Crypto Skoodle #45",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/45.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Pink  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "In love "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "07eaa4ce27050c5edae30f714b347557abb69f92",
            "edition": 45,
            "date": 1642854631507
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/45.png"
    },
    {
        "name": "Crypto Skoodle #46",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/46.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "Dead "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "d132ec95b5c71c364a70ff3005986e5d5023d16f",
            "edition": 46,
            "date": 1642854631605
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/46.png"
    },
    {
        "name": "Crypto Skoodle #47",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/47.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Green  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "White Short "
            },
            {
                "trait_type": "Eyes",
                "value": "In love "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Receding "
            }
        ],
        "custom_fields": {
            "dna": "610cb926cfb030f280d08a4e3d7e436e007ce9db",
            "edition": 47,
            "date": 1642854631706
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/47.png"
    },
    {
        "name": "Crypto Skoodle #48",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/48.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Pure Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Green Receding "
            }
        ],
        "custom_fields": {
            "dna": "f212b29c8daad24a09c1fba05a3ddbfe3a0b641c",
            "edition": 48,
            "date": 1642854631805
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/48.png"
    },
    {
        "name": "Crypto Skoodle #49",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/49.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Green  "
            },
            {
                "trait_type": "Bones",
                "value": "Rainbow "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Spooky "
            },
            {
                "trait_type": "Beard",
                "value": "White Short "
            },
            {
                "trait_type": "Eyes",
                "value": "Eye Pink "
            },
            {
                "trait_type": "Hair",
                "value": "Green Receding "
            }
        ],
        "custom_fields": {
            "dna": "02301a9a7c4bc21221e6935776201e7b3992cf60",
            "edition": 49,
            "date": 1642854631900
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/49.png"
    },
    {
        "name": "Crypto Skoodle #50",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/50.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Short "
            },
            {
                "trait_type": "Eyes",
                "value": "Relaxed "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "4d5c211e992185cb9afe33825b01e069156afd37",
            "edition": 50,
            "date": 1642854632152
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/50.png"
    },
    {
        "name": "Crypto Skoodle #51",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/51.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Rainbow "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Relaxed "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "6eb36b70d1ae6c7cb0068f9fd356f8ec9d239edf",
            "edition": 51,
            "date": 1642854632253
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/51.png"
    },
    {
        "name": "Crypto Skoodle #52",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/52.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 30 "
            },
            {
                "trait_type": "Hair",
                "value": "Green Beanie "
            }
        ],
        "custom_fields": {
            "dna": "8588ea6254676475fcb1fe6c1c7e8735bd53737f",
            "edition": 52,
            "date": 1642854632358
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/52.png"
    },
    {
        "name": "Crypto Skoodle #53",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/53.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "546c2bce03e0e318936d601e7bdb1b85e4742d3d",
            "edition": 53,
            "date": 1642854632566
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/53.png"
    },
    {
        "name": "Crypto Skoodle #54",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/54.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 32 "
            },
            {
                "trait_type": "Hair",
                "value": "Green Receding "
            }
        ],
        "custom_fields": {
            "dna": "d76692e98637fac3de34f99ba3bc3b6944b8012d",
            "edition": 54,
            "date": 1642854632666
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/54.png"
    },
    {
        "name": "Crypto Skoodle #55",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/55.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Receding "
            }
        ],
        "custom_fields": {
            "dna": "3230d60ffc4913722255442d87e32a64ea769626",
            "edition": 55,
            "date": 1642854632762
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/55.png"
    },
    {
        "name": "Crypto Skoodle #56",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/56.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "Big Cartoon "
            },
            {
                "trait_type": "Hair",
                "value": "Green Beanie "
            }
        ],
        "custom_fields": {
            "dna": "f9d4c0be588f4a7fa64339fece0c4127a8159c00",
            "edition": 56,
            "date": 1642854632858
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/56.png"
    },
    {
        "name": "Crypto Skoodle #57",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/57.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Green  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 33 "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Receding "
            }
        ],
        "custom_fields": {
            "dna": "7e0444d85a802841a4d8e6e7007b21d4a14d3785",
            "edition": 57,
            "date": 1642854632954
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/57.png"
    },
    {
        "name": "Crypto Skoodle #58",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/58.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Blue "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "White Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 34 "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Beanie "
            }
        ],
        "custom_fields": {
            "dna": "ece7c15b9020f9bad2ffabfdeaaba7830824cbc9",
            "edition": 58,
            "date": 1642854633158
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/58.png"
    },
    {
        "name": "Crypto Skoodle #59",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/59.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "Happy "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Beanie "
            }
        ],
        "custom_fields": {
            "dna": "c1cdcdf2b2e7843d6a2f6b7dbc6d7387ae3cc463",
            "edition": 59,
            "date": 1642854633256
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/59.png"
    },
    {
        "name": "Crypto Skoodle #60",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/60.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Receding "
            }
        ],
        "custom_fields": {
            "dna": "d3a72c97b19bd9bc88d4031f034e76b3ab372067",
            "edition": 60,
            "date": 1642854633354
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/60.png"
    },
    {
        "name": "Crypto Skoodle #61",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/61.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 32 "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "65df9708ce3680bca3fbdfbd1b0f191ae31f2225",
            "edition": 61,
            "date": 1642854633562
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/61.png"
    },
    {
        "name": "Crypto Skoodle #62",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/62.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient3  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "In love "
            },
            {
                "trait_type": "Hair",
                "value": "Green Beanie "
            }
        ],
        "custom_fields": {
            "dna": "176d557094b1be28bcf46540cbc2d7911802c52f",
            "edition": 62,
            "date": 1642854633809
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/62.png"
    },
    {
        "name": "Crypto Skoodle #63",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/63.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 34 "
            },
            {
                "trait_type": "Hair",
                "value": "Green Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "f5c60710ac5aa9c2eea5454d01d17db24abffcf9",
            "edition": 63,
            "date": 1642854633917
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/63.png"
    },
    {
        "name": "Crypto Skoodle #64",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/64.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 30 "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Beanie "
            }
        ],
        "custom_fields": {
            "dna": "047f1d71472e8574c6d8cd10b9d4be333055ee84",
            "edition": 64,
            "date": 1642854634017
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/64.png"
    },
    {
        "name": "Crypto Skoodle #65",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/65.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Sunglasses "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Beanie "
            }
        ],
        "custom_fields": {
            "dna": "bd38fca905bbe0072f8fdeda3201620ba1a61b97",
            "edition": 65,
            "date": 1642854634265
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/65.png"
    },
    {
        "name": "Crypto Skoodle #66",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/66.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient3  "
            },
            {
                "trait_type": "Bones",
                "value": "White "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 34 "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Receding "
            }
        ],
        "custom_fields": {
            "dna": "1a9b0d11ba6052e5ece8fd606e21343eefb5a1d6",
            "edition": 66,
            "date": 1642854634517
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/66.png"
    },
    {
        "name": "Crypto Skoodle #67",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/67.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Golden "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Spooky "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Big Cartoon "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "2e860e43e658bccacaa381b38518a8ece914749d",
            "edition": 67,
            "date": 1642854634623
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/67.png"
    },
    {
        "name": "Crypto Skoodle #68",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/68.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 32 "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "e900e6399392b37843240549f42dc98180cd1545",
            "edition": 68,
            "date": 1642854634722
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/68.png"
    },
    {
        "name": "Crypto Skoodle #69",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/69.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Relaxed "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Receding "
            }
        ],
        "custom_fields": {
            "dna": "99c614283a4d5846717d133da5d40b4a3244cd7d",
            "edition": 69,
            "date": 1642854634926
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/69.png"
    },
    {
        "name": "Crypto Skoodle #70",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/70.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "ad8fd61525962f664ce443e4fe3ff460b87f8247",
            "edition": 70,
            "date": 1642854635027
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/70.png"
    },
    {
        "name": "Crypto Skoodle #71",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/71.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Green  "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Dead "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "cc35e20c564c2c02974ca085ef30f13cb0f4a42a",
            "edition": 71,
            "date": 1642854635135
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/71.png"
    },
    {
        "name": "Crypto Skoodle #72",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/72.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Receding "
            }
        ],
        "custom_fields": {
            "dna": "ccfc312fb2d38c48def0768ba11645a7819922b9",
            "edition": 72,
            "date": 1642854635232
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/72.png"
    },
    {
        "name": "Crypto Skoodle #73",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/73.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Beanie "
            }
        ],
        "custom_fields": {
            "dna": "5526ed874204b1501a066d3e57654efd36da83c3",
            "edition": 73,
            "date": 1642854635332
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/73.png"
    },
    {
        "name": "Crypto Skoodle #74",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/74.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "Big Cartoon "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Receding "
            }
        ],
        "custom_fields": {
            "dna": "5eb2b0677e1089d1acdbc42fe922f0ffa3a76df4",
            "edition": 74,
            "date": 1642854635434
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/74.png"
    },
    {
        "name": "Crypto Skoodle #75",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/75.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "White Short "
            },
            {
                "trait_type": "Eyes",
                "value": "Sneaky Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "fdb6ab111b0534cb6086f3786cb424f0b4bf5c5f",
            "edition": 75,
            "date": 1642854635531
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/75.png"
    },
    {
        "name": "Crypto Skoodle #76",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/76.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Golden "
            },
            {
                "trait_type": "Head",
                "value": "Blue "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Happy "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Receding "
            }
        ],
        "custom_fields": {
            "dna": "56cf07fc5ab92199e0e18e6821b644ef244b6383",
            "edition": 76,
            "date": 1642854635779
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/76.png"
    },
    {
        "name": "Crypto Skoodle #77",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/77.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Receding "
            }
        ],
        "custom_fields": {
            "dna": "fd853e13b89c5325ba4bd80e738d13af2224fc2e",
            "edition": 77,
            "date": 1642854635979
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/77.png"
    },
    {
        "name": "Crypto Skoodle #78",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/78.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "White Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Eye Pink "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "747363e30e7ec89834642148f4d39a478a03b615",
            "edition": 78,
            "date": 1642854636076
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/78.png"
    },
    {
        "name": "Crypto Skoodle #79",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/79.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Pure Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Receding "
            }
        ],
        "custom_fields": {
            "dna": "a17d96bb04f1f78216f5d3557e09cc7f83c08df1",
            "edition": 79,
            "date": 1642854636176
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/79.png"
    },
    {
        "name": "Crypto Skoodle #80",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/80.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Scary "
            },
            {
                "trait_type": "Beard",
                "value": "White Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 31 "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "09e2648738b8ddf36f6cf2f2ef7b65519445393f",
            "edition": 80,
            "date": 1642854636271
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/80.png"
    },
    {
        "name": "Crypto Skoodle #81",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/81.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Eye Pink "
            },
            {
                "trait_type": "Hair",
                "value": "Green Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "6deebe1861b8ec0bf2a3363a5f7acd9eab531eec",
            "edition": 81,
            "date": 1642854636388
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/81.png"
    },
    {
        "name": "Crypto Skoodle #82",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/82.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient2  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Yellow "
            },
            {
                "trait_type": "Mouth",
                "value": "Spooky "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Sneaky Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Receding "
            }
        ],
        "custom_fields": {
            "dna": "fc55e096006618465b14713f8cf01cc9d5d9cec2",
            "edition": 82,
            "date": 1642854636633
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/82.png"
    },
    {
        "name": "Crypto Skoodle #83",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/83.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Pink  "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Big Cartoon "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Receding "
            }
        ],
        "custom_fields": {
            "dna": "fd0e3e853a70ea37f6bd2b49d20316b99da1ff2e",
            "edition": 83,
            "date": 1642854636736
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/83.png"
    },
    {
        "name": "Crypto Skoodle #84",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/84.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 32 "
            },
            {
                "trait_type": "Hair",
                "value": "Blue Receding "
            }
        ],
        "custom_fields": {
            "dna": "be09312b70422bb9ce123dba49a2f241d5556615",
            "edition": 84,
            "date": 1642854636846
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/84.png"
    },
    {
        "name": "Crypto Skoodle #85",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/85.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Pink  "
            },
            {
                "trait_type": "Bones",
                "value": "Orange "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 33 "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Beanie "
            }
        ],
        "custom_fields": {
            "dna": "a73f08da113713afc42eef560faeb5e1e3bfcb4e",
            "edition": 85,
            "date": 1642854636945
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/85.png"
    },
    {
        "name": "Crypto Skoodle #86",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/86.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Dead "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "a0ec72d87e0179a4eaa26ca6a555772e336af78f",
            "edition": 86,
            "date": 1642854637154
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/86.png"
    },
    {
        "name": "Crypto Skoodle #87",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/87.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Green "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Green Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "b87449b8cc07b2a14cd69efa7104c4fdb614cb08",
            "edition": 87,
            "date": 1642854637251
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/87.png"
    },
    {
        "name": "Crypto Skoodle #88",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/88.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Blue "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Relaxed "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "39f2a90dbd34f7b9e0c22e4d20ffbb914760a8bd",
            "edition": 88,
            "date": 1642854637350
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/88.png"
    },
    {
        "name": "Crypto Skoodle #89",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/89.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Gradient1  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "In love "
            },
            {
                "trait_type": "Hair",
                "value": "Green Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "9a622809b0b575b30ecdf8b1234a18846bea3bfe",
            "edition": 89,
            "date": 1642854637554
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/89.png"
    },
    {
        "name": "Crypto Skoodle #90",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/90.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Rainbow  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Happy "
            },
            {
                "trait_type": "Beard",
                "value": "White Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Pure Evil "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Receding "
            }
        ],
        "custom_fields": {
            "dna": "e5c5368464672b506e13794ccf440cafe7b58f7a",
            "edition": 90,
            "date": 1642854637652
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/90.png"
    },
    {
        "name": "Crypto Skoodle #91",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/91.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Sunglasses "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Receding "
            }
        ],
        "custom_fields": {
            "dna": "8c44ffd2f81ad28acc9bb0cfc1ab7e083acc0df0",
            "edition": 91,
            "date": 1642854637753
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/91.png"
    },
    {
        "name": "Crypto Skoodle #92",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/92.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Purple "
            },
            {
                "trait_type": "Head",
                "value": "Green "
            },
            {
                "trait_type": "Mouth",
                "value": "Spooky "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Middle "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Beanie "
            }
        ],
        "custom_fields": {
            "dna": "5b46f72ace9da7ff82c4e124d462ecf6d17f404b",
            "edition": 92,
            "date": 1642854637851
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/92.png"
    },
    {
        "name": "Crypto Skoodle #93",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/93.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Golden "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "Happy "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Receding "
            }
        ],
        "custom_fields": {
            "dna": "adef0531d8bb56d069da4acdd5fe39688de7ad2b",
            "edition": 93,
            "date": 1642854637952
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/93.png"
    },
    {
        "name": "Crypto Skoodle #94",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/94.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Pink "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Skeleton "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "78260571c4067a1e495fd47b38fc9506d0e63257",
            "edition": 94,
            "date": 1642854638053
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/94.png"
    },
    {
        "name": "Crypto Skoodle #95",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/95.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Purple  "
            },
            {
                "trait_type": "Bones",
                "value": "Rainbow "
            },
            {
                "trait_type": "Head",
                "value": "Orange "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "White Short "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 32 "
            },
            {
                "trait_type": "Hair",
                "value": "Yellow Beanie "
            }
        ],
        "custom_fields": {
            "dna": "88d4864d272b45738e5f0d6054f49562bfbf5e95",
            "edition": 95,
            "date": 1642854638149
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/95.png"
    },
    {
        "name": "Crypto Skoodle #96",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/96.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Green  "
            },
            {
                "trait_type": "Bones",
                "value": "Yellow "
            },
            {
                "trait_type": "Head",
                "value": "Blue "
            },
            {
                "trait_type": "Mouth",
                "value": "Goldtooth "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 31 "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Beanie "
            }
        ],
        "custom_fields": {
            "dna": "7f99952136ad26c78f38b93c8893fe3d3b215721",
            "edition": 96,
            "date": 1642854638248
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/96.png"
    },
    {
        "name": "Crypto Skoodle #97",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/97.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Pink "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Brown Middle  "
            },
            {
                "trait_type": "Eyes",
                "value": "Punk Glasses "
            },
            {
                "trait_type": "Hair",
                "value": "Orange Receding "
            }
        ],
        "custom_fields": {
            "dna": "cd76e82f9a01dc47105e1cf88cc32b9607340e5a",
            "edition": 97,
            "date": 1642854638344
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/97.png"
    },
    {
        "name": "Crypto Skoodle #98",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/98.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Green  "
            },
            {
                "trait_type": "Bones",
                "value": "Rainbow "
            },
            {
                "trait_type": "Head",
                "value": "Purple "
            },
            {
                "trait_type": "Mouth",
                "value": "Worried "
            },
            {
                "trait_type": "Beard",
                "value": "White Long "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 34 "
            },
            {
                "trait_type": "Hair",
                "value": "Purple Mohawk "
            }
        ],
        "custom_fields": {
            "dna": "c4984fd3d514958c6bceb2e927b3150f9727f9f6",
            "edition": 98,
            "date": 1642854638441
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/98.png"
    },
    {
        "name": "Crypto Skoodle #99",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/99.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Yellow  "
            },
            {
                "trait_type": "Bones",
                "value": "Golden "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Patchy "
            },
            {
                "trait_type": "Beard",
                "value": "DarkGreen Short  "
            },
            {
                "trait_type": "Eyes",
                "value": "Villain "
            },
            {
                "trait_type": "Hair",
                "value": "Pink Receding "
            }
        ],
        "custom_fields": {
            "dna": "d69434ddd703f6a89896d9adb90c63941a0e0430",
            "edition": 99,
            "date": 1642854638538
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/99.png"
    },
    {
        "name": "Crypto Skoodle #100",
        "description": "Skoodle Description",
        "file_url": "ipfs://NewUriToReplace/100.png",
        "attributes": [
            {
                "trait_type": "Background",
                "value": "Orange  "
            },
            {
                "trait_type": "Bones",
                "value": "Blue "
            },
            {
                "trait_type": "Head",
                "value": "Rainbow "
            },
            {
                "trait_type": "Mouth",
                "value": "Sad "
            },
            {
                "trait_type": "Beard",
                "value": "Punk Long  "
            },
            {
                "trait_type": "Eyes",
                "value": "pixil layer 34 "
            },
            {
                "trait_type": "Hair",
                "value": "Green Receding "
            }
        ],
        "custom_fields": {
            "dna": "e19728b7a0ab3040764f0bb8361cb6c11795ca81",
            "edition": 100,
            "date": 1642854638634
        },
        "image": "https://gateway.pinata.cloud/ipfs/QmUoFW4MMjHMJGB19GdmCjyQH9nTttveeNfUtPnvNRFB1f/100.png"
    }
]