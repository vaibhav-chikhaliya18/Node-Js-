const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


let books = [];

app.get('/', (req, res) => {
    res.render('add-book');
});

app.get('/books', (req, res) => {
    const searchQuery = req.query.search || '';
    const showActive = req.query.filter === 'active';
    const showInactive = req.query.filter === 'inactive';

    let filteredBooks = [...books];
    
    if (searchQuery) {
        filteredBooks = filteredBooks.filter(book => 
            book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (showActive) {
        filteredBooks = filteredBooks.filter(book => book.isActive);
    } else if (showInactive) {
        filteredBooks = filteredBooks.filter(book => !book.isActive);
    }

    res.render('view-books', { 
        books: filteredBooks,
        searchQuery,
        currentFilter: req.query.filter || 'all'
    });
});

app.post('/add-book', (req, res) => {
    const { bookName, authorName, price, isActive } = req.body;
    books.push({
        bookName,
        authorName,
        price,
        isActive: isActive === 'on',
        id: Date.now()
    });
    res.redirect('/books');
});

app.get('/edit/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.render('edit-book', { book });
    } else {
        res.redirect('/books');
    }
});

app.post('/edit/:id', (req, res) => {
    const { bookName, authorName, price, isActive } = req.body;
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index !== -1) {
        books[index] = {
            ...books[index],
            bookName,
            authorName,
            price,
            isActive: isActive === 'on'
        };
    }
    res.redirect('/books');
});

app.post('/delete/:id', (req, res) => {
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.redirect('/books');
});

app.post('/toggle-status/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index !== -1) {
        books[index].isActive = !books[index].isActive;
    }
    res.redirect('/books');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});