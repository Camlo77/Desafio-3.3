let variableColor = "";
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    variableColor = "pink";
  } else if (event.key === "s" || event.key === "S") {
    variableColor = "orange";
  } else if (event.key === "d" || event.key === "D") {
    variableColor = "lightskyblue";
  }
  key.style.backgroundColor = variableColor;
});

let variableColor2 = "";
document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    variableColor2 = "purple";
    nuevoDiv(variableColor2);
  } else if (event.key === "w" || event.key === "W") {
    variableColor2 = "gray";
    nuevoDiv(variableColor2);
  } else if (event.key === "e" || event.key === "E") {
    variableColor2 = "brown";
    nuevoDiv(variableColor2);
  }
});

function nuevoDiv(bgColor) {
  let contenedor = document.querySelector("body");
  let nuevoElemento = document.createElement("div");
  contenedor.appendChild(nuevoElemento);
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.border = "2px solid black";
  nuevoElemento.style.backgroundColor = bgColor;
}
