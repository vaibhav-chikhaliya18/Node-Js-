const addContact = (req,res) => {
    return res.render('contact/add');
}
const viewContact = (req,res) => {
    return res.render('contact/view');
}

module.exports = {
    addContact,
    viewContact
}