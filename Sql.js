const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Kant1010',
  database: 'icecreamhm'
});

const app = express();

// Criando uma rota GET que retorna os dados da tabela usuários.
export default function GetData() {

  connection.query(" SELECT * FROM clientes ", function (error, results, fields) {
    if (error) {
      return 'msg: Erro ao gravar!' + error;
    } else {
      return results;
    }
  });
}


// Iniciando o servidor.
app.listen(3000, () => {
  console.log('Vai no navegador e entra em http://localhost:3000/users pra ver os usuários cadastrados.');
});

