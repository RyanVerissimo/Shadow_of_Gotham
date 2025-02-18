const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

const authRoutes = require('./routes/auth');
const resourceRoutes = require('./routes/resources');

app.use('/auth', authRoutes);
app.use('/resources', resourceRoutes);

app.get('/', (req, res) => {
    res.send('Funfou');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});

