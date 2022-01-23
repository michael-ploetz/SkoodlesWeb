const express = require('express');
const path = require('path');

const app = express();

// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/skoodles', require('./routes/api/skoodles'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));