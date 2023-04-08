// Отримати дані з API і вивести їх на сторінку
  // https://randomuser.me/

//   $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

fetch(`https://randomuser.me/api/`).then(response => response.json()).then(data => renderUser(data.results[0]))

const user = document.querySelector('.user')

function renderUser(data) {
    console.log(data);
    const { email, name: { first, last, title}, picture: { medium } } = data;
    
    user.innerHTML =`<h2>${title} ${first} ${last}</h2>
<img src="${medium}" alt="${first}">
<p>${email}</p>` 

}
console.log('');
