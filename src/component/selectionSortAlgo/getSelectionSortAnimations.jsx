const getSelectionSortAnimations = (array) => {
  const animation = [];

  let min_idx;
  for (let i = 0; i < array.length; i++) {
    min_idx = i;
    animation.push(i, i, min_idx, false, false, -1);

    for (let j = i + 1; j < array.length; j++) {
      animation.push(i, j, min_idx, false, false, -1);
      if (array[j] < array[min_idx]) {
        min_idx = j;
        animation.push(i, j, min_idx, false, false, -1);
      }
    }
    if (min_idx !== i) {
      [array[i], array[min_idx]] = [array[min_idx], array[i]];
      animation.push(i, i, min_idx, true, false, -1);
    }
    animation.push(i, i, i, false, true, i);
  }

  return animation;
};

export default getSelectionSortAnimations;
