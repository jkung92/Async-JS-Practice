// function getNumberFact() {
//   $.getJSON('http://numbersapi.com/8?json', function(resp) {
//     console.log(resp.text);
//   });
// }

function getNumberFact2() {
  $.getJSON('http://numbersapi.com/8?json')
    .then(resp => console.log(resp.text))
    .catch(err => console.log(err, 'Number fact not found'));
}

// function getMultipleNumFacts() {
//   $.getJSON('http://numbersapi.com/1,5,10?json', resp => {
//     for (let r in resp) {
//       console.log(resp[r].text);
//       $('.content').append(`<li>${resp[r].text}</li>`);
//     }
//   });
// }

function getMultipleNumFacts2() {
  $.getJSON('http://numbersapi.com/1,5,10?json').then(resp => {
    for (let r in resp) {
      $('.content').append(`<li>${resp[r].text}</li>`);
    }
  });
}

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

function getMoreFavNumFacts2() {
  factsArr = [];
  axios
    .get('http://numbersapi.com/8?json')
    .then(resp => {
      console.log(resp);
      factsArr.push(resp.data.text);
      return axios.get('http://numbersapi.com/8?json');
    })
    .then(resp => {
      factsArr.push(resp.data.text);
      return axios.get('http://numbersapi.com/8?json');
    })
    .then(resp => {
      factsArr.push(resp.data.text);
      return axios.get('http://numbersapi.com/8?json');
    })
    .then(resp => {
      factsArr.push(resp.data.text);
      for (let i in factsArr) {
        $('.content2').append(`<li> ${factsArr[i]} </li>`);
      }
    })
    .catch(err => console.log(err));
}

getNumberFact2();
getMultipleNumFacts2();
getMoreFavNumFacts2();
