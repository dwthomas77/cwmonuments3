export const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    const clonedArray = array.slice(0);

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = clonedArray[currentIndex];
        clonedArray[currentIndex] = clonedArray[randomIndex];
        clonedArray[randomIndex] = temporaryValue;
    }

    return clonedArray;
};

export const logThisSucka = () => {};
