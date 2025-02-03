const indexPage = (req,res) => {
    return res.render('index');
}

const productPage = (req,res) => {
    return res.render('product');
}
const cartPage = (req,res) => {
    return res.render('cart');
}
const aboutPage = (req,res) => {
    return res.render('about');
}

module.exports ={
    indexPage , productPage , cartPage , aboutPage
}