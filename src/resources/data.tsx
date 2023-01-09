// https://www.businessinsider.com/wordle-alternative?r=US&IR=T
// https://www.pastemagazine.com/games/best-wordle-variants/
// https://gist.github.com/maxspero/0a2f536b9561d829caf6bd994a34193d

import wordle from './assets/wordle.png'
import tridle from './assets/tridle.png'
import quordle from './assets/quordle.png'
import octordle from './assets/octordle.png'
import dordle from './assets/dordle.png'
import thirtle from './assets/thirtle.png'
import kilordle from './assets/kilordle.png'
import polydle from './assets/polydle.png'
import sedecordle from './assets/sedecordle.png'
import worwordledle from './assets/worwordledle.png'
import crosswordle from './assets/crosswordle.png'
import evilwurdle from './assets/evilwurdle.png'
import speedle from './assets/speedle.png'
import poeltl from './assets/poeltl.png'
import squardle from './assets/squardle.png'
import absurdle from './assets/absurdle.png'
import evilwordle from './assets/evilwordle.png'
import qwrtl from './assets/qwrtl.png'
import waffle from './assets/waffle.png'
import reversle from './assets/reversle.png'
import survivle from './assets/survivle.png'
import absurvivle from './assets/absurvivle.png'
import scrabwordle from './assets/scrabwordle.png'
import xordle from './assets/xordle.png'
import fibble from './assets/fibble.png'
import sixdle from './assets/sixdle.png'
import warmle from './assets/warmle.png'
import wordpeaks from './assets/wordlepeaks.png'
import symble from './assets/symble.png'
import weredle from './assets/weredle.png'
import nerdle from './assets/nerdle.png'
import weaver from './assets/weaver.png'
import taylordle from './assets/taylordle.png'
import byrdle from './assets/byrdle.png'
import btswordle from './assets/btswordle.png'
import sweardle from './assets/sweardle.png'
import lewdle from './assets/lewdle.png'
import jordle from './assets/jordle.png'
import queerdle from './assets/queerdle.png'
import ygordle from './assets/ygordle.png'
import oundle from './assets/oundle.png'
import paimordle from './assets/paimordle.png'
import brdl from './assets/brdl.png'
import lordle_of_the_rings from './assets/lordle_of_the_rings.png'
import swordle from './assets/swordle.png'
import gordle from './assets/gordle.png'
import pawdle from './assets/pawdle.png'
import scholardle from './assets/scholardle.png'
import hogwartle from './assets/hogwartle.png'
import foodle from './assets/foodle.png'
import airportle from './assets/airportle.png'
import airportle_2 from './assets/airportle_2.png'
import lemot from './assets/lemot.png'
import sutom from './assets/sutom.png'
import verba from './assets/verba.png'
import wordlees from './assets/wordlees.png'
import termo from './assets/termo.png'
import ordlig from './assets/ordlig.png'
import hebrew from './assets/hebrew.png'
import kerdle from './assets/kerdle.png'
import korean from './assets/korean.png'
import welshwordle from './assets/welshwordle.png'
import musinimi from './assets/musinimi.png'
import ipadle from './assets/ipadle.png'
import wordwazzle from './assets/wordwazzle.png'
import hellowordl from './assets/hellowordl.png'
import wordguessr from './assets/wordguessr.png'
import wheeldle from './assets/wheeldle.png'
import wordmaster from './assets/wordmaster.png'
import wordleoff from './assets/wordleoff.png'
import squabble from './assets/squabble.png'
import wordhoot from './assets/wordhoot.png'
import wordlecup from './assets/wordlecup.png'
import worduel from './assets/worduel.png'
import wordlewithfriends from './assets/wordlewithfriends.png'
import hexlecolor from './assets/hexlecolor.png'
import bytle from './assets/bytle.png'
import hexle from './assets/hexle.png'
import semantle from './assets/semantle.png'
import commandercodex from './assets/commandercodex.png'
import scidle from './assets/scidle.png'
import squirdle from './assets/squirdle.png'
import whoareya from './assets/whoareya.png'
import framed from './assets/framed.png'
import cloudle from './assets/cloudle.png'
import redactle from './assets/redactle.png'
import movlie from './assets/movlie.png'
import bookli from './assets/bookli.png'
import thesaurdle from './assets/thesaurdle.png'
import joinedwords from './assets/joinedwords.png'
import revertle from './assets/revertle.png'
import quintessential from './assets/quintessential.png'
import antiwordle from './assets/antiwordle.png'
import tusmo from './assets/tusmo.png'
import optimle from './assets/optimle.png'
import chessle from './assets/chessle.png'
import fusekle from './assets/fusekle.png'
import pictle from './assets/pictle.png'
import heardle from './assets/heardle.png'
import squaredle from './assets/squaredle.png'
import primel from './assets/primel.png'
import mathler from './assets/mathler.png'
import nerdle2 from './assets/nerdle2.png'
import mathle from './assets/mathle.png'
import numberle from './assets/numberle.png'
import equatle from './assets/equatle.png'
import addle from './assets/addle.png'
import subwaydle from './assets/subwaydle.png'
import worldle from './assets/worldle.png'
import globle from './assets/globle.png'
import tradle from './assets/tradle.png'
import flagdle from './assets/flagdle.png'
import flagle from './assets/flagle.png'
import letterle from './assets/letterle.png'
import passwordle from './assets/passwordle.png'
import warbl from './assets/warbl.png'
import flaggle from './assets/flaggle.png'

