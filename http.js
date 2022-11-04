// // creating Node js server that listens request

// const http = require('http')
// const fs = require('fs')   

// function requestListener(req, res) {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
//         // return response should be a input-from and a button
//         // which will again send a resopnse which would not be a GET request
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<html>")
//         res.write("<head>")
//         res.write('<body> <form action="/message" method="POST"> <input name="message" type="text"><button type="sumbit">Send</button></form> </body')
//         res.write("</html>")
//         return res.end();
//     }

//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parseBody = Buffer.concat(body).toString();
//             console.log(parseBody);
//             const output = parseBody.split('=')[1];
//             fs.writeFileSync('message.txt', output)
//         })

//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//     }

//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text/html');
//     res.write("<html>")
//     res.write("<head>")
//     res.write("<body> <h1> Hello from my Node server </h1> </body>")
//     res.write("</html>")
//     res.end();
//     // process.exit();
// }

// const server = http.createServer(requestListener);
// server.listen(3000);
