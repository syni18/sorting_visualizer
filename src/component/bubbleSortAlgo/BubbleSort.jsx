import getBubbleSortAnimations from "./getBubbleSortAnimations";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
} from "../../RequireFunction";

const BubbleSort = (array, animationSpeed) => {
  disableButtons();

  const animation = getBubbleSortAnimations(array);

  for(let i=0; i<animation.length; i+=5) {
    const compareEle1 = animation[i];
    const compareEle2 = animation[i+1];
    const doSwap = animation[i+2];
    const isFinalEle = animation[i+3];
    const finalEle = animation[i+4];

    const promise1 = new Promise(function(resolve, reject) {
      setTimeout(() => {
        changeBackgroundColor(compareEle1, "rgba(255,165,0,0.9)");
        changeBackgroundColor(compareEle2, "rgba(255,165,0,0.9)");

        if(doSwap === true) {
          changeBackgroundColor(compareEle1, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(compareEle2, "rgba(144,238,144, 0.9)");

          swapBars(compareEle1, compareEle2);
        }
      },i*animationSpeed);
      resolve();
    });

    const promise2 = new Promise(function(resolve, reject) {
      setTimeout(()=> {
        if(isFinalEle===true){
          changeBackgroundColor(finalEle, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(
            finalEle,
            "5px 5px 50px 5px  rgba(0, 164, 86, 0.2)"
          );
        }
        else {
          changeBackgroundColor(compareEle1, "rgba(225, 0, 120, 0.6)");
          changeBoxShadow(compareEle1, "rgba(225, 0, 120, 0.2)");
        }

        if(finalEle === 0) resolve();
      }, (i+5) * animationSpeed);
    });
    Promise.all([promise1,promise2]).then(enableButtons);
  }
  resetBarStyleDefault(array,(animation.length + 5) * animationSpeed);
}

export default BubbleSort;