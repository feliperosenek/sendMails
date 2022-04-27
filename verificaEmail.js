const Sequelize = require('sequelize');
const {
  QueryTypes
} = require('sequelize');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const sequelize = new Sequelize("eduard72_emailmkt", "eduard72_wp625", "37@S0DSm(p", {
  host: 'sh-pro20.hostgator.com.br',
  dialect: "mysql",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  logging: false
});
var nev = require('node-email-validator');
var valida = 0
var emailValido = []
var emails = []

validaEmail();

async function validaEmail() {

  try {

    var getEmails = await sequelize.query("SELECT id, email FROM facebook WHERE valido=0", {
      type: QueryTypes.SELECT
    })

    for (var x = 0; x < getEmails.length; x++) {
      console.log("Coletando " + x + " de " + getEmails.length);
      nev(getEmails[x].email).then(
        validation => {
          if (validation.isEmailValid == true) {
            valida = 3
          }
          if (validation.isEmailValid == false) {
            valida = 1
          }
          emailValido = {
            id: getEmails[x].id,
            valido: valida
          }
          emails.push(emailValido)
        }).catch(error => console.log(error));
      valida = 0;
      await delay(300)
    }

    for (var y = 0; y < emails.length; y++) {
      console.log("Inserindo " + y + " de " + emails.length);
      await sequelize.query("UPDATE facebook SET valido='" + emails[y].valido + "' WHERE id=" + emails[y].id + "")
    }



  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
