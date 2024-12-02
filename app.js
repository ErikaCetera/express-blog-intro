// Importa dati express
const express = require('express');
// Importa dati del file data.js
const posts = require('./data');
// Crea applicazione express
const app = express();
// Definisce la porta del server
const port = 3003 ;

// Rende accessibile il contenuto della cartella Public
app.use(express.static('Public'));

// Definisce la rotta base
app.get('/', (req, res) => {
    res.send("Server del mio blog");

});
// Definisce la rotta per visualizzare array dei posts in formato Json e il conteggio
app.get('/bacheca', (req, res) => {
    const data = {
        blogPosts: posts,
        count: posts.length
    };
    res.json(data);
    
});

// Apre il server, in ascolto sulla porta definita
app.listen(port, () => {
    console.log(`Server in ascolto  ${port}`);

});
