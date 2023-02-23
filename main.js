const toggleThemeBtn = document.querySelector('#toggleTheme');
const searchBtn = document.querySelector('#search');

if (!document.documentElement.classList.contains('dark')) {
  toggleThemeBtn.innerHTML += `DARK <i class="text-lg fa-solid fa-moon"></i>`;
}

toggleThemeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

  if (document.documentElement.classList.contains('dark')) {
    toggleThemeBtn.innerHTML = `LIGHT <i class="text-lg fa-solid fa-sun"></i>`;
  } else {
    toggleThemeBtn.innerHTML = `DARK <i class="text-lg fa-solid fa-moon"></i>`;
  }
});

window.onload = () => {
  fetchUserData('octocat');
};

searchBtn.addEventListener('click', e => {
  e.preventDefault();

  let username = document.querySelector('input').value;
  fetchUserData(username);
  document.querySelector('input').value = '';
});

async function fetchUserData(user) {
  try {
    const res = await fetch(`https://api.github.com/users/${user}`);
    if (res.ok) {
      document.querySelector('#error').classList.add('hidden');
      const data = await res.json();
      displayUserInfo(data);
    } else {
      document.querySelector('#error').classList.remove('hidden');
    }
  } catch (err) {
    console.error(err);
  }
}

function displayUserInfo(data) {
  document.getElementById('info').innerHTML = `
    <div class="flex items-center gap-5 mb-8">
      <img src=${
        data.avatar_url
      } class="w-avatar h-avatar rounded-full sm:w-tabletAvatar sm:h-tabletAvatar" />

      <div class="flex flex-col gap-1.5 md:w-full md:flex-row xl:pb-10">
        <div class="mr-auto">
          <h2 class="text-gray dark:text-white font-bold sm:text-2xl">${
            data.name === null ? data.login.slice(1) : data.name
          }</h2>
          <span class="text-blue font-sm">@${data.login}</span>
        </div>
        <p class="text-body dark:text-white font-sm">Joined ${new Date(
          data.created_at
        ).toDateString()}</p>
      </div>
    </div>

      <div class="xl:ml-36 xl:-mt-12">
        <p class="${
          data.bio === null ? 'text-idle' : 'text-blueGray'
        } dark:text-white mb-6">
          ${data.bio === null ? 'This profile has no bio' : data.bio}
        </p>

        <div class="bg-lightBg dark:bg-darkBg flex justify-evenly rounded-xl p-4 mb-6 sm:justify-start sm:gap-14 sm:pl-8">
          <div class="flex flex-col items-center gap-2 sm:items-start">
            <span class="text-blueGray dark:text-white text-sm">Repos</span>
            <span class="text-gray dark:text-white text-lg font-bold">${
              data.public_repos
            }</span>
          </div>

          <div class="flex flex-col items-center gap-2 sm:items-start">
            <span class="text-blueGray dark:text-white text-sm">Followers</span>
            <span class="text-gray dark:text-white text-lg font-bold">${
              data.followers
            }</span>
          </div>

          <div class="flex flex-col items-center gap-2 sm:items-start">
            <span class="text-blueGray dark:text-white text-sm">Following</span>
            <span class="text-gray dark:text-white text-lg font-bold">${
              data.following
            }</span>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class=${
            data.location === null ? 'text-idle' : 'text-blueGray'
          } flex items-center gap-5">
            <i class="dark:text-white text-lg fa-solid fa-location-dot"></i>
            <span class="dark:text-white text-sm">${
              data.location === null ? 'Not Available' : data.location
            }</span>
          </div>

          <div class="${
            data.blog === null ? 'text-idle' : 'text-blueGray'
          } flex items-center gap-3 sm:gap-2">
            <i class="dark:text-white text-lg fa-solid fa-link"></i>
            <a href=${
              data.blog === null ? '#' : `https://${data.blog}`
            } class="dark:text-white text-sm hover:underline">${
    data.blog === null ? 'Not Available' : data.blog
  }</a>
          </div>

          <div class="${
            data.twitter_username === null ? 'text-idle' : 'text-blueGray'
          } flex items-center gap-4 sm:gap-2">
            <i class="dark:text-white text-lg fa-brands fa-twitter"></i>
            <a href=${
              data.twitter_username === null
                ? '#'
                : `https://twitter.com/${data.twitter_username}`
            } class="dark:text-white text-sm">${
    data.twitter_username === null ? 'Not Available' : data.twitter_username
  }</a>
          </div>

          <div class="${
            data.company === null ? 'text-idle' : 'text-blueGray'
          } flex items-center gap-5 sm:gap-4">
            <i class="dark:text-white text-lg fa-solid fa-building"></i>
            <a href=${
              data.company === null
                ? '#'
                : data.company.includes('@')
                ? `https:/github.com/${data.company.slice(1)}`
                : `https:/github.com/${data.company}`
            }
            class="dark:text-white text-sm">${
              data.company === null ? 'Not Available' : data.company
            }</a>
          </div>
        </div>
      </div>
    </div>`;
}
