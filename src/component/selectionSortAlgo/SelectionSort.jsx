import getSelectionSortAnimations from "./getSelectionSortAnimations.jsx";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
} from "../../RequireFunction";

const SelectionSort = (array, animationSpeed) => {
  disableButtons();

  const animation = getSelectionSortAnimations(array);

  for (let i = 0; i < animation.length; i += 6) {
    const compareEle1 = animation[i],
      compareEle2 = animation[i + 1],
      minIndexEle = animation[i + 2],
      doSwap = animation[i + 3],
      isFinalEle = animation[i + 4],
      finalEle = animation[i + 5];

    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        changeBackgroundColor(minIndexEle, "rgba(0,0,255, 0.9)");
        changeBackgroundColor(compareEle1, "rgba(0,0,0, 0.9)");
        changeBackgroundColor(compareEle2, "rgba(255,165,0, 0.9)");

        if (doSwap === true) {
          changeBackgroundColor(minIndexEle, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(compareEle1, "rgba(144,238,144, 0.9)");
          swapBars(compareEle1, minIndexEle);
        }
      }, i * animationSpeed);

      resolve();
    });

    const promise2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (isFinalEle === true) {
          changeBackgroundColor(finalEle, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(
            finalEle,
            "5px 5px 50px 5px rgba(0, 164, 86, 0.2)"
          );
        } else {
          changeBackgroundColor(compareEle2, "rgba(225, 0, 120, 0.6)");
          changeBackgroundColor(minIndexEle, "rgba(225, 0, 120, 0.6)");
        }

        if (finalEle === array.length - 1) resolve();
      }, (i + 6) * animationSpeed);
    });

    Promise.all([promise1, promise2])
      .then(enableButtons);
  }

  resetBarStyleDefault(array, (animation.length + 6) * animationSpeed);
};

export default SelectionSort;
