import { Injectable } from '@angular/core';
import { Item } from '../interfaces/persons';

@Injectable({
  providedIn: 'root'
})
export class Task2Service {

  itemList: Item[] = [  
    { "name": "the shawshank redemption" },  
    { "name": "the godfather" },  
    { "name": "the godfather: part ii" },  
    { "name": "the dark knight" },  
    { "name": "12 angry men" },  
    { "name": "schindler's list" },  
    { "name": "the lord of the rings: the return of the king" },  
    { "name": "pulp fiction" },  
    { "name": "the good, the bad and the ugly" },  
    { "name": "forrest gump" },  
    { "name": "inception" },  
    { "name": "the lord of the rings: the fellowship of the ring" },  
    { "name": "star wars: episode v - the empire strikes back" },  
    { "name": "the lord of the rings: the two towers" },  
    { "name": "the matrix" },  
    { "name": "goodfellas" },  
    { "name": "one flew over the cuckoo's nest" },  
    { "name": "se7en" },  
    { "name": "city of god" },  
    { "name": "the silence of the lambs" },  
    { "name": "it's a wonderful life" },  
    { "name": "life is beautiful" },  
    { "name": "the usual suspects" },  
    { "name": "léon: the professional" },  
    { "name": "spirited away" },  
    { "name": "saving private ryan" },  
    { "name": "interstellar" },  
    { "name": "the green mile" },  
    { "name": "the prestige" },  
    { "name": "the intouchables" },  
    { "name": "modern times" },  
    { "name": "the lion king" },  
    { "name": "raiders of the lost ark" },  
    { "name": "rear window" },  
    { "name": "terminator 2: judgment day" },  
    { "name": "back to the future" }, 
    { "name": "whiplash" },  
    { "name": "gladiator" },  
    { "name": "the pianist" },  
    { "name": "the departed" },  
    { "name": "the great dictator" }, 
    { "name": "alien" },  
    { "name": "sunset boulevard" },  
    { "name": "dr. strangelove or: how i learned to stop worrying and love the bomb" },  
    { "name": "the lives of others" },  
    { "name": "memento" },  
    { "name": "apocalypse now" },  
    { "name": "amélie" },  
    { "name": "the shining" },  
    { "name": "cinema paradiso" },  
    { "name": "das boot" },  
    { "name": "taxi driver" },  
    { "name": "lawrence of arabia" },  
    { "name": "city lights" },
    { "name": "the kid" },
    { "name": "singin' in the rain" },
    { "name": "some like it hot" },
    { "name": "all about eve" },
    { "name": "double indemnity" },
    { "name": "sunset boulevard" },
    { "name": "the apartment" },
    { "name": "the big lebowski" },
    { "name": "fargo" },
    { "name": "the grand budapest hotel" },
    { "name": "moonlight" },
    { "name": "the shape of water" },
    { "name": "la la land" },
    { "name": "parasite" },
    { "name": "joker" },
    { "name": "1917" },
    { "name": "once upon a time... in hollywood" },
    { "name": "little women" },
    { "name": "ford v ferrari" },
    { "name": "the irishman" },
    { "name": "marriage story" },
    { "name": "jojo rabbit" },
    { "name": "knives out" },
    { "name": "ad astra" },
    { "name": "avengers: endgame" },
    { "name": "jumanji: the next level" },
    { "name": "frozen ii" }
  ]

  constructor() { }

}