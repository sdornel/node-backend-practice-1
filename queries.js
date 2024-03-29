const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'kaidornel',
    host: 'localhost',
    database: 'books_api',
    password: 'password',
    port: 5432,
}) 

// In a production environment, you would want to 
// put your configuration details in a separate file 
// with restrictive permissions that is not accessible 
// from version control

////////////////////////////// USERS //////////////////////////////

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => { // off script here too
    const { name, email, password } = request.body
    
    pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', 
    [name, email, password], (error, results) => {
        if (error) {
            throw error
        }
    })
    response.status(201).send(`User added with ID: ${result.insertId}`)
}

const updateUser = (request, response) => { // I think I went a little off script here. also this is for a put request
    const id = parseInt(request.params.id)
    const { name, email, password } = request.body
    
    pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', // might be wrong
    [name, email, password, id], (error, results) => {
        if (error) {
            throw error
        }
    })
    response.status(200).send(`Modified user with ID: ${id}`) // response.status(200).send(`User modified with ID: ${id}`)
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Deleted user with ID: ${id}`) // response.status(200).send(`User deleted with ID: ${id}`)
    })
}

////////////////////////////// USERS //////////////////////////////

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'me',
//   host: 'localhost',
//   database: 'books_api',
//   password: 'password',
//   port: 5432,
// })
// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const createUser = (request, response) => {
//   const { name, email } = request.body

//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// }