// const db = require('../server.js')
const user = require('../models/user')
const book = require('../models/book')
const group = require('../models/review')

const users = [
    {
        name: "George",
        email: "george@hotmail.com",
        password: "one"
    },
    {
        name: "Gloria",
        email: "gloria@hotmail.com",
        password: "two"
    }
]

const books = [
    {
        title: "The Return of the King",
        author: "J. R. R. Tolkien",
        pages: 416
    },
    {
        title: "Book Two",
        author: "Author Two",
        pages: 2
    }
]

const reviews = [
    {
        name: "lotr review",
        review_text: "great book to read. a real classic",
        stars: 5,
        user_id: 1,
        book_id: 1
    }
]