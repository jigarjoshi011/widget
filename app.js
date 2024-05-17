const port = 3003;
const express = require('express');
const app = express();

app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
