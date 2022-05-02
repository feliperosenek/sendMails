const EventSource = require('eventsource');
var nev = require('node-email-validator');
var jsonToArray = require('json-value-to-array');
const Sequelize = require('sequelize');
const {
  QueryTypes
} = require('sequelize');
const sequelize = new Sequelize("eduard72_emailmkt", "eduard72_wp625", "37@S0DSm(p", {
  host: 'sh-pro20.hostgator.com.br',
  dialect: "mysql",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  connectionTimeout: 0,
    pool:{
      max: 100,
      min: 0,
      idle: 200000,
      acquire: 200000
    },
  logging: false
});

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

var valida = 0
var emailValido = []
var emails = []

const eventSourceInit = {
  headers: {
    "Authorization": "Bearer a905d915f7d2ad37449fdfc1b285884c",
  }
}
const es = new EventSource("https://api.pipedream.com/sources/dc_MDuk7Ym/sse", eventSourceInit);

console.log("LISTEN emailValidate - Pipedream - dc_MDuk7Ym/sse");

es.onmessage = event => {
  const json = JSON.parse(event.data);

  var reqButton = json.event;

  console.log(reqButton)

  if(reqButton.flag == 1 && reqButton.process == "validateMail"){
    validateMail();
  }  

  async function validateMail(){

  var getEmails = await sequelize.query("SELECT id, email FROM facebook WHERE atualizado=3 && valido=0 ORDER BY rand()", {
    type: QueryTypes.SELECT
  })

  for (var x = 0; x < getEmails.length; x++) {

    var getMail = await sequelize.query("SELECT id, email FROM facebook WHERE id='" + getEmails[x].id + "'", {
      type: QueryTypes.SELECT
    })

    setMail = getMail[0].email;
    idMail = getMail[0].id;     

    nev(setMail).then(
      validation => {
        if (!validation.mxRecords || !validation.isEmailValid) {
          valida = 1
        } else {
          valida = 3
        }
        console.log(setMail + ":" + valida)
        sequelize.query("UPDATE facebook SET atualizado=4 WHERE id=" + idMail + "")
        sequelize.query("UPDATE facebook SET valido='" + valida + "' WHERE id=" + idMail + "")
      }).catch(error => console.log(error));
    valida = 0;
    await delay(1000)
  }
}

}






   

  

