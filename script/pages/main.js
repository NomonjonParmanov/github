let url = "https://api.github.com/users/NomonjonParmanov";
let img = document.getElementById("img_logo");
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
