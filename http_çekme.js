const http = require('http');



const server = http.createServer((req,res)=> {
    const url = req.url;
    if (url === '/'){
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write("<h1> INDEX SAYFASI</h1>");
    }
    else if (url === '/about'){
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write("<h1> ABOUT SAYFASI</h1>");
    }
    else if (url === '/contact'){
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write("<h1> CONTACT SAYFASI</h1>");
   res.end();
}
res.end();
});
const port = 5000;

server.listen(port, () => {
    console.log(`sunucu port ${port} de başlatıldı.`);
});
