const humannames = ["Amicia de Morel","Aran","Atticus Chain","Coal Redroc","Jason Copper","Kaiser Harrow","Mason","Sebastian Lowell","Thomas Perry","Alexander Bolt","Scarlet 'Scar' Dust"];
const dwarfnames = ["Horek Stonebound","Kavhrak Rockgrinder","Tokdor","Trudin Bellowrest"];
const elfnames = ["Na Io","Qia'Lenda","Umbra'Dal","Vala Nailo"]
const allnames = humannames.concat(dwarfnames,elfnames);
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

function genranhumannames() {
    let text = "";
    let newgeneratedname = "";

    for (let i = 1; i <= 9; i++) {
        newgeneratedname = humannames[generateRandomInteger(humannames.length) - 1];
        if (generatednames.includes(newgeneratedname)) {
            i--;
        } else {
            generatednames[i - 1] = newgeneratedname;
        }
    }
    for (let y = 1; y <= 9; y++) {
        text += generatednames[y-1] + "<br>";
    }
    document.getElementById("genranhumannames").innerHTML = text;
}

function genrandomstat() {
    let stats = [statroll(),statroll(),statroll(),statroll(),statroll(),statroll()];
    let str = statroll();
    let dex = statroll();
    let con = statroll();
    let int = statroll();
    let wis = statroll();
    let cha = statroll();
    /*console.log (str + " " + dex + " " + con  + " " + int + " " + wis + " " + cha);*/
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

/*Generator Function*/
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

