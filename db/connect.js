const Sequelize = require('sequelize');

const connectDB = async (url) => {
  const sequelize = new Sequelize(url, {
    dialect: 'postgres'
  })

  try {
    await sequelize.authenticate()
    console.log('Connected')

  } catch (error) {
    console.error(error)
  }

  return sequelize
}

module.exports = connectDB