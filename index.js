//'require' is one of the method, get library NPM or get import your file. (can also @import)
const http = require("http");
const rupiah = require("rupiah-format");
const port = 5501;
const host = "127.0.0.1"; //can localhost

// create server callback - function req & res
const server = http.createServer(function (request, response) {
  //this area >> command req(GET, POST, PUT, DELETE) & res.

  const name = "Artiko";
  const wallet = 1000000;
  const payment = 46200;
  const balance = wallet - payment;

  //   wallet = rupiah.convert(wallet);
  //   payment = rupiah.convert(payment);
  //   balance = rupiah.convert(balance);

  //   //   Rupiah Format
  const walletRp = rupiah.convert(wallet);
  const paymentRp = rupiah.convert(payment);
  const invoiceRp = rupiah.convert(balance);
  console.log("All Balance", invoiceRp);

  const invoice = `
  <head>
    <title>Wallet</title>
</head>
<body style="background-color: pink; display: flex; flex-direction: column; align-items: center;">
    <div style="background-color: tomato; padding: 1rem; margin-top: 2rem;">
        <h1 style="text-align: center;"> Artiko's Wallet</h1>
        <table style="padding: 1rem; border: 1px dashed black;">
            <tr>
                <td style="padding: 0 1rem;">Wallet Owner</td>
                <td style="padding: 0 1rem; font-weight: bold;">: ${name}</td>
            </tr>
            <tr>
                <td style="padding: 0 1rem;">Previous Balance</td>
                <td style="padding: 0 1rem; font-weight: bold;">: ${walletRp}</td>
            </tr>
            <tr>
                <td style="padding: 0 1rem;">Purchase Costs</td>
                <td style="padding: 0 1rem; font-weight: bold;">: ${paymentRp}</td>
            </tr>
            <tr>
                <td style="padding: 0 1rem;">Remaining Balance</td>
                <td style="padding: 0 1rem; font-weight: bold;">: ${invoiceRp}</td>
            </tr>
        </table>
    </div>
</body>
  `;

  //response
  response.end(invoice); //statusOutput
});

//server var.
server.listen(
  port,
  host, //port & hostname
  function () {
    console.log(`server berjalan di ${host}:${port}`);
  }
);