export type EntryType = { name: string; url: string; img: string; desc: string; }

export type Data = Record<string, EntryType[]>[]

export const data: Data = [{
    "Original": [
        {
            "name": "Wordle",
            "url": "https://www.nytimes.com/games/wordle/index.html",
            "img": wordle,
            "desc": "Guess a five-letter word in six guesses. Each guess must be real words."
        }
    ]
},
{
    "Recommended": [
        {
            "name": "Xordle",
            "url": "https://xordle.xyz/",
            "img": xordle,
            "desc": "Wordle with two disjoint answers but only one board. Guess both words correctly to win."
        },
        {
            "name": "Quordle",
            "url": "https://www.quordle.com/",
            "img": quordle,
            "desc": "Wordle on four different grids at once."
        },
        {
            "name": "Weaver",
            "url": "https://wordwormdormdork.com/",
            "img": weaver,
            "desc": "Use words to traverse from one word to another."
        },
        {
            "name": "Sixdle",
            "url": "https://word.rodeo/Sixdle/",
            "img": sixdle,
            "desc": "Wordle with six-letter words and answers."
        },
        {
            "name": "Quintessential",
            "url": "https://quintessential.fun/",
            "img": quintessential,
            "desc": "5x5 grid with filled with letters. Swap tiles to get each of the 5 horizontal words correct in as few moves as possible."
        },
        {
            "name": "Nerdle",
            "url": "https://nerdlegame.com/",
            "img": nerdle2,
            "desc": "Guess an eight-character equation."
        },
        {
            "name": "Tradle",
            "url": "https://oec.world/en/tradle/",
            "img": tradle,
            "desc": "Guess a country based on its export profile."
        },
        {
            "name": "Joined Words",
            "url": "https://jw-daily.web.app/#/intro",
            "img": joinedwords,
            "desc": "Find the word that links two sentences."
        },
        {
            "name": "Chessle",
            "url": "https://jackli.gg/chessle/",
            "img": chessle,
            "desc": "Like Wordle, but for Chess openings."
        },
        {
            "name": "Heardle",
            "url": "https://www.heardle.app/",
            "img": heardle,
            "desc": "Guess a song by hearing increasingly long opening snippets. Features design language fromWordle."
        },
        {
            "name": "Framed",
            "url": "https://framed.wtf/",
            "img": framed,
            "desc": "Guess the film from a series of screenshots"
        },
        {
            "name": "Hello Wordl",
            "url": "https://hellowordl.net/",
            "img": hellowordl,
            "desc": "Customizable. Can change difficulty mode and number of letters."
        },
    ]
},
{
    "Wordle variants": [
        {
            "name": "xordle",
            "url": "https://xordle.xyz/",
            "img": xordle,
            "desc": "Wordle with two disjoint answers but only one board. Guess both words correctly to win."
        },
        {
            "name": "Weaver",
            "url": "https://wordwormdormdork.com/",
            "img": weaver,
            "desc": "Use words to traverse from one word to another."
        },
        {
            "name": "Optimle",
            "url": "https://optimle.meow.garden/",
            "img": optimle,
            "desc": "Complete a half-completed wordle as optimally as possible."
        },
        {
            "name": "Fibble",
            "url": "https://fibble.xyz/",
            "img": fibble,
            "desc": "Wordle, but the clue contains one lie in every row."
        },
        {
            "name": "Reversle",
            "url": "http://reversle.net",
            "img": reversle,
            "desc": "Given an answer and grid of clues, find a sequence of words that matches the clues as quickly as possible."
        },
        {
            "name": "Weredle",
            "url": "https://weredle.netlify.app/",
            "img": weredle,
            "desc": "Wordle with a sneaky Werewolf tile that may (or may not) give you a false answer every time you guess."
        },
        {
            "name": "Symble",
            "url": "https://www.symble.app/",
            "img": symble,
            "desc": "Wordle, but hints are given as a random 3 symbols and it is up to the player to determine what the symbols mean."
        },
        {
            "name": "Waffle",
            "url": "https://wafflegame.net/",
            "img": waffle,
            "desc": "Squaredle grid with shuffled letters and 15 swaps to find the correct grid."
        },
        {
            "name": "Wor-wordle-dle",
            "url": "https://wor-wordle-dle.com/",
            "img": worwordledle,
            "desc": "Wordle with multiple layers that have you guess other players routes."
        },
        {
            "name": "Crosswordle",
            "url": "https://crosswordle.serializer.ca/",
            "img": crosswordle,
            "desc": "Wordle on two intersecting words."
        },
        {
            "name": "Speedle",
            "url": "https://tck.mn/speedle/",
            "img": speedle,
            "desc": "Wordle against the clock."
        },
        {
            "name": "Squardle",
            "url": "https://fubargames.se/squardle/",
            "img": squardle,
            "desc": "Wordle in two dimensions across a 5x5 grid with six different words."
        },
        {
            "name": "Warmle",
            "url": "https://warmle.org/",
            "img": warmle,
            "desc": "Wordle, but a yellow clue lets you know if are within 3 letters alphabetically for thatposition."
        },
        {
            "name": "Wordle Peaks",
            "url": "https://vegeta897.github.io/wordle-peaks/",
            "img": wordpeaks,
            "desc": "Wordle, but each position is hinted based on the alphabetical direction of the answer's letter inthat position."
        },
        {
            "name": "Survivle",
            "url": "https://lazyguyy.github.io/survivle/",
            "img": survivle,
            "desc": "Avoid guessing the hidden word in as many tries as possible. Sounds easy, but there's a catch!"
        },
        {
            "name": "AntiWordle",
            "url": "https://www.antiwordle.com/",
            "img": antiwordle,
            "desc": "Avoid guessing the hidden word in as many tries as possible. Sounds easy, but there's a catch!"
        },
        {
            "name": "Absurdle",
            "url": "https://qntm.org/files/absurdle/absurdle.html",
            "img": absurdle,
            "desc": "Wordle that actively avoids giving you the answer. Each guess reveals as little information as possible, changing the secret word if need be."
        },
        {
            "name": "Evil Wordle",
            "url": "https://swag.github.io/evil-wordle/",
            "img": evilwordle,
            "desc": "Wordle that actively avoids giving you the answer. Each guess reveals as little information as possible, changing the secret word if need be."
        },
        {
            "name": "Evil Wurdle",
            "url": "https://areiche2.github.io/evil-wurdle/",
            "img": evilwurdle,
            "desc": "???"
        },
        {
            "name": "QWRTL",
            "url": "https://limpet.net/qwrtl/",
            "img": qwrtl,
            "desc": "Wordle without the letter E."
        },
        {
            "name": "Scrabwordle",
            "url": "https://engaging-data.com/scrabwordle/",
            "img": scrabwordle,
            "desc": "Wordle, but your word must also match a given Scrabble score."
        },
        {
            "name": "Sixdle",
            "url": "https://word.rodeo/Sixdle/",
            "img": sixdle,
            "desc": "Wordle with six-letter words and answers."
        },
        {
            "name": "Nerdle",
            "url": "https://www.playnerdle.com/nerdle/",
            "img": nerdle,
            "desc": "Wordle where a guess does not have to be a word."
        },
        {
            "name": "Revertle",
            "url": "https://www.puppetsquid.com/revertle/",
            "img": revertle,
            "desc": "??"
        },
        {
            "name": "Tusmo",
            "url": "https://www.tusmo.xyz/",
            "img": tusmo,
            "desc": "Wordle with levels which increase the word length."
        },
    ]
},
{
    "Maths variants": [
        {
            "name": "Nerdle",
            "url": "https://nerdlegame.com/",
            "img": nerdle2,
            "desc": "Guess an eight-character equation."
        },
        {
            "name": "Primel",
            "url": "https://converged.yt/primel/",
            "img": primel,
            "desc": "Guess a five-digit prime in six guesses. Each guess must be prime."
        },
        {
            "name": "Mathler",
            "url": "https://www.mathler.com/",
            "img": mathler,
            "desc": "Guess a six-character expression that equals a given number."
        },
        {
            "name": "Mathle",
            "url": "https://mathlegame.com/",
            "img": mathle,
            "desc": "Guess an eight-character equation."
        },
        {
            "name": "Numberle",
            "url": "https://numberle.org/",
            "img": numberle,
            "desc": "Guess an eight-character equation."
        },
        {
            "name": "Equatle",
            "url": "http://www.equatle.com/",
            "img": equatle,
            "desc": "Guess a five-character expression."
        },
        {
            "name": "Addle",
            "url": "https://alex.strinka.net/programs/addle/",
            "img": addle,
            "desc": "Guess the addition of two three digit numbers together."
        },
        {
            "name": "bytle",
            "url": "https://jamesl.me/bytle/",
            "img": bytle,
            "desc": "Guess the base-10 number."
        },
        {
            "name": "hexle",
            "url": "https://jamesl.me/hexle/",
            "img": hexle,
            "desc": "Guess a hexidecimal number. "
        },
    ]
},
{
    "Geography / Location variants": [
        {
            "name": "Tradle",
            "url": "https://oec.world/en/tradle/",
            "img": tradle,
            "desc": "Guess a country based on its export profile."
        },
        {
            "name": "Worldle",
            "url": "https://worldle.teuteuf.fr/",
            "img": worldle,
            "desc": "Guess a country by its outline. Hints are distance and direction between the guessed country andthe answer country."
        },
        {
            "name": "Globle",
            "url": "https://globle-game.com/",
            "img": globle,
            "desc": "Guess a country based on color-coded hints indicating distance."
        },
        {
            "name": "Flaggle",
            "url": "https://ducc.pythonanywhere.com/flaggle/",
            "img": flaggle,
            "desc": "Guess a country flag that shows colour intersection of previous guesses."
        },
        {
            "name": "Flagdle",
            "url": "https://www.flagdle.org/",
            "img": flagdle,
            "desc": "Guess a country based on its flag. Hints are a similarity score between your guess's flag and theactual flag."
        },
        {
            "name": "Flagle",
            "url": "https://www.flagle.io/",
            "img": flagle,
            "desc": "Guess a country based a 2x3 grid of a flag that reveals one square with each guess."
        },
        {
            "name": "Cloudle",
            "url": "https://cloudle.app/",
            "img": cloudle,
            "desc": "Guess the weekly weather at a specific global location "
        },
        {
            "name": "Subwaydle",
            "url": "https://www.subwaydle.com/",
            "img": subwaydle,
            "desc": "Guess a valid NYC subway trip from point A to point B."
        },
        {
            "name": "Oundle",
            "url": "https://oundle.andrewchapman.info/",
            "img": oundle,
            "desc": "Guesses and answers must be a British place name."
        },
    ]
},
{
    "English / Literature variants": [
        {
            "name": "Joined Words",
            "url": "https://jw-daily.web.app/#/intro",
            "img": joinedwords,
            "desc": "Find the word that links two sentences."
        },
        {
            "name": "Thesaurdle",
            "url": "https://metzger.media/games/thesaurdle/",
            "img": thesaurdle,
            "desc": "Guess the word based on are series of synonyms."
        },
        {
            "name": "Semantle",
            "url": "https://semantle.com/",
            "img": semantle,
            "desc": "Guess any word or phrase. Hints are the Word2Vec semantic distance between guess and answer."
        },
        {
            "name": "Bookli",
            "url": "https://bookli.co.uk/",
            "img": bookli,
            "desc": "Guess words to complete a passage from a famous book."
        },
        {
            "name": "Redactle",
            "url": "https://www.redactle.com/#",
            "img": redactle,
            "desc": "Guess words to complete a redacted a wikipedia article."
        },
        {
            "name": "Scholardle",
            "url": "https://www.scholardle.com/",
            "img": scholardle,
            "desc": "Guesses and answers are aceademic jargon."
        },
        {
            "name": "Hogwartle",
            "url": "https://www.hogwartsishere.com/hogwartle/",
            "img": hogwartle,
            "desc": "Guesses and answers are Harry Potter themed."
        },
        {
            "name": "Lordle of the Rings",
            "url": "https://digitaltolkien.github.io/vue-wordle/",
            "img": lordle_of_the_rings,
            "desc": "Lord of the Rings. Uses only five-letter words in the main text of Lord of the Rings"
        }
    ]
},
{
    "Boardgame variants": [
        {
            "name": "Chessle",
            "url": "https://jackli.gg/chessle/",
            "img": chessle,
            "desc": "Like Wordle, but for Chess openings."
        },
        {
            "name": "Fusekle",
            "url": "https://yewang.github.io/fusekle/",
            "img": fusekle,
            "desc": "Like Wordle, but for Go openings."
        },
        {
            "name": "Squaredle",
            "url": "https://squaredle.app/",
            "img": squaredle,
            "desc": "Boggle-like word finding game. Features design language from Wordle."
        }
    ]
},
{
    "Film variants": [
        {
            "name": "Framed",
            "url": "https://framed.wtf/",
            "img": framed,
            "desc": "Guess the film from a series of screenshots"
        },
        {
            "name": "Movlie",
            "url": "https://movlie.org/",
            "img": movlie,
            "desc": "Guess the film from a series of screnshots."
        },
        {
            "name": "Hogwartle",
            "url": "https://www.hogwartsishere.com/hogwartle/",
            "img": hogwartle,
            "desc": "Guesses and answers are Harry Potter themed."
        },
        {
            "name": "Lordle of the Rings",
            "url": "https://digitaltolkien.github.io/vue-wordle/",
            "img": lordle_of_the_rings,
            "desc": "Lord of the Rings. Uses only five-letter words in the main text of Lord of the Rings"
        }
    ]
},
{
    "Sports": [
        {
            "name": "Who are ya?",
            "url": "https://playfootball.games/who-are-ya/big-5",
            "img": whoareya,
            "desc": "Guess a football player and recieve hints based on properties."
        },
        {
            "name": "Poeltl",
            "url": "https://poeltl.dunk.town/",
            "img": poeltl,
            "desc": "Guess an NBA player and recieve hints based on properties."
        },
        {
            "name": "Gordle",
            "url": "https://gordle.herokuapp.com/",
            "img": gordle,
            "desc": "Guesses and answers ar related to hockey."
        }
    ]
},
{
    "Music": [
        {
            "name": "Heardle",
            "url": "https://www.heardle.app/",
            "img": heardle,
            "desc": "Guess a song by hearing increasingly long opening snippets."
        },
        {
            "name": "Warbl",
            "url": "https://www.warbl.org/",
            "img": warbl,
            "desc": "Guess a song by hearing it play backwards "
        },
        {
            "name": "Byrdle",
            "url": "https://rbrignall.github.io/byrdle/",
            "img": byrdle,
            "desc": "Answer will be related to choral music. "
        },
        {
            "name": "Taylordle",
            "url": "https://wordle-unlimited.io/taylordle",
            "img": taylordle,
            "desc": "Answer will be related to Taylor Swift."
        },
    ]
},
{
    "Cartoons / Video games ": [
        {
            "name": "Squirdle",
            "url": "https://squirdle.fireblend.com/",
            "img": squirdle,
            "desc": "Pokémon. Guess a Pokémon and receive hints based on Pokémon properties."
        },
        {
            "name": "Commander Codex",
            "url": "https://commandercodex.com/",
            "img": commandercodex,
            "desc": "Magic: the Gathering. Guess a commander and receive hints based on card properties."
        },
        {
            "name": "YGORDLE",
            "url": "https://ygo-wordle.vercel.app/",
            "img": ygordle,
            "desc": "Answer will be Yu-Gi-Oh! related."
        },
        {
            "name": "Jordle",
            "url": "https://www.jellyneo.net/jordle/",
            "img": jordle,
            "desc": "Answer will be Neopets-related."
        },
    ]
},
{
    "Other": [
        {
            "name": "Scidle",
            "url": "http://scidle.co.uk/",
            "img": scidle,
            "desc": "Like wordle, but you create a word or phrase using five consecutive elements from the periodictable."
        },

        {
            "name": "Pictle",
            "url": "https://pictle.web.app/",
            "img": pictle,
            "desc": "Using Wordle rules, use guesses to match a picture inspired by the Wordle puzzle from 7 days ago."
        },
        {
            "name": "Hexle",
            "url": "https://frankljin.github.io/hexle/",
            "img": hexlecolor,
            "desc": "Guess the hexcode of a color."
        },

    ]
},
{
    "Multiplayer": [
        {
            "name": "Wordle Off",
            "url": "http://wordle.jonyork.net/",
            "img": wordleoff,
            "desc": "1v1 Wordle."
        },
        {
            "name": "Squabble",
            "url": "https://squabble.me/",
            "img": squabble,
            "desc": "Battle Royale Wordle."
        },
        {
            "name": "Wordle with Friends",
            "url": "https://mottaquikarim.github.io/wordle_with_friends/",
            "img": wordlewithfriends,
            "desc": "Make your own Wordle puzzle and create a link."
        },
        {
            "name": "Wordhoot",
            "url": "https://wordhoot.com/",
            "img": wordhoot,
            "desc": "Create multiplayer Wordle rooms."
        },
        {
            "name": "Wordle Cup",
            "url": "https://wordlecup.io/",
            "img": wordlecup,
            "desc": "Online competetive wordle"
        },
        {
            "name": "Worduel",
            "url": "https://worduel.albertjvm.ca/",
            "img": worduel,
            "desc": "Create your own wordle and watch others compete."
        }
    ]
},
{
    "Multiple Wordle Grids": [

        {
            "name": "Dordle",
            "url": "https://zaratustra.itch.io/dordle",
            "img": dordle,
            "desc": "Wordle on two different grids at once."

        },
        {
            "name": "Tridle",
            "url": "https://engaging-data.com/tridle/",
            "img": tridle,
            "desc": "Wordle on three different grids at once."
        },
        {
            "name": "Quordle",
            "url": "https://www.quordle.com/",
            "img": quordle,
            "desc": "Wordle on four different grids at once."
        },
        {
            "name": "Octordle",
            "url": "https://octordle.com/",
            "img": octordle,
            "desc": "Wordle on eight different grids at once."
        },
        {
            "name": "Sedecordle",
            "url": "http://sedecordle.com/?mode=daily",
            "img": sedecordle,
            "desc": "Wordle on sixteen different grids at once."
        },
        {
            "name": "Kilordle",
            "url": "https://jonesnxt.github.io/kilordle/",
            "img": kilordle,
            "desc": "Wordle on 1000 different grids at once."
        },
        {
            "name": "Polydle",
            "url": "https://polydle.github.io/",
            "img": polydle,
            "desc": "Choose how many Wordle grids to solve at once."
        },
        {
            "name": "Thirtle",
            "url": "https://doodle-pile.gitlab.io/thirtle/",
            "img": thirtle,
            "desc": "Solve thirty consecutive Wordle grids as quickly as possible."
        }
    ]
},
{
    "Themed Wordle": [

        {
            "name": "Wordle-BTS",
            "url": "https://bts-wordle.vercel.app/",
            "img": btswordle,
            "desc": "Answer will be related to BTS."
        },
        {
            "name": "Sweardle",
            "url": "https://sweardle.com/",
            "img": sweardle,
            "desc": "Answer will be a four-letter swear word. Guess it in four guesses."
        },
        {
            "name": "Lewdle",
            "url": "https://www.lewdlegame.com/",
            "img": lewdle,
            "desc": "Guesses and answers must be in the lewd word dictionary."
        },
        {
            "name": "Jordle",
            "url": "https://www.jellyneo.net/jordle/",
            "img": jordle,
            "desc": "Answer will be Neopets-related."
        },
        {
            "name": "Queerdle",
            "url": "https://queerdle.com/",
            "img": queerdle,
            "desc": "Answer will be queer related words of various lengths."
        },
        {
            "name": "YGORDLE",
            "url": "https://ygo-wordle.vercel.app/",
            "img": ygordle,
            "desc": "Answer will be Yu-Gi-Oh! related."
        },
        {
            "name": "Oundle",
            "url": "https://oundle.andrewchapman.info/",
            "img": oundle,
            "desc": "Guesses and answers must be a British place name."
        },
        {
            "name": "Paimordle",
            "url": "https://paimordle.vercel.app/",
            "img": paimordle,
            "desc": "Guesses and answers must be characters, items, and concepts relating to Genshin Impact."
        },
        {
            "name": "BRDL",
            "url": "https://brdl.alex.gd/",
            "img": brdl,
            "desc": "Guesses and answers must be a 4-letter bird banding code."
        },
        {
            "name": "Lordle of the Rings",
            "url": "https://digitaltolkien.github.io/vue-wordle/",
            "img": lordle_of_the_rings,
            "desc": "Lord of the Rings. Uses only five-letter words in the main text of Lord of the Rings"
        },
        {
            "name": "Swordle",
            "url": "https://wordle.starwars.guide/",
            "img": swordle,
            "desc": "Star Wars. Guess 5-character Star Wars words including numbers and dashes."
        },
        {
            "name": "Gordle",
            "url": "https://gordle.herokuapp.com/",
            "img": gordle,
            "desc": "Guesses and answers ar related to hockey."
        },
        {
            "name": "Pawrdle",
            "url": "https://www.pawrdle.com/",
            "img": pawdle,
            "desc": "Guesses and answers are pet themed. "
        },
        {
            "name": "Scholardle",
            "url": "https://www.scholardle.com/",
            "img": scholardle,
            "desc": "Guesses and answers are aceademic jargon."
        },
        {
            "name": "Hogwartle",
            "url": "https://www.hogwartsishere.com/hogwartle/",
            "img": hogwartle,
            "desc": "Guesses and answers are Harry Potter themed."
        },
        {
            "name": "Foodle",
            "url": "https://food-le.co/",
            "img": foodle,
            "desc": "Guesses and answers are food themed."
        },
        {
            "name": "Airportle",
            "url": "https://airportle.glitch.me/",
            "img": airportle,
            "desc": "Guesses and answers must be three-letter airport codes."
        },
        {
            "name": "Airportl",
            "url": "https://airportle.scottscheapflights.com/",
            "img": airportle_2,
            "desc": "Guesses and answers must be three-letter airport codes."
        }
    ]
},
{
    "Language/Regional Versions": [
        {
            "name": "Le Mot",
            "url": "https://wordle.louan.me/",
            "img": lemot,
            "desc": "French wordle"
        },
        {
            "name": "SUTOM",
            "url": "https://sutom.nocle.fr/",
            "img": sutom,
            "desc": "French wordle. Words are 6-9 letters long, and the first letter is given."
        },
        {
            "name": "Verba",
            "url": "https://sebastianomorando.github.io/wordle-it/",
            "img": verba,
            "desc": "Italian wordle"
        },
        {
            "name": "Wordle",
            "url": "https://wordle.danielfrg.com/",
            "img": wordlees,
            "desc": "Spanish wordle"
        },
        {
            "name": "Termo",
            "url": "https://term.ooo/",
            "img": termo,
            "desc": "Portugese wordle"
        },
        {
            "name": "ordlig.se",
            "url": "https://ordlig.se/",
            "img": ordlig,
            "desc": "Swedish wordle"
        },
        {
            "name": "wordle-spielen.de",
            "url": "www.6mal5.com",
            "img": wordle,
            "desc": "German wordle"
        },
        {
            "name": "meduyeket.net",
            "url": "https://meduyeket.net/",
            "img": hebrew,
            "desc": "Hebrew wordle"
        },
        {
            "name": "Kerdle",
            "url": "https://kerdle.vercel.app/",
            "img": kerdle,
            "desc": "Cornish Wordle"
        },
        {
            "name": "Wordle by nakosung",
            "url": "https://nakosung.github.io/wordle/",
            "img": korean,
            "desc": "Korean Wordle"
        },
        {
            "name": "Wordle Cymraeg",
            "url": "https://www.rhwyd.org/wordle/",
            "img": welshwordle,
            "desc": "Welsh Wordle"
        },
        {
            "name": "Musi Nimi",
            "url": "https://tilde.town/~dustin/wordle-toki/",
            "img": musinimi,
            "desc": "Toki Pona Wordle"
        },
        {
            "name": "IPAdle",
            "url": "https://manishearth.github.io/ipadle/#",
            "img": ipadle,
            "desc": "Wordle with the International Phonetic Alphabet"
        },
        {
            "name": "Wordawazzle",
            "url": "https://wordawazzle.com.au/",
            "img": wordwazzle,
            "desc": "Aussie Slang"
        }
    ]
},
{
    "Clones": [
        {
            "name": "Hello Wordl",
            "url": "https://hellowordl.net/",
            "img": hellowordl,
            "desc": "Customizable. Can change difficulty mode and number of letters."
        },
        {
            "name": "WordGuessr",
            "url": "https://engaging-data.com/wordguessr-wordle/",
            "img": wordguessr,
            "desc": "Options for different word lengths."
        },
        {
            "name": "Wheeldle",
            "url": "https://wheelsrpgs.itch.io/wheeldle",
            "img": wheeldle,
            "desc": "Infinite plays with a Mario inspried visual"
        },
        {
            "name": "Word master",
            "url": "https://octokatherine.github.io/word-master/",
            "img": wordmaster,
            "desc": "Wordle but play as many times as you want"
        }
    ]
},
{
    "Joke Variants": [

        {
            "name": "Letterle",
            "url": "https://edjefferson.com/letterle/",
            "img": letterle,
            "desc": "Guess one letter in 26 guesses."
        },
        {
            "name": "Passwordle",
            "url": "https://rsk0315.github.io/playground/passwordle.html",
            "img": passwordle,
            "desc": "Receive hints based on the difference between SHA-256 hash of your guess and the hash of theanswer."
        },
        {
            "name": "Absurvivle",
            "url": "https://www.timblack.net/absurvivle/",
            "img": absurvivle,
            "desc": "A blend of Absurdle and Survivle. You are trying to not guess the secret word. But the computer can choose its word adversarially."
        },
    ]
}
]