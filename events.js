  const EventSource = require('eventsource');
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
        max: 6,
        min: 1,
        idle: 200000,
        acquire: 200000
      },
    logging: false
  });

  const eventSourceInit = {
    headers: {
      "Authorization": "Bearer a905d915f7d2ad37449fdfc1b285884c",
    }
  }
  const es = new EventSource("https://api.pipedream.com/sources/dc_Zdu4bYy/sse", eventSourceInit);

  console.log("Listening to SSE stream at https://api.pipedream.com/sources/dc_Zdu4bYy/sse\n");

  es.onmessage = event => {
    const json = JSON.parse(event.data);

    jsonToArray.jsonToArray(json.event, function(result) {
      for (x = 0; x < result.length; x++) {
      //  console.log(result[x]);
        var email = result[x][0];
        var status = result[x][1];

        console.log(status + " - " + email);
        console.log(result[x][2]);
        console.log(" ");

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

        sequelize.query("UPDATE facebook SET atualizado=5 WHERE email='" + email + "'");
        sequelize.query("UPDATE facebook SET status='" + status + "' WHERE email='" + email + "'");
        sequelize.query("UPDATE facebook SET data='" + date + "' WHERE email='" + email + "'")
      }
    });
  }
