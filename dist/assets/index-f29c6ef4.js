(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const i=document.querySelector("#toggleTheme"),c=document.querySelector("#search");document.documentElement.classList.contains("dark")||(i.innerHTML+='DARK <i class="text-lg fa-solid fa-moon"></i>');i.addEventListener("click",()=>{document.documentElement.classList.toggle("dark"),document.documentElement.classList.contains("dark")?i.innerHTML='LIGHT <i class="text-lg fa-solid fa-sun"></i>':i.innerHTML='DARK <i class="text-lg fa-solid fa-moon"></i>'});window.onload=()=>{a("octocat")};c.addEventListener("click",e=>{e.preventDefault();let l=document.querySelector("input").value;a(l),document.querySelector("input").value=""});async function a(e){try{const l=await fetch(`https://api.github.com/users/${e}`);if(l.ok){document.querySelector("#error").classList.add("hidden");const r=await l.json();d(r)}else document.querySelector("#error").classList.remove("hidden")}catch(l){console.error(l)}}function d(e){document.getElementById("info").innerHTML=`
    <div class="flex items-center gap-5 mb-8">
      <img src=${e.avatar_url} class="w-avatar h-avatar rounded-full sm:w-tabletAvatar sm:h-tabletAvatar" />

      <div class="flex flex-col gap-1.5 md:w-full md:flex-row xl:pb-10">
        <div class="mr-auto">
          <h2 class="text-gray dark:text-white font-bold sm:text-2xl">${e.name===null?e.login.slice(1):e.name}</h2>
          <span class="text-blue font-sm">@${e.login}</span>
        </div>
        <p class="text-body dark:text-white font-sm">Joined ${new Date(e.created_at).toDateString()}</p>
      </div>
    </div>

      <div class="xl:ml-36 xl:-mt-12">
        <p class="${e.bio===null?"text-idle":"text-blueGray"} dark:text-white mb-6">
          ${e.bio===null?"This profile has no bio":e.bio}
        </p>

        <div class="bg-lightBg dark:bg-darkBg flex justify-evenly rounded-xl p-4 mb-6 sm:justify-start sm:gap-14 sm:pl-8">
          <div class="flex flex-col items-center gap-2 sm:items-start">
            <span class="text-blueGray dark:text-white text-sm">Repos</span>
            <span class="text-gray dark:text-white text-lg font-bold">${e.public_repos}</span>
          </div>

          <div class="flex flex-col items-center gap-2 sm:items-start">
            <span class="text-blueGray dark:text-white text-sm">Followers</span>
            <span class="text-gray dark:text-white text-lg font-bold">${e.followers}</span>
          </div>

          <div class="flex flex-col items-center gap-2 sm:items-start">
            <span class="text-blueGray dark:text-white text-sm">Following</span>
            <span class="text-gray dark:text-white text-lg font-bold">${e.following}</span>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class=${e.location===null?"text-idle":"text-blueGray"} flex items-center gap-5">
            <i class="dark:text-white text-lg fa-solid fa-location-dot"></i>
            <span class="dark:text-white text-sm">${e.location===null?"Not Available":e.location}</span>
          </div>

          <div class="${e.blog===null?"text-idle":"text-blueGray"} flex items-center gap-3 sm:gap-2">
            <i class="dark:text-white text-lg fa-solid fa-link"></i>
            <a href=${e.blog===null?"#":`https://${e.blog}`} class="dark:text-white text-sm hover:underline">${e.blog===null?"Not Available":e.blog}</a>
          </div>

          <div class="${e.twitter_username===null?"text-idle":"text-blueGray"} flex items-center gap-4 sm:gap-2">
            <i class="dark:text-white text-lg fa-brands fa-twitter"></i>
            <a href=${e.twitter_username===null?"#":`https://twitter.com/${e.twitter_username}`} class="dark:text-white text-sm">${e.twitter_username===null?"Not Available":e.twitter_username}</a>
          </div>

          <div class="${e.company===null?"text-idle":"text-blueGray"} flex items-center gap-5 sm:gap-4">
            <i class="dark:text-white text-lg fa-solid fa-building"></i>
            <a href=${e.company===null?"#":e.company.includes("@")?`https:/github.com/${e.company.slice(1)}`:`https:/github.com/${e.company}`}
            class="dark:text-white text-sm">${e.company===null?"Not Available":e.company}</a>
          </div>
        </div>
      </div>
    </div>`}
