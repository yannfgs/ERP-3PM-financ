const express = require('express');
const app = express();
const port = 3000;

app.use(express;StaticRange('public'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})