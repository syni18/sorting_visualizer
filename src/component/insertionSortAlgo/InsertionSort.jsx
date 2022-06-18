import getInsertionSortAnimations from "./getInsertionSortAnimations.jsx";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
} from "../../RequireFunction";

const InsertionSort = (array, animationSpeed) => {
  disableButtons();

  const animation = getInsertionSortAnimations(array);

  for (let i = 0; i < animation.length; i += 4) {
    const compareEle1 = animation[i],
      compareEle2 = animation[i + 1],
      doSwap = animation[i + 2],
      sortedTill = animation[i + 3];

    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        changeBackgroundColor(compareEle1, "rgba(255,165,0, 0.9)");
        changeBackgroundColor(compareEle2, "rgba(255,165,0, 0.9)");

        if (doSwap === true) {
          changeBackgroundColor(compareEle1, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(compareEle2, "rgba(144,238,144, 0.9)");
          swapBars(compareEle1, compareEle2);
        }
      }, i * animationSpeed);

      resolve();
    });

    const promise2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        for (let j = 0; j <= sortedTill; j++) {
          changeBackgroundColor(j, "rgba(0, 164, 86, 0.6)");
          changeBoxShadow(j, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
        }

        if (
          compareEle1 === array.length - 1 &&
          compareEle2 === array.length - 1
        )
          resolve();
      }, (i + 4) * animationSpeed);
    });

    Promise.all([promise1, promise2])
      .then(enableButtons);
  }

  resetBarStyleDefault(array, (animation.length + 4) * animationSpeed);
};

export default InsertionSort;
