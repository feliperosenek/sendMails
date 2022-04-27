  require('dotenv').config();
  const client = require('@sendgrid/client');
  client.setApiKey(process.env.SENDGRID_API_KEY);

  const minimist = require('minimist');
  const params = minimist(process.argv.slice(2))

  const queryParams = {
    "start_date": params.data
  };

  const request = {
    url: `/v3/stats`,
    method: 'GET',
    qs: queryParams
  }

  client.request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(response.body[0].stats[0].metrics);
    })
    .catch(error => {
      console.error(error);
    });//
