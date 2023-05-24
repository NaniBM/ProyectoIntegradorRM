const http = require('http');
const data = require('./utils/data')
const PORT = 3001;
http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req
    if(url.includes("/rickandmorty/character")) {
        // /rickandmorty/character/2
        // [rickandmorty, character, 234]
        const id = url.split("/").at(-1);
        // const id = urlParts[urlParts.length-1];
        const character = data.filter((character) => character.id === Number(id))[0];
        if (!character) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end("Route not found");
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        console.log(JSON.stringify(character))
        return res.end(JSON.stringify(character));
    }

}).listen(3001, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

try {
    
} catch (error) {
    
}