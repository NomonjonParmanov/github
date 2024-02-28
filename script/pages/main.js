let url = "https://api.github.com/users/kamronbek015";
let input = document.querySelector(".input");
let form = document.querySelector(".input-form");
let repos = document.querySelector(".repos");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    form.addEventListener("keyup", () => {
      let inputValue = input.value.toLowerCase();
      fetch(data.repos_url)
        .then((res) => res.json())
        .then((reposData) => {
          let filteredRepos = reposData.filter((repo) =>
            repo.name.toLowerCase().includes(inputValue)
          );
          displayRepos(filteredRepos);
        });
    });
    displayUser(data);
  });

function displayUser(data) {
  repos.innerHTML = `
                <img class="ava" src="${data.avatar_url}" alt="">
                <p>${data.login}</p>
            `;
}

function displayRepos(filteredRepos) {
  repos.innerHTML = filteredRepos
    .map(
      (repo) => `
                <div class="repo">
                    <p>${repo.name}</p>
            `
    )
    .join("");
}
