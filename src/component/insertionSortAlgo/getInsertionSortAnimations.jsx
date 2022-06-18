const getInsertionSortAnimations = (array) => {
  const animation = []; 

  animation.push(0, 0, false, 0);

  for (let i = 1; i < array.length; i++) {
    let key = array[i],
      j = i - 1;

    animation.push(i, j, false, i - 1);
    while (j >= 0 && array[j] > key) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
      animation.push(j, j + 1, false, i);
      animation.push(j, j + 1, true, i);
      j--;
    }
  }

  animation.push(array.length - 1, array.length - 1, false, array.length - 1);
  return animation;
};

export default getInsertionSortAnimations;
