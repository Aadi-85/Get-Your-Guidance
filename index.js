const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (CSS, JS, images, etc.)
app.use(express.static('public'));

// Route for serving HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signin.html');
});

// Route for handling form submission
app.post('/submit', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Here you can add code to store the form data in a database
    console.log('Email:', email);
    console.log('Password:', password);

    res.redirect('/services.html'); // Redirect to services.html after form submission
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
