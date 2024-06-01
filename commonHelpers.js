import{a as h,i,S as u}from"./assets/vendor-f144e563.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const p="https://pixabay.com",y="/api/",L="44024733-f77ed4f0ed7e81c67856c8782";async function f(e,s=1,a=15){const n=new URLSearchParams({key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:a}),t=`${p}${y}?${n}`;try{return(await h(t)).data}catch(r){i.error({title:"Error",message:`Something went wrong. ${r.message}`})}}function w(e){return`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-item-image">
                <div class="info">
                    <p class="info-title">Likes:<span class="info-value">${e.likes}</span></p>
                    <p class="info-title">Views:<span class="info-value">${e.views}</span></p>
                    <p class="info-title">Comments:<span class="info-value">${e.comments}</span></p>
                    <p class="info-title">Downloads:<span class="info-value">${e.downloads}</span></p>
                </div>
            </a>
        </li>
    `}function g(e){return e.map(w).join("")}const o={form:document.querySelector(".search-form"),postsGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")};o.loader.classList.add("hidden");o.loadMoreBtn.classList.add("hidden");let c=1,l=0,d="";async function b(e){if(e.preventDefault(),d=e.target.elements.searchQuery.value.trim(),!d){i.info({title:"No data",message:"Please enter a search query"});return}o.postsGallery.innerHTML="",o.loader.classList.remove("hidden");try{const s=await f(d,c);l=s.totalHits,l===0&&i.warning({title:"No result",message:"Sorry, there are no images matching your search query. Please try again!"});const a=g(s.hits);o.postsGallery.insertAdjacentHTML("beforeend",a),new u(".gallery a").refresh(),l>s.hits.length&&o.loadMoreBtn.classList.remove("hidden")}catch(s){i.error({title:"Error",message:`Something went wrong. ${s.message}`})}finally{o.loader.classList.add("hidden"),e.target.reset()}}o.form.addEventListener("submit",b);async function v(){c+=1,o.loader.classList.remove("hidden");try{const e=await f(d,c),s=g(e.hits);o.postsGallery.insertAdjacentHTML("beforeend",s),new u(".gallery a").refresh();const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"}),l=e.totalHits,l<=c*15&&(o.loadMoreBtn.classList.add("hidden"),i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}))}catch(e){i.error({title:"Error",message:`Something went wrong. ${e.message}`})}finally{o.loader.classList.add("hidden")}}o.loadMoreBtn.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
