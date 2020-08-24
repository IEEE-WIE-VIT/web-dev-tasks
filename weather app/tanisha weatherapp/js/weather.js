var button = document.querySelector(".btn btn-secondary");
var inputValue = document.querySelector(".form-control");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function () {
  fetch(
    "https://samples.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      "&appid=dd415b6c44fd0b284c0b1dd7b059721c"
  )
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
    })

    .catch((err) => alert("Wrong city name!"));
});
