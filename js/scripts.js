const humannames = ["Amicia de Morel","Aran","Atticus Chain","Coal Redroc","Jason Copper","Kaiser Harrow","Mason","Sebastian Lowell","Thomas Perry"];
const dwarfnames = ["Horek Stonebound","Kavhrak Rockgrinder","Tokdor","Trudin Bellowrest"];
const elfnames = ["Na Io","Qia'Lenda","Umbra'Dal","Vala Nailo"]
const allnames = humannames.concat(dwarfnames,elfnames);

function generate(){
let text = "";

    for (let i = 1; i <= 5; i++) {
        text += allnames[generateRandomInteger(allnames.length)-1] + "<br>";
    }

    /*
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
/*
    for (let i = 1; i <= 5; i++) {
        let penzerme =  generateRandomInteger(2);

        if (penzerme == 1) {
            text += names[generateRandomInteger(names.length) - 1] + "<br>";
        }
        else if(penzerme == 2){
        text += dwarfnames[generateRandomInteger(dwarfnames.length)-1] + "<br>";
        }
    }
*/
    document.getElementById("generaltnevek").innerHTML = text;

}


/*Generator Function*/
/*
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
    */

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateRandomIntegernorepeat (max){
    return humannames.splice(Math.floor(Math.random() * max),1);

}
