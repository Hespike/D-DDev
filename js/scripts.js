const humanfemalenames = ["Amicia de Morel","Aran","Atticus Chain","Coal Redroc","Jason Copper","Kaiser Harrow","Mason","Sebastian Lowell","Thomas Perry","Alexander Bolt","Scarlet 'Scar' Dust"];
const humanmalenames = ["Amicia de Morel","Aran","Atticus Chain","Coal Redroc","Jason Copper","Kaiser Harrow","Mason","Sebastian Lowell","Thomas Perry","Alexander Bolt","Scarlet 'Scar' Dust"];
const dwarfmalenames = ["Horek Stonebound","Kavhrak Rockgrinder","Tokdor","Trudin Bellowrest","Gorin Stoneminer","Rorik Redbeard","Hrevok Whiteshield","Kavhrak Ironaxe","Hruek Beerbelly","Tronek Yellowbeard","Hluar Thunderhammer","Tobek Shortleg"];
const dwarffemalenames = ["Luria Stonebound","Eril Rockgrinder","Tokdor","Trudin Bellowrest","Gorin Stoneminer","Rorik Redbeard","Hrevok Whiteshield","Kavhrak Ironaxe","Hruek Beerbelly","Tronek Yellowbeard","Hluar Thunderhammer","Tobek Shortleg"];

const elfmalenames = ["Na Io","Qia'Lenda","Umbra'Dal","Vala Nailo","Vulas Olafiel","Folre Qinrora", "Eluna Pertic","Jonathan","Illithor Umebella","Akkar Sylleth","Myrdin Cralynn","Eldaerenth Xyrgella","Ayen Sarmoira"]
const elffemalenames = ["Na Io","Qia'Lenda","Umbra'Dal","Vala Nailo","Vulas Olafiel","Folre Qinrora", "Eluna Pertic","Jonathan","Lőrinc","Feri","Aneirin Krisberos","Vestele Xyrdithas","Nueleth Phitoris","Ameria Carjyre"]
const allnames = humanmalenames.concat(humanfemalenames,dwarfmalenames,dwarffemalenames,elfmalenames,elffemalenames);
const generatednames = ["1","2","3","4","5","6","7","8","9"];

const dndclass = ["Artificer","Barbarian","Bard","Blood Hunter","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];
const dndrace = ["Dragonborn","Dwarf","Elf","Gnome","Half-Elf","Half-Orc","Halfling","Human","Tiefling","Aarakocra","Aasimar","Fairy","Firbolg","Genasi","Gith","Goliath","Harengon","Kenku","Locathah","Owlin","Tabaxi","Tortle","Triton","Verdan","Bugbear","Centaur","Goblin","Grung","Hobgoblin","Kobold","Lizardfolk","Minotaur","Orc","Yuan-Ti","Pureblood","Autognome","Dhamphir","Giff","Hadozee","Hexblood","Fairy","Kender","Owlfolk","Plasmoid","Rabbitfolk","Reborn","Revenant","Thri-Kreen","Eberron","Changeling","Kalashtar","Shifter","Warforged","Aetherborn","Aven","Khenra","Kor","Merfolk","Naga","Siren","Vampire","Dhamphir","Hexblood","Reborn","Ravnica","Loxodon","Simic","Hybrid","Vedalken","Viashino","Theros","Leonin","Satyr"];


function generatecharacter() {
    let generatedclass =dndclass[generateRandomInteger(dndclass.length)-1];
    let generatedrace =dndrace[generateRandomInteger(dndrace.length)-1];
    let generatednames =allnames[generateRandomInteger(allnames.length)-1];

    switch(generatedrace) {
        case "Dragonborn":
            generatednames =dragonbornnames[generateRandomInteger(dragonbornnames.length)-1];
            break;
        case "Dwarf":
            generatednames =dwarfnames[generateRandomInteger(dwarfnames.length)-1];
            break;
        case "Elf":
            generatednames =elfnames[generateRandomInteger(elfnames.length)-1];
            break;
    }
    document.getElementById("generaltclassrace").innerHTML = "Your character could be a/an " + generatedrace + " " + generatedclass + " whose name is " + generatednames;
}

function genrannames() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 9; i++) {
        newgeneratedname = allnames[generateRandomInteger(allnames.length) - 1];
            if (generatednames.includes(newgeneratedname)) {
                i--;
            } else {
                generatednames[i - 1] = newgeneratedname;
        }
    }
    for (let y = 1; y <= 9; y++) {
        text += generatednames[y-1] + "<br>";
    }
    document.getElementById("genrannames").innerHTML = text;
}

