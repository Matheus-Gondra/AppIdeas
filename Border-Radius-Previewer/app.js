const topLeft = document.querySelector("#topLeft");
const topRight = document.querySelector("#topRight");
const bottomLeft = document.querySelector("#bottomLeft");
const bottomRight = document.querySelector("#bottomRight");
const preview = document.querySelector("#preview");
const result = document.querySelector("#resul");

const values = [0, 0, 0, 0];

const changeRadius = (value, direction) => {
   switch (direction) {
      case "topLeft": 
         preview.style.borderTopLeftRadius = `${value}px`;
         break;
      case "topRight":
         preview.style.borderTopRightRadius = `${value}px`;
         break;
      case "bottomRight":
         preview.style.borderBottomRightRadius = `${value}px`;
         break;
      case "bottomLeft":
         preview.style.borderBottomLeftRadius = `${value}px`;
         break;
   }
}

topLeft.addEventListener("change", (e) => {
   const value = e.target.value;
   changeRadius(value, "topLeft");
   values[0] = value;
   result.value = `${values[0]}px  ${values[1]}px  ${values[2]}px  ${values[3]}px`;
});

topRight.addEventListener("change", (e) => {
   const value = e.target.value;
   changeRadius(value, "topRight");
   values[1] = value;
   result.value = `${values[0]}px  ${values[1]}px  ${values[2]}px  ${values[3]}px`;
});

bottomLeft.addEventListener("change", (e) => {
   const value = e.target.value;
   changeRadius(value, "bottomLeft");
   values[2] = value;
   result.value = `${values[0]}px  ${values[1]}px  ${values[2]}px  ${values[3]}px`;
});

bottomRight.addEventListener("change", (e) => {
   const value = e.target.value;
   changeRadius(value, "bottomRight");
   values[3] = value;
   result.value = `${values[0]}px  ${values[1]}px  ${values[2]}px  ${values[3]}px`;
});