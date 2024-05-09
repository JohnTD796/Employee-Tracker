const department = require('express').Router();
const { Pool } = require('pg')

const pool = new Pool(
    {
      user: 'postgres',
      password: '1234',
      host: 'localhost',
      database: 'movies_db'
    },
    console.log(`Connected to the database.`)
  )
  
  pool.connect();

function GETdepartment(){
department.get('/api/department', (req, res) => {
    const sql = `SELECT * FROM department;`;
    pool.query(sql, (err, { rows }) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({
          message: 'success',
          data: rows
        });
      });
});
};


// department.post('/api/new-department', (req, res) => {
//     const sql = `INSERT INTO department (id, name)
//     VALUES ($1)`;
//   const params = [body.movie_name];

//   pool.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });

module.exports = department, GETdepartment;
