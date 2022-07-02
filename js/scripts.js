const names = ["Thomas", "Jason", "Amicia de Morel", "Coal", "Kaiser", "Sebastian", "ZoliBoii","Aran","Tamásgay"];

const dwarfnames = ["HajduTamas", "Bolin", "Grolin", "Gimli",];

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

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}