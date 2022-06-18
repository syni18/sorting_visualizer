const right_color_bar = document.getElementsByClassName("right-color-bar");
const left_color_bar = document.getElementsByClassName("left-color-bar");
const front_color_bar = document.getElementsByClassName("front-color-bar");
const back_color_bar = document.getElementsByClassName("back-color-bar");
const bottom_color_bar = document.getElementsByClassName("bottom");

export function getBarStyle(index){
    const barStyle = [
      right_color_bar[index].style,
      left_color_bar[index].style,
      back_color_bar[index].style,
      front_color_bar[index].style,
      bottom_color_bar[index].style,
    ];
    return barStyle;
}

export function changeBackgroundColor(index, color) {
  const styleOfElement = getBarStyle(index);
  for (let j = 0; j < styleOfElement.length; j++)
    styleOfElement[j].backgroundColor = color;
}

export function changeBoxShadow(index, shadow) {
  const styleOfElement = getBarStyle(index);
  for (let j = 0; j < styleOfElement.length; j++)
    styleOfElement[j].boxShadow = shadow;
}

export function swapBars(index1, index2) {
  const styleOfElement1 = getBarStyle(index1),
        styleOfElement2 = getBarStyle(index2);
  for (let j = 0; j < 10; j++) {
    const tempHeight = styleOfElement1[j].height;
    styleOfElement1[j].height = styleOfElement2[j].height;
    styleOfElement2[j].height = tempHeight;

    const h1 = parseInt(styleOfElement1[j].height, 10),
          h2 = parseInt(styleOfElement2[j].height, 10);

    styleOfElement1[j].transform = `translateY(${70 - h1}vh)`;
    styleOfElement2[j].transform = `translateY(${70 - h2}vh)`;
  }
}

export function resetBarStyleDefault(array, animationSpeed) {
  setTimeout(() => {
    for (let j = 0; j < array.length; j++) {
      changeBackgroundColor(j, "rgba(225, 0, 120, 0.5)");
      changeBoxShadow(j, "5px 5px 50px 5px rgba(225, 0, 120, 0.2)");
    }
  }, animationSpeed);
}

export function randomInterval(min,max) {
    return Math.floor(Math.random() *(max-min+1)+min);
}

export function enableButtons() {
  document.getElementById("reset").disabled = false;
  document.getElementById("bubbleSort_btn").disabled = false;
  document.getElementById("selectionSort_btn").disabled = false;
  document.getElementById("insertionSort_Btn").disabled = false;
  document.getElementById("range_slider").style.opacity = 1;
  document.getElementById("range_slider").style.visibility = "visible";
}

export function disableButtons() {
  document.getElementById("reset").disabled = true;
  document.getElementById("bubbleSort_btn").disabled = true;
  document.getElementById("selectionSort_btn").disabled = true;
  document.getElementById("insertionSort_Btn").disabled = true;
  document.getElementById("range_slider").style.opacity = 0;
  document.getElementById("range_slider").style.visibility = "hidden";
}