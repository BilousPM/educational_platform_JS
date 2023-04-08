!function(){fetch("https://randomuser.me/api/").then((e=>e.json())).then((n=>function(n){console.log(n);const{email:t,name:{first:o,last:s,title:c},picture:{medium:i}}=n;e.innerHTML=`<h2>${c} ${o} ${s}</h2>\n<img src="${i}" alt="${o}">\n<p>${t}</p>`}(n.results[0])));const e=document.querySelector(".user");console.log("")}();
//# sourceMappingURL=test.c6de678e.js.map
