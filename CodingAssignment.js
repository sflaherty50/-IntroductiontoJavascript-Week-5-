//1
class VideoGame {
    constructor(gamename, gamegenre) {
    this.gamename = gamename;
this.gamegenre = gamegenre;
}

describe() {
    return `${this.gamename} genre ${this.gamegenre}.`;
}
}

class VideoGameConsole {
    constructor(name) {
        this.name = name;
        this.videogames = [];
    }


describe() {
    return `${this.consolename} has ${this.videogames.length} games.`;
}
}

class Menu {
    constructor() {
        this.videogameconsoles = [];
        this.selected = null;
    }

    start() {
     let selection = this.showMainMenuOption();  
     while (selection != 0) {
switch(selection) {
    case '1':
        this.createVideoGameConsoles();
        break;
    case '2':
        this.viewVideoGames();
        break;
    case '3':
        this.deleteVideoGameConsoles();
        break;
    case '4':
        this.displayVideoGameConsoles();
        break;
    default:
        selection = 0;

}
selection = this.showMainMenuOption();
     }
     alert('Goodbye!');
    }

    showMainMenuOption() {
        return prompt(`
        0) exit
        1) Create New Video Game Console
        2) View Video Games
        3) Delete Video Game Console
        4) Display all Video Game Consoles
        `);
    }

    showVideoGameConsolesMenuOptions(videogameconsoleInfo) {
        return prompt(`
        0) Back
        1) Create a Video Game
        2) Delete a Video Game
        --------------------
        ${videogameconsoleInfo}
        `);
    }

    displayVideoGameConsoles() {
        let videogameconsoleString = '';
        for(let i = 0; i < this.videogameconsoles.length; i++) {
            videogameconsoleString += i + ') ' + this.videogameconsoles[i].name + '\n'
        }
        alert(videogameconsoleString);
    }
   createVideoGameConsoles() {
       let name = prompt('Enter name for new video game console:');
       this.videogameconsoles.push(new VideoGameConsole(name));
   }

   viewVideoGames() {
       let index = prompt('Enter the index of the Video Game Console you wish to view:');
       if(index > -1 && index < this.videogameconsoles.length) {
           this.selectedVideoGameConsole = this.videogameconsoles[index];
           let description = 'Video Game Console is: ' + this.selectedVideoGameConsole.name + '\n';

           for(let i = 0; i < this.selectedVideoGameConsole.videogames.length; i++) {
                description += i + ') ' + this.selectedVideoGameConsole.videogames[i].gamename
                + ' - ' + this.selectedVideoGameConsole.videogames[i].gamegenre +'\n';
           }

           let selection = this.showVideoGameConsolesMenuOptions(description);
           switch(selection) {
               case '1':
                   this.createVideoGames();
                   break;
                case '2':
                    this.deleteVideoGames();
           }
       }
   }





   

deleteVideoGameConsoles() {
    let index = prompt('Enter the index of the videogame console you wish to delete:');
    if (index > -1 && index < this.videogameconsoles.length) {
        this.videogameconsoles.splice(index, 1)
    }
}

   createVideoGames() {
       let gamename = prompt('Enter name for new game:');
       let gamegenre = prompt('Enter genre for new game:');
       this.selectedVideoGameConsole.videogames.push(new VideoGame(gamename, gamegenre));
   }

deleteVideoGames() {
    let index = prompt('Enter the index of the videogame you wish to delete:')
    if(index > -1 && index < this.selectedVideoGameConsole.videogames.length) {
        this.selectedVideoGameConsole.videogames.splice(index, 1);
    }
}
}

let menu = new Menu();
menu.start();
