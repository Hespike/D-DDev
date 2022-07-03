const humannames = ["Amicia de Morel","Aran","Atticus Chain","Coal Redroc","Jason Copper","Kaiser Harrow","Mason","Sebastian Lowell","Thomas Perry"];
const dwarfnames = ["Horek Stonebound","Kavhrak Rockgrinder","Tokdor","Trudin Bellowrest"];
const elfnames = ["Na Io","Qia'Lenda","Umbra'Dal","Vala Nailo"]
const allnames = humannames.concat(dwarfnames,elfnames);
const generatednames = ["1","2","3","4","5","6","7","8","9","10"];

function generate() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 10; i++) {
        newgeneratedname = allnames[generateRandomInteger(allnames.length) - 1];
            if (generatednames.includes(newgeneratedname)) {
                i--;
            } else {
                generatednames[i - 1] = newgeneratedname;
        }
    }

    for (let y = 1; y <= 10; y++) {
        text += generatednames[y-1] + "<br>";
    }

/*
    for (let i = 1; i <= 5; i++) {
        text += allnames[generateRandomInteger(allnames.length)-1] + "<br>";
    }
*/
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
