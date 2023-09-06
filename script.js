document.getElementById('getCharactersButton').addEventListener('click', getCharacterList);

async function getCharacterList() {
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const characterList = data.results;
    const characterListElement = document.getElementById('characterList');
    characterListElement.innerHTML = '';

    characterList.forEach((character) => {
      const caja = document.createElement('div');
      caja.className = 'caja';

      const image = document.createElement('img');
      image.src = character.image;
      image.alt = character.name;

      const name = document.createElement('span');
      name.textContent = character.name;

      caja.appendChild(image);
      caja.appendChild(name);

      characterListElement.appendChild(caja);
    });
  } catch (error) {
    console.error('Error al obtener la lista de personajes:', error);
  }
}
