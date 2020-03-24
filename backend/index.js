const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'OmniStack',
        desenvolvedor: 'Rodrigo'
    });
});

app.listen(3333);