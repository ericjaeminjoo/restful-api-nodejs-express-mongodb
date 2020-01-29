const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Start listening to PORT
app.listen(PORT, () => console.log(`Server is UP -> listening @ port ${PORT}`));
