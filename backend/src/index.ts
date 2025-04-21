// Importando os módulos necessários
import express from 'express';        // Framework para criar o servidor web
import axios from 'axios';            // Biblioteca para fazer requisições HTTP
import { JSDOM } from 'jsdom';        // Permite manipular HTML no backend como se fosse no navegador

const app = express();                // Criando a aplicação Express
const PORT = 3000;                    // Definindo a porta do servidor

// Middleware para permitir requisições de outros domínios (CORS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  next();
});

// Rota de teste
app.get('/', (req, res) => {
    res.send('API rodando!');
});

// Rota principal de scraping
app.get('/api/scrape', async (req, res) => {
  try {
    // Obtendo a URL
    const keyword = req.query.keyword as string;

    // Verifica se a palavra-chave foi fornecida
    if (!keyword) {
      return res.status(400).send('Digite uma palavra-chave');
    }

    // Faz uma requisição
    const response = await axios.get(`https://www.amazon.com.br/s?k=${keyword}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0' // Simulação de um navegador e evitar bloqueios
      }
    });

    // Criando um DOM
    const dom = new JSDOM(response.data);

    // Seleciona os elementos da lista de produtos e extrai o título e preço
    const products = Array.from(dom.window.document.querySelectorAll('.s-result-item'))
      .map(item => ({
        title: item.querySelector('h2')?.textContent?.trim() || 'Sem título', // Busca o título do produto
        price: item.querySelector('.a-price span')?.textContent?.trim() || 'Sem preço' // Busca o preço
      }))
      .filter(p => p.title !== 'Sem título'); // Remove itens sem título

    // Retorna os produtos em formato JSON para o frontend
    res.json(products);

  } catch (error) {
    // Em caso de erro, mostra no console e retorna status 500
    console.error('Erro:', error);
    res.status(500).send('Erro ao buscar produtos');
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
