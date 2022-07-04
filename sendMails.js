const EventSource = require('eventsource');
var nev = require('node-email-validator');
  const Sequelize = require('sequelize');
  const {QueryTypes} = require('sequelize');
  const sequelize = new Sequelize("eduard72_emailmkt", "eduard72_wp625", "37@S0DSm(p", {
    host: 'sh-pro20.hostgator.com.br',
    dialect: "mysql",
    define: {
      freezeTableName: true,
      timestamps: false,
    },
    logging: false,
  });
  require('dotenv').config();
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const eventSourceInit = {
    headers: {
      "Authorization": "Bearer a905d915f7d2ad37449fdfc1b285884c",
    }
  }
  const es = new EventSource("https://api.pipedream.com/sources/dc_MDuk7Ym/sse", eventSourceInit);
  
  console.log("LISTEN emailValidate - Pipedream - dc_MDuk7Ym/sse");
  console.log("LISTEN sendMails - Pipedream - dc_MDuk7Ym/sse");
  
  es.onmessage = event => {
    const json = JSON.parse(event.data);
  
    var reqButton = json.event;
    var runMail = json.event;  

  }  

  sendEmail();
 async function sendEmail() {

      try {
        var getEmail = await sequelize.query("SELECT id,email FROM emails ORDER BY rand()", {
          type: QueryTypes.SELECT
        })

  for (var x = 0; x < getEmail.length; x++) {
  const msg = {
  to: getEmail[x], 
  from: 'Alexia Perez <comercial@cadastroindustrialbrasil.com.br>', 
  subject: 'Lista de industrias para contato comercial',
    html: "6",
}

          sgMail.send(msg).then(() => {
              console.log(getEmail[x].email + " - OK" + x)
            })
            .catch((error) => {
              console.error(error)
            })
            var timestamp = new Date();
            var ano = timestamp.getFullYear();
            var mes = timestamp.getMonth();
            var dia = timestamp.getDate();
            var hora = timestamp.getHours()
            var minuto = timestamp.getMinutes()

            if(mes <= 9){mes = mes+1; mes = "0"+mes}
            if(hora <=9){hora="0"+hora}
            if(minuto <=9){minuto="0"+minuto}
            var date = ano +"-"+mes+"-"+dia+" "+hora+":"+minuto;

       await sequelize.query("UPDATE emails SET atualizado=3 WHERE id=" + getEmail[x].id + "")
       await sequelize.query("UPDATE emails SET  data='"+ date +"' WHERE id=" + getEmail[x].id + "")     
          await delay(8000)

        }
      } catch (error) {
        console.log(error);
        process.exit(1);
  }
 }


