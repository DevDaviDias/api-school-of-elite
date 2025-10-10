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