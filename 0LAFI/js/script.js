// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Austrian male pregnancy",
					answer: "zivildienst",
					position: 1,
					orientation: "across",
					startx: 5,
					starty: 11
				},
			 	{
					clue: "City of Love",
					answer: "paris",
					position: 1,
					orientation: "down",
					startx: 10,
					starty: 14
				},
				{
					clue: "Nice to settle down",
					answer: "catan",
					position: 2,
					orientation: "across",
					startx: 17,
					starty: 6
				},
				{
					clue: "Not a president (last name)",
					answer: "hofer",
					position: 2,
					orientation: "down",
					startx: 2,
					starty: 14
				},
				{
					clue: "+6 points",
					answer: "touchdown",
					position: 3,
					orientation: "down",	
					startx: 15,
					starty: 11
				},
				{
					clue: "I like making touch downs (last name)",
					answer: "rice",
					position: 3,
					orientation: "across",
					startx: 17,
					starty: 8
				},
				{
					clue: "Word 1",
					answer: "codenames",
					position: 4,
					orientation: "across",
					startx: 12,
					starty: 3
				},
				{
					clue: "I play an unbreakable redhead",
					answer: "kemper",
					position: 4,
					orientation: "down",
					startx: 13,
					starty: 15
				},
				{
					clue: "French filling word",
					answer: "poutain",
					position: 5,
					orientation: "across",
					startx: 9,
					starty: 7
				},
				{
					clue: "Melanie + Sebastien",
					answer: "melafi",
					position: 5,
					orientation: "down",
					startx: 18,
					starty: 3
				},
				{
					clue: "2 fast 2 furious for politics (last name)",
					answer: "haider",
					position: 6,
					orientation: "across",
					startx: 7,
					starty: 9
				},
				{
					clue: "Kills an a-maze-ing monster and escapes",
					answer: "theseus",
					position: 7,
					orientation: "across",
					startx: 8,
					starty: 5
				},
				{
					clue: "Passt zum Kaffeetscherl",
					answer: "sachertorte",
					position: 6,
					orientation: "down",
					startx: 12,
					starty: 1
				},
				{
					clue: "Like a Pizza",
					answer: "pita",
					position: 7,
					orientation: "down",
					startx: 8,
					starty: 3
				},
				{
					clue: "Magic; <3 Italian food",
					answer: "garfield",
					position: 8,
					orientation: "across",
					startx: 8,
					starty: 16
				},
				{
					clue: "Hat ein heißes Ende",
					answer: "Gollum",
					position: 9,
					orientation: "across",
					startx: 1,
					starty: 15
				},
				{
					clue: "I like drawing ninjas (last name)",
					answer: "Kishimo",
					position: 8,
					orientation: "down",
					startx: 6,
					starty: 10
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
