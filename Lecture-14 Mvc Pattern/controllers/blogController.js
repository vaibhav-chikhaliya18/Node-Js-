const addBlog = (req,res) => {
    return res.render('blog/add');
}
const viewBlog = (req,res) => {
    return res.render('blog/view');
}

module.exports = {
    addBlog,
    viewBlog
}