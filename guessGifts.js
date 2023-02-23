var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];



const guess = (arr1, arr2) => {
    let giftNames = []

    for (i = 0; i < arr1.length; i++)
        for (j = 0; j < arr2.length; j++){
            let { name, size: wishSize, clatters: wishClatters, weight: wishWeight } = arr1[i]
            let { size: giftSize, clatters: giftClatters, weight: giftWeight} = arr2[j]
            if (wishSize === giftSize && wishClatters === giftClatters && wishWeight === giftWeight){
                giftNames.push(name)
            
            }
    }
    return giftNames
}

console.log(guess(wishlist, presents))