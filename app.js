const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  //get random number between 0 - 3 colors
  let random__number = randomNumber();
  console.log(random__number);
  document.body.style.backgroundColor = colors[random__number];
  color.textContent = colors[random__number];
});

const randomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
