// Aguarda o carregamento completo do DOM antes de executar qualquer ação
document.addEventListener('DOMContentLoaded', () => {
  // Pegando os elementos HTML necessários
  const searchButton = document.getElementById('searchButton');     // Botão de busca
  const searchInput = document.getElementById('searchInput');       // Campo de texto onde o usuário digita a palavra-chave
  const resultsContainer = document.getElementById('results');      // Div onde os resultados serão exibidos

  // Quando o botão é clicado, executa a função de busca
  searchButton.addEventListener('click', searchProducts);

  // Também permite buscar pressionando Enter no campo de texto
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchProducts();
    }
  });

  // Função principal para buscar os produtos
  async function searchProducts() {
    const keyword = searchInput.value.trim(); // Remove espaços em branco antes/depois da palavra-chave

    // Validando o campo se estiver vazio, mostra alerta.
    if (!keyword) {
      alert('Por favor, digite uma palavra-chave');
      return;
    }

    try {
      // Mostra mensagem de carregamento enquanto faz a requisição
      resultsContainer.innerHTML = '<p>Carregando resultados...</p>';
      
      // Faz a requisição para o backend, passando a palavra-chave na URL
      const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
      
      // Verifica se a resposta foi enviada
      if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
      }

      // Converte a resposta em JSON
      const products = await response.json();

      // Exibe os produtos na tela
      displayResults(products);

    } catch (error) {
      // Caso ocorra erro, mostra mensagem na tela
      console.error('Erro:', error);
      resultsContainer.innerHTML = `<p class="error">Erro ao buscar produtos: ${error.message}</p>`;
    }
  }

  // Função para exibir os resultados na tela
  function displayResults(products) {
    // Se não houver produtos, mostra mensagem
    if (products.length === 0) {
      resultsContainer.innerHTML = '<p>Nenhum produto encontrado. Tente outra palavra-chave.</p>';
      return;
    }

    // Limpa os resultados anteriores
    resultsContainer.innerHTML = '';

    // Para cada produto retornado, cria um card com as informações
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card'; // Classe para estilização do card

      // Cria a estrutura HTML com as informações do produto
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <div>
            <span class="product-rating">${product.rating}</span>
            <span class="product-reviews"> (${product.reviews} avaliações)</span>
          </div>
          <div class="product-price">${product.price}</div>
        </div>
      `;

      // Adiciona o cartão ao container de resultados
      resultsContainer.appendChild(productCard);
    });
  }
});