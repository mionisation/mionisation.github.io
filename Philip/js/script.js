// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Not a real doctor",
					answer: "house",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "When George Clooney was giving a speech in Colorado, what was the nickname he received by the natives?",
					answer: "sparky",
					position: 2,
					orientation: "across",
					startx: 14,
					starty: 4
				},
				{
					clue: "What parody of a pokemon does one find occasionally on the wolfersberg?",
					answer: "shoe",
					position: 7,
					orientation: "across",
					startx: 10,
					starty: 5
				},
				{
					clue: "Troy is sooo childish...",
					answer: "gambino",
					position: 9,
					orientation: "across",
					startx: 2,
					starty: 6
				},
				{
					clue: "If jesus would go to a Disco, he would go to... (first word)",
					answer: "cross",
					position: 12,
					orientation: "across",
					startx: 1,
					starty: 8
				},
				{
					clue: "He defeats XXXXXXX (last name)",
					answer: "pilgrim",
					position: 13,
					orientation: "across",
					startx: 7,
					starty: 8
				},
				{
					clue: "Your princess is in another castle (Episode?)..",
					answer: "schmepisode",
					position: 15,
					orientation: "across",
					startx: 19,
					starty: 9
				},
				{
					clue: "Indian Spice",
					answer: "asant",
					position: 18,
					orientation: "across",
					startx: 4,
					starty: 10
				},
				{
					clue: "Another word for pot",
					answer: "saucepan",
					position: 20,
					orientation: "across",
					startx: 10,
					starty: 10
				},
				{
					clue: "Hey Duddits, whats your moms first name",
					answer: "roberta",
					position: 21,
					orientation: "across",
					startx: 24,
					starty: 11
				},
				{
					clue: "Who was shot by a well known candy wrapper?",
					answer: "eyewitness",
					position: 22,
					orientation: "across",
					startx: 13,
					starty: 13
				},
				{
					clue: "Allerseelen in Taiwan",
					answer: "qingming",
					position: 23,
					orientation: "across",
					startx: 23,
					starty: 14
				},
				{
					clue: "D. Trump verwendet regelmäßig einen Begriff, welcher seit den 1930ern als offene Unterstützung des Nationalsozialismus in Deutschland gilt. Der Vorfahren der Urhebers dieses Begriffes hätten Wiener sein können. Wer ist der Urheber?",
					answer: "hearst",
					position: 24,
					orientation: "across",
					startx: 16,
					starty: 17
				},
				{
					clue: "She will tear you apart...",
					answer: "lisa",
					position: 0,
					orientation: "down",
					startx: 16,
					starty: 1
				},
				{
					clue: "Colorful, few frequented Amsterdam",
					answer: "burano",
					position: 1,
					orientation: "down",
					startx: 3,
					starty: 3
				},
				{
					clue: "Old God",
					answer: "yogg-saron",
					position: 2,
					orientation: "down",
					startx: 19,
					starty: 4
				},
				{
					clue: "He goes toe to toe",
					answer: "goliath",
					position: 3,
					orientation: "down",
					startx: 8,
					starty: 5
				},
				{
					clue: "Two and a half men in Brno",
					answer: "oshikuru",
					position: 4,
					orientation: "down",
					startx: 12,
					starty: 5
				},
				{
					clue: "Where are you?",
					answer: "fine",
					position: 5,
					orientation: "down",
					startx: 23,
					starty: 6
				},
				{
					clue: "What was Christopher notoriously unable to see he was doing?",
					answer: "hypnotize",
					position: 6,
					orientation: "down",
					startx: 17,
					starty: 7
				},
				{
					clue: "Your favourite Song during vacation 2016 (third word)",
					answer: "love",
					position: 7,
					orientation: "down",
					startx: 27,
					starty: 8
				},
				{
					clue: "Welches nachgebaute alpendorf befindet sich in Asien?",
					answer: "hallstatt",
					position: 8,
					orientation: "down",
					startx: 21,
					starty: 9
				},
				{
					clue: "Very high building near Vienna",
					answer: "pyramide",
					position: 9,
					orientation: "down",
					startx: 24,
					starty: 9
				},
				{
					clue: "Hospitable German software",
					answer: "sap",
					position: 10,
					orientation: "down",
					startx: 5,
					starty: 10
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
