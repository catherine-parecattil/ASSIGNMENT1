const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const studentRoutes = require('./routes/studentRoutes');
const app = express();
const PORT = 8000;
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next();
};
app.use(requestLogger);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', studentRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});