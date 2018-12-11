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

// Draw random card
// $.getJSON('https://deckofcardsapi.com/api/deck/new/draw/?count=1', resp => {
//   console.log(resp, resp.cards[0].suit, resp.cards[0].value);
// });

// Draw two cards from the same deck
// $.getJSON('https://deckofcardsapi.com/api/deck/new/draw/?count=1', resp1 => {
//   const deck = resp1.deck_id;
//   $.getJSON(
//     `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`,
//     resp2 => {
//       console.log(resp1, resp1.cards[0].suit, resp1.cards[0].value);
//       console.log(resp2, resp2.cards[0].suit, resp2.cards[0].value);
//     }
//   );
// });

// let deck;
// let cardStackOrder = 1;

// // JSON to get a deck of cards
// const getDeck = () => {
//   // get deck of cards from API
//   $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(resp => (deck = resp))
//     .catch(err => console.log(err));
// };

// // Draw a card
// const drawCard = () => {
//   $.getJSON(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
//     .then(resp => {
//       console.log(resp);
//       $('.card-deck').append(
//         `<img src="${
//           resp.cards[0].image
//         }" alt="" style="position:absolute; z-index:${cardStackOrder}">`
//       );
//       cardStackOrder += 1;
//     })
//     .catch(err => console.log(err));
// };

// // init deck of cards
// getDeck();

// // add event listener for button
// $('button').on('click', drawCard);

// ####### Part 3 : Gotta Catch 'Em All! #########

let url = 'https://pokeapi.co/api/v2';
console.log('hello');

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

const getRandomPoke2 = () => {
  let poke = [];
  for (let i = 1; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * 949);
    $.getJSON(`${url}/pokemon/${randomIndex}/`, resp => {
      let pokeName = resp.name;
      $.getJSON(`${url}/pokemon-species/${randomIndex}/`, resp => {
        let pokeSpecies = resp.flavor_text_entries[1].flavor_text;
        poke.push({ name: pokeName, species: pokeSpecies });
      });
    });
  }
  console.log(poke);
};

getPokeList();
