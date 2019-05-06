var http = require('http');

http.createServer((req, res) => {
    res.writeHead(300, {
        'Set-Cookie': [
            'name=ronaldo',
            'nation=portugal'
        ]
    });
    res.end('Hello world!');
}).listen(3000, () => {
    console.log('3000 port listening...');
});