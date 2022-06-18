
const getBubbleSortAnimations = (array) => {
    const animation = [];

    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j< array.length-i-1; j++) {
            animation.push(j,j+1,false,false,-1);
            if(array[j] > array[j+1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                 animation.push(j, j + 1, true, false, -1);
            }
        }

        animation.push(
            array.length-1-i,
            array.length-1-i,
            false,
            true,
            array.length-1-i
        );
    }
    animation.push(0,0,false,true,0);
    return animation;
}

export default getBubbleSortAnimations;