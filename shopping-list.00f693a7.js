var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var a=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,a.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){o[e]=n},e.parcelRequired7c6=a);var r=a("2dy3d");const t=document.querySelector(".shopingList"),l=JSON.stringify(["643282b1e85766588626a080","643282b1e85766588626a0ba","643282b1e85766588626a0ba","643282b1e85766588626a0dc","643282b2e85766588626a0fc","643282b2e85766588626a118"]);localStorage.setItem("id",l);const s=localStorage.getItem("id");parseLokalstorage=JSON.parse(s),parseLokalstorage.map((e=>{new(0,r.getBookData)(e=`${e}`).getPromId().then((({list_name:e,author:n,title:o,book_image:a,description:r,buy_links:t})=>{function l(e){const n=t;for(let o=0;o<n.length;o+=1){if(n[o].name===`${e}`)return n[o].url;n[o].name}}return`<li class="card-item"> \n          <div class="img-containerandAuthor"> \n            <img class="book-photo" src="${a}" alt="#"> \n            <p class="author">${n}</p> \n          </div> \n          <div class="books-title"> \n            <p class="booktitle">${o}</p> \n            <p class="bookCategory">${e}</p> \n            <ul class="links">  \n              <li><a href="${l("Amazon")}" target="_blank" rel="noopener noreferrer" class="amazon">  \n                \n                </a></li>  \n              <li>  \n<a href="${l("Apple Books")}" rel="noopener noreferrer" class="amazon">  \n  \n   </a>  \n              </li>  \n              <li>  \n<a href="${l("Bookshop")}" rel="noopener noreferrer" class="amazon">  \n    \n   </a>  \n              </li>  \n            </ul>  \n          <div class="remove"> \n             <img src="./images/dump.svg" alt="">\n          </div> \n        </div> \n        <div class="description-text" \n        <p class="description">${r}</p> \n        </div> \n      </li> \n   `})).then((e=>{t.insertAdjacentHTML("beforeend",e)}))}));
//# sourceMappingURL=shopping-list.00f693a7.js.map