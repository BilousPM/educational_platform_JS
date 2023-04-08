fetch("https://randomuser.me/api/").then((e=>e.json())).then((t=>function(t){console.log(t);const{email:n,name:{first:o,last:s,title:c},picture:{medium:l}}=t;e.innerHTML=`<h2>${c} ${o} ${s}</h2>\n<img src="${l}" alt="${o}">\n<p>${n}</p>`}(t.results[0])));const e=document.querySelector(".user");console.log("");
//# sourceMappingURL=test.25e89f86.js.map
