console.log("Vaibhav Chikhaliya");

const express = require('express');

const port = 8080;

const app = express();

app.set('veiw engine' , 'ejs');

app.get('/' , (req , res) => {
    return res.render('index')
})

app.listen(port , (err) =>{
    if (err) {
        return false;
    }
    console.log(`server is start on port :- ${port}`);
    
})