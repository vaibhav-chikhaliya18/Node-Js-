const addProduct = (req,res) => {
    return res.render('product/add');
}

const viewProduct = (req,res) => {
    return res.render('product/view');
}

module.exports = {
    addProduct,
    viewProduct
}