const express = require('express');
const bodyParser = require ("body-parser")
const Sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');
const sequelize = new Sequelize("eduard72_emailmkt", "eduard72_wp625", "37@S0DSm(p", {
  host: 'sh-pro20.hostgator.com.br',
  dialect: "mysql",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  logging: false
});

const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json())

app.post('/', function (req, res) {
  console.log(req.body[0].email +" - "+ req.body[0].event)
  sequelize.query("UPDATE facebook SET status='" + req.body[0].event + "' WHERE email='" + req.body[0].email + "'")
  res.status(200).end() 
});

app.listen(port, () => console.log(`Listening on port ${port}`));