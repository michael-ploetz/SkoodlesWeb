const express = require('express');
const router = express.Router();

// Get Single Member
router.get('/:id', (req, res) => {

    res.json({ message: "Nice try. Wait for the reveal!" });
});

module.exports = router;