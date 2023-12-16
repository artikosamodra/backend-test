//'require' is one of the method, get library NPM or get import your file. (can also @import)
const http = require("http");
const rupiah = require("rupiah-format");
const fs = require("fs");
const port = 5501;
const host = "127.0.0.1"; //can localhost

// create server callback - function req & res
const server = http.createServer(function (request, response) {
  //this area >> command req(GET, POST, PUT, DELETE) & res.

  const name = "Artiko";
  let wallet = 1000000;
  let payment = 46200;
  let preWallet = wallet;

  let balance = wallet - payment;
  wallet = balance;

  //convert to Rupiah
  walletRp = rupiah.convert(wallet);
  paymentRp = rupiah.convert(payment);
  preWalletRp = rupiah.convert(preWallet);
  balanceRp = rupiah.convert(balance);

  //kirim data ke mutasi.txt
  fs.appendFile("mutasi.txt", paymentRp + `\t` + balanceRp + `\n`, () => {
    console.log("Pembayaran berhasil = " + paymentRp);
    console.log("Saldo tersisa = " + balanceRp);
    console.log("Data transaksi anda tersimpan");
  });

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
                <td style="padding: 0 1rem; font-weight: bold;">: ${preWalletRp}</td>
            </tr>
            <tr>
                <td style="padding: 0 1rem;">Purchase Costs</td>
                <td style="padding: 0 1rem; font-weight: bold;">: ${paymentRp}</td>
            </tr>
            <tr>
                <td style="padding: 0 1rem;">After Payment</td>
                <td style="padding: 0 1rem; font-weight: bold;">: ${balanceRp}</td>
            </tr>
            <tr>
                <td style="padding: 0 1rem;">Remaining Balance</td>
                <td style="padding: 0 1rem; font-weight: bold;">: ${walletRp}</td>
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
