// 1] core module -> build by node js / given by node js
// - http,fs,query,url

const {array,object, fun} = require("./localmodule");

// 2] local module -> self created
console.log(array);
console.log(`sum :- ${object.sum(10,20)}`);
console.log(fun());

// 3] third party module
// - npm i express
// - npm i mongoose
// - npm i nodemon