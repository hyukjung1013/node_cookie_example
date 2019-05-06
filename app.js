var http = require('http');
var cookie = require('cookie');

http.createServer((req, res) => {

    console.log(req.headers.cookie);
    // "name=ronaldo; nation=portugal"

    var cookies = {};
    if(req.headers.cookie !== undefined) {
        cookies = cookie.parse(req.headers.cookie);
    }

    res.writeHead(300, {
        'Set-Cookie': [
            'name=ronaldo',
            'nation=portugal',
            `permenent=permenent; Max-Age=${60*60*24*30}`,
            'secure=secure; Secure',
            'httpOnly=httpOnly; HttpOnly',
            'path=path; Path=/cookie',
            'domain=domain; Domain=myApp.test.com'
        ]
    });
    res.end('Hello world!');
}).listen(3000, () => {
    console.log('3000 port listening...');
});