const humannames = ["Amicia de Morel","Aran","Atticus Chain","Coal Redroc","Jason Copper","Kaiser Harrow","Mason","Sebastian Lowell","Thomas Perry"];
const dwarfnames = ["Horek Stonebound","Kavhrak Rockgrinder","Tokdor","Trudin Bellowrest"];
const elfnames = ["Na Io","Qia'Lenda","Umbra'Dal","Vala Nailo"]
const allnames = humannames.concat(dwarfnames,elfnames);
const generatednames = ["1","2","3","4","5","6","7","8","9","10"];

const dndclass = ["Artificer","Barbarian","Bard","Blood Hunter","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","HSorcerer","Warlock","Wizard"];
const dndrace = ["Dragonborn","Dwarf","Elf","Gnome","Half-Elf","Half-Orc","Halfling","Human","Tiefling","Aarakocra","Aasimar","Fairy","Firbolg","Genasi","Gith","Goliath","Harengon","Kenku","Locathah","Owlin","Tabaxi","Tortle","Triton","Verdan","Bugbear","Centaur","Goblin","Grung","Hobgoblin","Kobold","Lizardfolk","Minotaur","Orc","Yuan-Ti","Pureblood","Autognome","Dhamphir","Giff","Hadozee","Hexblood","Fairy","Kender","Owlfolk","Plasmoid","Rabbitfolk","Reborn","Revenant","Thri-Kreen","Eberron","Changeling","Kalashtar","Shifter","Warforged","Aetherborn","Aven","Khenra","Kor","Merfolk","Naga","Siren","Vampire","Dhamphir","Hexblood","Reborn","Ravnica","Loxodon","Simic","Hybrid","Vedalken","Viashino","Theros","Leonin","Satyr"];

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
    document.getElementById("generaltnevek").innerHTML = text;
}


/*Generator Function*/
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

