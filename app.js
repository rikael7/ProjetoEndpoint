const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // importar o pacote
const fs = require('fs');

const app = express();
const PORT = 3000;

// Configurar CORS
app.use(cors()); // libera qualquer site para acessar seu backend

// Configurar body-parser para ler dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota POST para receber dados
//app.post('/enviar', (req, res) => {
    //const { nome, email } = req.body;

    // Salvar em arquivo
    //const dados = `Nome: ${nome}, Email: ${email}\n`;
    //fs.appendFileSync('dados.txt', dados);

    //res.send({ message: 'Dados recebidos com sucesso!', nome, email });
//});
app.post('/enviar', (req, res) => {
  const { nome, email } = req.body;

  // Isso aparece no dashboard → Logs
  console.log('Novo POST recebido:', { nome, email });

  //res.json({
    //message: 'Dados recebidos com sucesso!',
    //nome,
    //email
  //});
     res.send(`
    <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .loader {
      width: 60px;
      height: 60px;
      border: 6px solid #f3f3f3;
      border-top: 6px solid #1a73e8;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="loader"></div>
</body>
  `);

});



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
