const names = ["Amicia de Morel","Aran","Coal Redroc","Jason Copper","Kaiser Harrow","Mason","Sebastian Lowell","Thomas Perry"];
const dwarfnames = ["Horek Stonebound","Kavhrak Rockgrinder","Tokdor","Trudin Bellowrest"];

function generate(){
let text = "";
/*
    for (let i = 1; i <= 5; i++) {
        text += names[generateRandomInteger(names.length)-1] + "<br>";
    }
    for (let i = 1; i <= 5; i++) {
        text += dwarfnames[generateRandomInteger(dwarfnames.length)-1] + "<br>";
    }
  */
/*
    for (let i = 1; i <= 5; i++) {
            text += names[generateRandomInteger(names.length) - 1] + "<br>";
        }
    for (let i = 1; i <= 5; i++) {

            text += dwarfnames[generateRandomInteger(dwarfnames.length)-1] + "<br>";
        }
    */

    for (let i = 1; i <= 5; i++) {
        let penzerme =  generateRandomInteger(2);

        if (penzerme == 1) {
            text += names[generateRandomInteger(names.length) - 1] + "<br>";
        }
        else if(penzerme == 2){
        text += dwarfnames[generateRandomInteger(dwarfnames.length)-1] + "<br>";
        }
    }


    document.getElementById("generaltnevek").innerHTML = text;

}



/*Generator Function*/
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}