function genranhumanmalenames() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 10; i++) {
        newgeneratedname = humanmalenames[generateRandomInteger(humanmalenames.length) - 1];
        if (generatednames.includes(newgeneratedname)) {
            i--;
        } else {
            generatednames[i - 1] = newgeneratedname;
        }
    }
    for (let y = 1; y <= 10; y++) {
        text += generatednames[y-1] + "<br>";
    }
    document.getElementById("generatednames").innerHTML = text;
}

function genranhumanfemalenames() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 10; i++) {
        newgeneratedname = humanfemalenames[generateRandomInteger(humanfemalenames.length) - 1];
        if (generatednames.includes(newgeneratedname)) {
            i--;
        } else {
            generatednames[i - 1] = newgeneratedname;
        }
    }
    for (let y = 1; y <= 10; y++) {
        text += generatednames[y-1] + "<br>";
    }
    document.getElementById("generatednames").innerHTML = text;
}

function genrandwarffemalenames() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 10; i++) {
        newgeneratedname = dwarffemalenames[generateRandomInteger(dwarffemalenames.length) - 1];
        if (generatednames.includes(newgeneratedname)) {
            i--;
        } else {
            generatednames[i - 1] = newgeneratedname;
        }
    }
    for (let y = 1; y <= 10; y++) {
        text += generatednames[y-1] + "<br>";
    }
    document.getElementById("generatednames").innerHTML = text;
}

function genrandwarfmalenames() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 10; i++) {
        newgeneratedname = dwarfmalenames[generateRandomInteger(dwarfmalenames.length) - 1];
        if (generatednames.includes(newgeneratedname)) {
            i--;
        } else {
            generatednames[i - 1] = newgeneratedname;
        }
    }
    for (let y = 1; y <= 10; y++) {
        text += generatednames[y-1] + "<br>";
    }
    document.getElementById("generatednames").innerHTML = text;
}


function genranelffemalenames() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 10; i++) {
        newgeneratedname = elffemalenames[generateRandomInteger(elffemalenames.length) - 1];
        if (generatednames.includes(newgeneratedname)) {
            i--;
        } else {
            generatednames[i - 1] = newgeneratedname;
        }
    }
    for (let y = 1; y <= 10; y++) {
        text += generatednames[y-1] + "<br>";
    }
    document.getElementById("generatednames").innerHTML = text;
}

function genranelfmalenames() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 10; i++) {
        newgeneratedname = elfmalenames[generateRandomInteger(elfmalenames.length) - 1];
        if (generatednames.includes(newgeneratedname)) {
            i--;
        } else {
            generatednames[i - 1] = newgeneratedname;
        }
    }
    for (let y = 1; y <= 10; y++) {
        text += generatednames[y-1] + "<br>";
    }
    document.getElementById("generatednames").innerHTML = text;
}


/*
function genrandomstat() {
    let stats = [statroll(),statroll(),statroll(),statroll(),statroll(),statroll()];
console.log(stats)
}

function statroll(){
    let stat = [0,0,0,0];
    for (let i = 0; i < 4; i++) {
        stat[i] = generateRandomInteger(6);
    }

let sum = 0;
    for (let i = 0; i < stat.length; i++){
        sum += stat[i];

    }

let min = Math.min.apply(Math, stat) ;
    sum = sum - min;
    return sum;
}
*/
/*Generator Function*/
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

