(()=>{var e={359:e=>{const t=function(e,t,n){return!(!e||t&&0===e.toString().trim().length||n&&isNaN(+e))},n=function(e,t){return`User ID: ${e} created an article titled ${t}`};e.exports={getUserInputs:function(){return{useridInput:document.querySelector("input#userid"),titleInput:document.querySelector("input#title"),articleInput:document.querySelector("textarea#article")}},validateInput:t,generateResult:n,createElement:function(e,t,n=null){const r=document.createElement(e);return n&&r.classList.add(n),r.textContent=t,r},checkAndGenerate:async function(e,r,u){if(!t(e,!0,!0)||!t(r,!0,!1)||!t(u,!0,!1))return!1;const c=n(e,r);return console.log(c),c}}}},t={};function n(r){var u=t[r];if(void 0!==u)return u.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}(()=>{const{createElement:e,getUserInputs:t,checkAndGenerate:r}=n(359);document.querySelector("#addNewPostBtn").addEventListener("click",(async()=>{const{useridInput:n,titleInput:u,articleInput:c}=t(),o=await r(n.value,u.value,c.value),a=e("p",o);document.querySelector(".article-list").appendChild(a)}))})()})();