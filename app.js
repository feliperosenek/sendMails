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
    logging: false
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
    
    if(reqButton.flag == 1 && reqButton.process == "validateMail"){
      console.log("Validando e-mails")
      validateMail();
    }
    if(runMail == "sendMail"){
      console.log("Enviando e-mails")
      sendEmail();
    }

  }  

 async function sendEmail() {

      try {
        var getEmail = await sequelize.query("SELECT id,email FROM facebook WHERE atualizado=4 && valido=3 ORDER BY rand()", {
          type: QueryTypes.SELECT
        })

  for (var x = 0; x < getEmail.length; x++) {

  const msg = {
  to: getEmail[x].email, 
  from: 'Alexia Perez <comercial@cadastroindustrialbr.com.br>', 
  subject: 'Lista de industrias para contato comercial',
    html: "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'> <html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'><head> <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='format-detection' content='telephone=no'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title></title> <style type='text/css' emogrify='no'> #outlook a { padding: 0; } .ExternalClass { width: 100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } table td { border-collapse: collapse; mso-line-height-rule: exactly; } .editable.image { font-size: 0 !important; line-height: 0 !important; } .nl2go_preheader { display: none !important; mso-hide: all !important; mso-line-height-rule: exactly; visibility: hidden !important; line-height: 0px !important; font-size: 0px !important; } body { width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; } img { outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } a img { border: none; } table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; } th { font-weight: normal; text-align: left; } *[class='gmail-fix'] { display: none !important; } </style> <style type='text/css' emogrify='no'> @media (max-width: 600px) { .gmx-killpill { content: ' \03D1'; } } </style> <style type='text/css' emogrify='no'> @media (max-width: 600px) { .gmx-killpill { content: ' \03D1'; } .r0-c { box-sizing: border-box !important; width: 100% !important } .r1-o { border-style: solid !important; width: 100% !important } .r2-i { background-color: transparent !important } .r3-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 320px !important } .r4-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 320px !important } .r5-i { padding-bottom: 5px !important; padding-top: 5px !important } .r6-c { box-sizing: border-box !important; display: block !important; valign: top !important; width: 100% !important } .r7-i { padding-left: 0px !important; padding-right: 0px !important } .r8-c { box-sizing: border-box !important; text-align: center !important; width: 100% !important } .r9-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important } .r10-i { padding-left: 10px !important; padding-right: 10px !important; text-align: center !important } .r11-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 100% !important } .r12-i { background-color: #ffffff !important } .r13-c { box-sizing: border-box !important; text-align: left !important; valign: top !important; width: 100% !important } .r14-o { border-style: solid !important; margin: 0 auto 0 0 !important; width: 100% !important } .r15-i { padding-top: 15px !important; text-align: left !important } .r16-i { background-color: #ffffff !important; padding-bottom: 20px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 20px !important } .r17-o { background-size: auto !important; border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important } .r18-i { padding-bottom: 15px !important; padding-top: 15px !important } .r19-i { background-color: #e7eafa !important; padding-top: 15px !important; text-align: center !important } .r20-o { background-size: cover !important; border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important } .r21-o { border-style: solid !important; margin: 0 auto 0 auto !important; margin-bottom: 15px !important; margin-top: 15px !important; width: 100% !important } .r22-i { text-align: center !important } .r23-r { background-color: #0092FF !important; border-radius: 4px !important; border-width: 0px !important; box-sizing: border-box; height: initial !important; padding-bottom: 12px !important; padding-left: 5px !important; padding-right: 5px !important; padding-top: 12px !important; text-align: center !important; width: 100% !important } .r24-i { padding-bottom: 15px !important; padding-top: 15px !important; text-align: center !important } .r25-i { padding-bottom: 0px !important; padding-top: 15px !important; text-align: left !important } .r26-i { padding-bottom: 15px !important; padding-top: 15px !important; text-align: left !important } body { -webkit-text-size-adjust: none } .nl2go-responsive-hide { display: none } .nl2go-body-table { min-width: unset !important } .mobshow { height: auto !important; overflow: visible !important; max-height: unset !important; visibility: visible !important; border: none !important } .resp-table { display: inline-table !important } .magic-resp { display: table-cell !important } } </style> <!--[if !mso]><!--> <style type='text/css' emogrify='no'> @import url('https://fonts.googleapis.com/css2?family=Montserrat'); </style> <!--<![endif]--> <style type='text/css'> p, h1, h2, h3, h4, ol, ul { margin: 0; } a, a:link { color: #0092ff; text-decoration: underline } .nl2go-default-textstyle { color: #3b3f44; font-family: arial, helvetica, sans-serif; font-size: 16px; line-height: 1.5 } .default-button { border-radius: 4px; color: #ffffff; font-family: arial, helvetica, sans-serif; font-size: 16px; font-style: normal; font-weight: normal; line-height: 1.15; text-decoration: none; width: 50% } .default-heading1 { color: #1F2D3D; font-family: arial, helvetica, sans-serif; font-size: 36px } .default-heading2 { color: #1F2D3D; font-family: arial, helvetica, sans-serif; font-size: 32px } .default-heading3 { color: #1F2D3D; font-family: arial, helvetica, sans-serif; font-size: 24px } .default-heading4 { color: #1F2D3D; font-family: arial, helvetica, sans-serif; font-size: 18px } a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } .no-show-for-you { border: none; display: none; float: none; font-size: 0; height: 0; line-height: 0; max-height: 0; mso-hide: all; overflow: hidden; table-layout: fixed; visibility: hidden; width: 0; } </style> <!--[if mso]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--> <style type='text/css'> a:link { color: #0092ff; text-decoration: underline } </style> </head> <body text='#3b3f44' link='#0092ff' yahoo='fix' style=''> <table cellspacing='0' cellpadding='0' border='0' role='presentation' class='nl2go-body-table' width='100%' style='width: 100%;'> <tbody><tr> <td align='' class='r0-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td valign='top' class='r2-i' style='background-color: transparent;'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r3-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='700' class='r4-o' style='table-layout: fixed;'> <!-- --> <tbody><tr class='nl2go-responsive-hide'> <td height='5' style='font-size: 5px; line-height: 5px;'>&shy;</td> </tr> <tr> <td class='r5-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <th width='100%' valign='top' class='r6-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td class='nl2go-responsive-hide' width='10' style='font-size: 0px; line-height: 1px;'>&shy; </td> <td valign='top' class='r7-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r8-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r9-o' style='table-layout: fixed; width: 100%;'> <tbody><tr> <td class='nl2go-responsive-hide' width='30' style='font-size: 0px; line-height: 1px;'> &shy; </td> <td class='nl2go-responsive-hide' width='30' style='font-size: 0px; line-height: 1px;'> &shy; </td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> <td class='nl2go-responsive-hide' width='10' style='font-size: 0px; line-height: 1px;'>&shy; </td> </tr> </tbody></table> </th> </tr> </tbody></table> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='5' style='font-size: 5px; line-height: 5px;'>&shy;</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> </tr> <tr> <td align='center' class='r3-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='700' class='r4-o' style='table-layout: fixed; width: 700px;'> <tbody><tr> <td valign='top' class=''> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r9-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td class='r12-i' style='background-color: #ffffff;'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <th width='100%' valign='top' class='r6-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td valign='top' class='r7-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r13-c' align='left'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r14-o' style='table-layout: fixed; width: 100%;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> <tr> <td align='left' valign='top' class='r15-i nl2go-default-textstyle' style='color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;'> <div> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Olá! Tudo bem?&nbsp;</span> </p> <p style='margin: 0;'> &nbsp;</p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Já conhece o Cadastro Industrial Brasil?&nbsp;</span> </p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Se você quer aumentar suas vendas e conquistar novos clientes, o Cadastro pode te ajudar.</span> </p> <p style='margin: 0;'> &nbsp;</p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Diga as indústrias que<strong> SUA EMPRESA EXISTE!</strong></span> </p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>E que você quer ser um fornecedor!</span> </p> <p style='margin: 0;'> &nbsp;</p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'><strong>Sobre o Cadastro Industrial Brasil:</strong></span> </p> <ul style='margin: 0;'> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Uma base de dados;</span> </li> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>De acesso online;</span> </li> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Com contatos e informações de milhares de indústrias em todo país;</span> </li> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Leads B2B.</span> </li> </ul> <p style='margin: 0;'> &nbsp;</p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'><strong>Como você pode utilizar:</strong></span> </p> <ul style='margin: 0; list-style-type: disc;'> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Prospecte novos clientes e parceiros comerciais;</span> </li> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Apresente sua empresa para as indústrias;</span> </li> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Faça contatos por telefone;</span> </li> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Envie sua apresentação por e-mail;</span> </li> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Envie sua apresentação pelo correio;</span> </li> <li><span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Ofereça seus produtos e serviços.</span> </li> </ul> <p style='margin: 0; list-style-type: disc;'> &nbsp;</p> <p style='margin: 0; list-style-type: disc;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Obtenha informações como: Razão Social, Nome Fantasia, CNPJ, Telefone, Endereço, E-mail, Cnae de Atividade, Importador e Exportador, Capital Social, entre outras.&nbsp;</span> </p> </div> </td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> </tr> </tbody></table> </th> </tr> </tbody></table> </td> </tr> </tbody></table> </td> </tr> <tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r9-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr class='nl2go-responsive-hide'> <td height='20' style='font-size: 20px; line-height: 20px; background-color: #ffffff;'> &shy;</td> </tr> <tr> <td class='r16-i' style='background-color: #ffffff;'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <th width='100%' valign='top' class='r6-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> <td valign='top' class='r7-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='670' class='r17-o' style='table-layout: fixed; width: 670px;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> <tr> <td class='r18-i' style='font-size: 0px; line-height: 0px;'> <img src='https://cadastroindustrialbrasil.com.br/wp-content/uploads/2022/05/tablet.png' width='670' border='0' class='' alt='' style='display: block; width: 100%;'> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> </tbody></table> </td> </tr> <tr> <td class='r13-c' align='left'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r14-o' style='table-layout: fixed; width: 100%;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px; background-color: #e7eafa;'> &shy;</td> </tr> <tr> <td align='center' valign='top' class='r19-i nl2go-default-textstyle' style='color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; background-color: #e7eafa; text-align: center;'> <div> <p style='margin: 0;'> &nbsp;</p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 18px;'><strong>ACESSO ONLINE - 12 MESES</strong></span> </p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>Cadastro Industrial 2022</span> </p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>R$ 160,00 por estado</span> </p> <p style='margin: 0;'> <span style='font-family: Verdana, geneva, sans-serif; font-size: 17px;'>*Não é mensalidade, é um valor único.</span> </p> <p style='margin: 0;'> &nbsp;</p> </div> </td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> </tr> </tbody></table> </th> </tr> </tbody></table> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='20' style='font-size: 20px; line-height: 20px; background-color: #ffffff;'> &shy;</td> </tr> </tbody></table> </td> </tr> <tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r20-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr class='nl2go-responsive-hide'> <td height='20' style='font-size: 20px; line-height: 20px; background-color: #ffffff;'> &shy;</td> </tr> <tr> <td class='r16-i' style='background-color: #ffffff;'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <th width='50%' valign='top' class='r6-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> <td valign='top' class='r7-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='160' class='r21-o' style='table-layout: fixed; width: 160px;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> <tr> <td height='36' align='center' valign='top' class='r22-i nl2go-default-textstyle' style='color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5;'> <a href='https://cadastroindustrialbrasil.com.br/?utm_source=sendMails&amp;utm_medium=Email&amp;utm_campaign=acessos-email&amp;utm_id=sendMails' alt='' class='r23-r default-button' target='_blank' data-btn='1' style='font-style: normal; font-weight: normal; line-height: 1.15; text-decoration: none; border-style: solid; display: inline-block; -webkit-text-size-adjust: none; mso-hide: all; background-color: #0092FF; border-color: #0092FF; border-radius: 4px; border-width: 0px; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; height: 36px; padding-bottom: 12px; padding-left: 5px; padding-right: 5px; padding-top: 12px; width: 150px;'> <p style='margin: 0;font-weight: bold;'> ESCOLHER ESTADO</p> </a> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> </tr> </tbody></table> </th> <th width='50%' valign='top' class='r6-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> <td valign='top' class='r7-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='160' class='r21-o' style='table-layout: fixed; width: 160px;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> <tr> <td height='36' align='center' valign='top' class='r22-i nl2go-default-textstyle' style='color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5;'> <a href='https://wa.me/message/YA33PTPQSKU3F1' class='r23-r default-button' target='_blank' data-btn='2' style='font-style: normal; font-weight: normal; line-height: 1.15; text-decoration: none; border-style: solid; display: inline-block; -webkit-text-size-adjust: none; mso-hide: all; background-color: #0092FF; border-color: #0092FF; border-radius: 4px; border-width: 0px; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; height: 36px; padding-bottom: 12px; padding-left: 15px; padding-right: 15px; padding-top: 12px; width: 150px;'> <p style='margin: 0;font-weight: bold;'> CONVERSAR COM REPRESENTANTE </p> </a> <!--<![endif]--> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> </tr> </tbody></table> </th> </tr> </tbody></table> </td> </tr> </tbody></table> </td> </tr> <tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r9-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr class='nl2go-responsive-hide'> <td height='20' style='font-size: 20px; line-height: 20px; background-color: #ffffff;'> &shy;</td> </tr> <tr> <td class='r16-i' style='background-color: #ffffff;'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <th width='100%' valign='top' class='r6-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> <td valign='top' class='r7-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r13-c' align='left'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r14-o' style='table-layout: fixed; width: 100%;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> <tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> </tr> </tbody></table> </th> </tr> </tbody></table> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='20' style='font-size: 20px; line-height: 20px; background-color: #ffffff;'> &shy;</td> </tr> </tbody></table> </td> </tr> <tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r9-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr class='nl2go-responsive-hide'> </tr> <tr> <td class='r16-i' style='background-color: #ffffff;'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <th width='50%' valign='top' class='r6-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> <td valign='top' class='r7-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r11-c' align='center'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='214' class='r17-o' style='table-layout: fixed; width: 214px;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> <tr> <td class='r18-i' style='font-size: 0px; line-height: 0px;'> <img src='https://cadastroindustrialbrasil.com.br/wp-content/uploads/2022/05/profile.png' width='214' border='0' class='' style='display: block; width: 100%;'> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> </tr> </tbody></table> </th> <th width='50%' valign='top' class='r6-c'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r1-o' style='table-layout: fixed; width: 100%;'> <!-- --> <tbody><tr> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> <td valign='top' class='r7-i'> <table width='100%' cellspacing='0' cellpadding='0' border='0' role='presentation'> <tbody><tr> <td class='r13-c' align='left'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r14-o' style='table-layout: fixed; width: 100%;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> <tr> <td align='left' valign='top' class='r25-i nl2go-default-textstyle' style='color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;'> <div> <p style='margin: 0; font-size: 22px;'> Alexia Perez </p> <p style='margin: 0; font-size: 22px;'> <span style='font-size: 15px;'><strong>CADASTRO INDUSTRIAL BRASIL</strong></span> </p> </div> </td> </tr> </tbody></table> </td> </tr> <tr> <td class='r13-c' align='left'> <table cellspacing='0' cellpadding='0' border='0' role='presentation' width='100%' class='r14-o' style='table-layout: fixed; width: 100%;'> <tbody><tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> <tr> <td align='left' valign='top' class='r26-i nl2go-default-textstyle' style='color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;'> <div> <p style='margin: 0;'> Contato: (51) 9 8420-6179 </p> <p style='margin: 0;'> Um produto desenvolvido por Editora Euro</p> <p style='margin: 0;'> CNPJ 27.993.205/0001-71 </p> </div> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='15' style='font-size: 15px; line-height: 15px;'> &shy;</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> <td class='nl2go-responsive-hide' width='15' style='font-size: 0px; line-height: 1px;'>&shy; </td> </tr> </tbody></table> </th> </tr> </tbody></table> </td> </tr> <tr class='nl2go-responsive-hide'> <td height='20' style='font-size: 20px; line-height: 20px; background-color: #ffffff;'> &shy;</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> </tr> </tbody></table> </body></html>",
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

       await sequelize.query("UPDATE facebook SET atualizado=5 WHERE id=" + getEmail[x].id + "")
       await sequelize.query("UPDATE facebook SET  data='"+ date +"' WHERE id=" + getEmail[x].id + "")     
          await delay(7000)

        }
      } catch (error) {
        console.log(error);
        process.exit(1);
  }
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


