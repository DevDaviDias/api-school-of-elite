async function fetchPersonagens() {
  try {
    const res = await fetch('https://api-school-of-elite.onrender.com/personagem');
    const data = await res.json();
    const container = document.getElementById('cards-container');

    container.innerHTML = '';

    for (const mbti in data) {
      data[mbti].forEach(personagem => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${personagem.imagem}" alt="${personagem.name}">
          <h2>${personagem.name}</h2>
          <div class="mbti">${personagem.mbti}</div>
          <p>${personagem.descricao}</p>
        `;
        container.appendChild(card);
      });
    }

  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
  }
}

fetchPersonagens();

document.getElementById('copyButton').addEventListener('click', () => {
  const input = document.getElementById('apiLink');
  const message = document.getElementById('copyMessage');
  const button = document.getElementById('copyButton');

  navigator.clipboard.writeText(input.value)
    .then(() => {
      message.style.display = 'none';
      button.textContent = 'Copiado!';
      button.style.backgroundColor = '#28a745';

      setTimeout(() => {
        message.style.display = 'none';
        button.textContent = 'Copiar';
        button.style.backgroundColor = '#007bff';
      }, 2000);
    })
    .catch(err => console.error('Erro ao copiar: ', err));
});