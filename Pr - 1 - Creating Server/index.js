const http = require("http");

const port = 8000;

const fs = require('fs');

const app = http.createServer((req, res) => {
    let fileName = "";

    switch (req.url) {
        case '/':
            fileName = './home.html';
            break;
        case '/about':
            fileName = './about.html';
            break;
        case '/contact':
            fileName = './Contact.html';
            break;
        case '/gallary':
            fileName = './gallary.html';
        break;
        default:
            fileName = './blog.html'
    }
    fs.readFile(fileName, (err, pagename) => {
        if (err) {
            console.log(err);
            return false;
        }
        res.end(pagename);
    })
})

app.listen(port , (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`Server is Running On Port :- ${port}`);
})