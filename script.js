var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});

document.querySelector("#add2").addEventListener("click", () => {
  changeCount(2);
});

document.querySelector("#add3").addEventListener("click", () => {
  changeCount(3);
});

document.querySelector("#add4").addEventListener("click", () => {
  changeCount(4);
});

document.querySelector("#add5").addEventListener("click", () => {
  changeCount(5);
});

document.querySelector("#add6").addEventListener("click", () => {
  changeCount(6);
});

document.querySelector("#add7").addEventListener("click", () => {
  changeCount(7);
});

document.querySelector("#add8").addEventListener("click", () => {
  changeCount(8);
});

document.querySelector("#add9").addEventListener("click", () => {
  changeCount(9);
});

changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
}
