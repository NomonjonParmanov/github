let repos = [
  {
    id: 1,
    name: "NomonjonParmanov / team - project_n46_uzum",
    image: "../assets/images/home/logo.png",
  },
  {
    id: 2,
    name: "NomonjonParmanov/github",
    image: "../assets/images/home/logo.png",
  },
  {
    id: 3,
    name: "vohobjonoff/lochinlar",
    image: "../assets/images/home/logo1.jpg",
  },
];

let form = document.querySelector(".input-form");
let input = document.querySelector(".input");
let reposs = document.querySelector(".repos");

function displayRepos(repos) {
  reposs.innerHTML = "";
  for (let i = 0; i < repos.length; i++) {
    let repo = repos[i];
    let repoElement = document.createElement("div");
    repoElement.classList.add("repo");
    let imageElement = document.createElement("img");
    imageElement.classList.add("ava");
    imageElement.src = repo.image;
    imageElement.alt = "";
    let nameElement = document.createElement("p");
    nameElement.textContent = repo.name;
    repoElement.appendChild(imageElement);
    repoElement.appendChild(nameElement);
    reposs.appendChild(repoElement);
  }
}
form.addEventListener("keyup", () => {
  let inputValue = input.value.toLowerCase();
  let filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(inputValue)
  );
  displayRepos(filteredRepos);
});

displayRepos(repos);
