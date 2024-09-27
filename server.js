const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle root request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on all available interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://<your-ec2-public-ip>:${port}`);
});
