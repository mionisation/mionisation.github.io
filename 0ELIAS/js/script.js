// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Magenputzer aus dem Balkan",
					answer: "rakia",
					position: 1,
					orientation: "across",
					startx: 7,
					starty: 2
				},
			 	{
					clue: " like a fox / died too early",
					answer: "falco",
					position: 1,
					orientation: "down",
					startx: 11,
					starty: 1
				},
				{
					clue: "natural water storage, tastes like earth, green, (singular)",
					answer: "cactus",
					position: 2,
					orientation: "across",
					startx: 9,
					starty: 4
				},
				{
					clue: "Not a president (last name)",
					answer: "hofer",
					position: 2,
					orientation: "across",
					startx: 4,
					starty: 5
				},
				{
					clue: "great movie (you wouldn't agree)",
					answer: "shining",
					position: 3,
					orientation: "down",	
					startx: 19,
					starty: 1
				},
				{
					clue: "10$ (last name)",
					answer: "hamilton",
					position: 3,
					orientation: "across",
					startx: 12,
					starty: 6
				},
				{
					clue: " immortal (first name)",
					answer: "kenny",
					position: 4,
					orientation: "across",
					startx: 13,
					starty: 8
				},
				{
					clue: "like DEATH, but younger",
					answer: "mort",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 4
				},
				{
					clue: "+2, defense ",
					answer: "interception",
					position: 5,
					orientation: "across",
					startx: 5,
					starty: 10
				},
				{
					clue: "GAAAAYYYYY!",
					answer: "respect",
					position: 5,
					orientation: "down",
					startx: 7,
					starty: 4
				},
				{
					clue: "one of the two things in las vegas",
					answer: "loathing",
					position: 6,
					orientation: "across",
					startx: 7,
					starty: 12
				},
				{
					clue: "Clue 1",
					answer: "codenames",
					position: 7,
					orientation: "across",
					startx: 3,
					starty: 14
				},
				{
					clue: "rhymes with simmering",
					answer: "semmering",
					position: 6,
					orientation: "down",
					startx: 14,
					starty: 4
				},
				{
					clue: "boxing 'legend' (last name) / cat ",
					answer: "tiger",
					position: 7,
					orientation: "down",
					startx: 9,
					starty: 6
				},
				{
					clue: " juicy ice cream",
					answer: "sorbet",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 16
				},
				{
					clue: " like badminton with less constructions",
					answer: "crossminton",
					position: 9,
					orientation: "across",
					startx: 2,
					starty: 18
				},
				{
					clue: "austrian male pregnancy",
					answer: "zivildienst",
					position: 8,
					orientation: "down",
					startx: 5,
					starty: 9
				},
				{
					clue: "ma and pa",
					answer: "moo",
					position: 8,
					orientation: "down",
					startx: 11,
					starty: 16
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
