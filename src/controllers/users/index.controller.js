const { pool } = require('../../database/index');

const getUsers = async (req, res) => {
  const response = await pool.query('SELECT * FROM users');
  res.status(200).json(response.rows);
}

const createUsers = async (req, res) => {
  const { name, email } = req.body;
  const response = await pool.query('INSERT INTO users (name,email) VALUES ($1, $2)', [name, email]);
  if (response.rowCount === 1) {
    res.json({
      message: 'User Added Succesfully',
      body: {
        user: {
          name,
          email
        }
      }
    })
  } else {
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}

const getUsersById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  res.status(200).json(response.rows);
}

const deleteUsersById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
  console.log(response);
  res.status(200).json({
    message: `User ${id} were removed successfully`
  });
}

const updateUsersById = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
  console.log(response);
  res.status(200).json({
    message: `User ${id} were updated successfully`,
    user: {
      name,
      email
    }
  });
}

module.exports = {
  getUsers,
  createUsers,
  getUsersById,
  deleteUsersById,
  updateUsersById
}
