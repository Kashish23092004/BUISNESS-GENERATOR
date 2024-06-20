
//generating random words from
// CRAZY/AMAZING/Fire
// engine/food/garments
// bros/liimited/hub

let rand = Math.random()
let first,second,third;
if(rand<0.33){
    first ="crazy"
}
else if (rand<0.66 && rand>=0.33)
    {
        first= "amazing"
    }
else(
    first = "bros"
)
if(rand<0.33){
    second ="engine"
}
else if (rand<0.66 && rand>=0.33)
    {
        second= "food"
    }
else(
    second = "garments"
)
if(rand<0.33){
    third ="limited"
}
else if (rand<0.66 && rand>=0.33)
    {
        third= "hub"
    }
else(
third = "bros"
)
console.log(`${first} ${second} ${third}`)
