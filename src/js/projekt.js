import { arrayFunds } from "./project-array";

const fundsContainer = document.querySelector('.support_list');
const listMuarkup = createCardMarcup(arrayFunds)

fundsContainer.insertAdjacentHTML("afterend", listMuarkup)

// const fund = arrayFunds.map((item, index)=> 
// {
//    console.log(item);
//    fundsContainer.innerHTML = listMuarkup
//    console.log(listMuarkup);
//    console.log(item);
// }
// )

function createCardMarcup(array) {
   return array.map(({title, url, img}, index) => {
       return`<li class="support_items">
       <p>${index  + 1}</p>
    <a class="support_link" href="${url}" target="_blank">
       <img
         class="gallery__image"
         src="${img}"
         alt="${title}"
       />
    </a>
    </li>`;
   })
       .join("")
};