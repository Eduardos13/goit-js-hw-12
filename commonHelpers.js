import{i,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(t){const s="https://pixabay.com",o="/api/",n=new URLSearchParams({key:"44024733-f77ed4f0ed7e81c67856c8782",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${o}?${n}`;return fetch(e).then(r=>r.json()).catch(r=>{throw new Error(`HTTP error! status: ${response.status}`)})}function d(t){return`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-item-image">
                <div class="info">
                    <p class="info-title">Likes:<span class="info-value">${t.likes}</span></p>
                    <p class="info-title">Views:<span class="info-value">${t.views}</span></p>
                    <p class="info-title">Comments:<span class="info-value">${t.comments}</span></p>
                    <p class="info-title">Downloads:<span class="info-value">${t.downloads}</span></p>
                </div>
            </a>
        </li>
    `}function p(t){return t.map(d).join("")}const h=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");u();function g(t){t.preventDefault();const s=t.target.elements.searchQuery.value.trim();if(!s){i.info({title:"No data",message:"Please enter a search query"});return}l.innerHTML="",y(),m(s).then(o=>{const n=p(o.hits);if(!o.hits.length){i.error({title:"No result",message:"Sorry, there are no images matching your search query. Please try again!"});return}l.insertAdjacentHTML("beforeend",n),new f(".gallery a").refresh()}).catch(o=>{i.warning({title:"Error",message:`Something went wrong. ${o.message}`})}).finally(()=>{t.target.reset(),u()})}h.addEventListener("submit",g);function y(){c.style.display="block"}function u(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
