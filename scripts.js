// function getNumberFact() {
//   $.getJSON('http://numbersapi.com/8?json', function(resp) {
//     console.log(resp.text);
//   });
// }

const getRandomNumberFact = async () => {
  const fact = await $.getJSON('http://numbersapi.com/8?json');
  console.log(fact.text);
};

// function getNumberFact2() {
//   $.getJSON('http://numbersapi.com/8?json')
//     .then(resp => console.log(resp.text))
//     .catch(err => console.log(err, 'Number fact not found'));
// }

// function getMultipleNumFacts() {
//   $.getJSON('http://numbersapi.com/1,5,10?json', resp => {
//     for (let r in resp) {
//       console.log(resp[r].text);
//       $('.content').append(`<li>${resp[r].text}</li>`);
//     }
//   });
// }

const getMultipleNumberFacts = async () => {
  const facts = await $.getJSON('http://numbersapi.com/1,5,10?json');
  for (let fact in facts) {
    $('.content').append(`<li>${facts[fact].text}</li>`);
  }
};

// function getMultipleNumFacts2() {
//   $.getJSON('http://numbersapi.com/1,5,10?json').then(resp => {
//     for (let r in resp) {
//       $('.content').append(`<li>${resp[r].text}</li>`);
//     }
//   });
// }

const getFourRandomFacts = async () => {
  const baseURL = 'http://numbersapi.com';
  const facts = await Promise.all([
    $.getJSON(`${baseURL}/${Math.floor(Math.random() * 100)}?json`),
    $.getJSON(`${baseURL}/${Math.floor(Math.random() * 100)}?json`),
    $.getJSON(`${baseURL}/${Math.floor(Math.random() * 100)}?json`),
    $.getJSON(`${baseURL}/${Math.floor(Math.random() * 100)}?json`)
  ]);

  console.log(facts);

  facts.forEach(fact => $('.content2').append(`<li>${fact.text}</li>`));
};

// function getMoreFavNumFacts() {
//   factsArr = [];
//   $.getJSON('http://numbersapi.com/8?json', resp => {
//     factsArr.push(resp.text);
//     $.getJSON('http://numbersapi.com/8?json', resp => {
//       factsArr.push(resp.text);
//       $.getJSON('http://numbersapi.com/8?json', resp => {
//         factsArr.push(resp.text);
//         $.getJSON('http://numbersapi.com/8?json', resp => {
//           factsArr.push(resp.text);
//           console.log(factsArr);
//           for (let i in factsArr) {
//             $('.content2').append(`<li> ${factsArr[i]} </li>`);
//           }
//         });
//       });
//     });
//   });
// }

// function getMoreFavNumFacts2() {
//   factsArr = [];
//   axios
//     .get('http://numbersapi.com/8?json')
//     .then(resp => {
//       console.log(resp);
//       factsArr.push(resp.data.text);
//       return axios.get('http://numbersapi.com/8?json');
//     })
//     .then(resp => {
//       factsArr.push(resp.data.text);
//       return axios.get('http://numbersapi.com/8?json');
//     })
//     .then(resp => {
//       factsArr.push(resp.data.text);
//       return axios.get('http://numbersapi.com/8?json');
//     })
//     .then(resp => {
//       factsArr.push(resp.data.text);
//       for (let i in factsArr) {
//         $('.content2').append(`<li> ${factsArr[i]} </li>`);
//       }
//     })
//     .catch(err => console.log(err));
// }

// getNumberFact2();
// getMultipleNumFacts2();
// getMoreFavNumFacts2();

// Deck of Cards

// Draw a Random Card
// const getCard = async () => {
//   const deck = await $.getJSON(
//     'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
//   );
//   console.log(deck.cards[0].suit, deck.cards[0].value);
// };

// const getTwoCards = async () => {
//   const card = await $.getJSON(
//     'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
//   );
//   const deck = card.deck_id;
//   const card2 = await $.getJSON(
//     `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
//   );
//   console.log(
//     card.cards[0].suit,
//     card.cards[0].value,
//     card2.cards[0].suit,
//     card2.cards[0].value
//   );
// };

// let deck;
// let cardStackOrder = 1;

// const getDeck = async () => {
//   deck = await $.getJSON(
//     'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
//   );
// };

// const drawCard = async () => {
//   const card = await $.getJSON(
//     `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
//   );
//   $('.card-deck').append(
//     `<img src="${
//       card.cards[0].image
//     }" alt="" style="position:absolute; z-index:${cardStackOrder}">`
//   );
//   cardStackOrder += 1;
// };

// getDeck();
// $('button').on('click', drawCard);

// ####### Part 3 : Gotta Catch 'Em All! #########

let url = 'https://pokeapi.co/api/v2';

const getPokeList = () => {
  $.getJSON(`${url}/pokemon/`)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};

const getRandomPoke = () => {
  let pokeList = [];
  let pokeSpecies = [];
  axios
    .get(`${url}/pokemon/6/`)
    .then(resp => {
      console.log(resp.data);
      pokeList.push(resp.data.name);
      return axios.get(`${url}/pokemon/8/`);
    })
    .then(resp => {
      pokeList.push(resp.data.name);
      return axios.get(`${url}/pokemon/10/`);
    })
    .then(resp => {
      pokeList.push(resp.data.name);
      console.log(pokeList);
      return axios.get(`${url}/pokemon-species/6/`);
    })
    .catch(err => console.log(err));
};

const helper = async () => {
  let randomIndex = Math.floor(Math.random() * 100);
  let poke = await $.getJSON(`${url}/pokemon/${randomIndex}/`);
  let pokeInfo = await $.getJSON(`${url}/pokemon-species/${randomIndex}/`);

  const speciesEnglish = pokeInfo.flavor_text_entries.find(
    poke => poke.language.name === 'en'
  );
  const speciesText = speciesEnglish.flavor_text;

  console.log('Species:', pokeInfo);

  let card = {
    name: poke.name,
    img: poke.sprites.front_default,
    species: speciesText
  };
  return card;
};

const getRandomPoke3 = async () => {
  // let poke = await helper();
  let pokemons = await Promise.all([
    await helper(),
    await helper(),
    await helper()
  ]);

  for (let poke of pokemons) {
    const template = `
      <div class="p-4">
        <h2>${poke.name}</h2>
        <img src="${poke.img}" alt="">
        <p>${poke.species}</p>
      </div>
    `;
    $('.container').append(template);
  }
};

getPokeList();
$('button').on('click', getRandomPoke3);
