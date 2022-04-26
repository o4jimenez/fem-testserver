const express = require('express');
const port = 3000;

const path = require('path');
const filesDir = '/var/www/app/ui/html';

////////////////////////////////////////////////////////////////

// Create server
const app = express();
// Port to listen on
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Location of static files
app.use(express.static('ui'));


// Home route
app.get('/', (req, res) => {

    res.sendFile(path.join(filesDir, 'index.html'));


});

// New order route
app.get('/new-order', (req, res) => {
    res.sendFile(path.join(filesDir, 'order-form.html'));
});
