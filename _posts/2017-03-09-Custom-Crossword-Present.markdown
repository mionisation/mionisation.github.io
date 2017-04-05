---
layout: post
title:  "Create custom, web-based, interactive crossword puzzles for your friends in no time!"
date:   2017-03-09 20:12:01
categories: blog
---

![Example Crossword using the Qurossword Project by J.Weisbeck]({{ "img/crossword/crossword.png" | absolute_url }})
So this year, I wanted to give my best friends a special gift - or better said, I wanted to give them my gifts in a special manner. So instead of just handing them a well-thought-out gift, I made a crossword puzzle for them to solve before allowing them to unravel their gifts. The clues consisted of funny memorabilia, quotes, events and other random things that were in some way connected to my friends or my friendship to them. I will show you how you can make a similar one in no time! Your friends, family or lovers will love it. In the digital present, nothing is as real as a digital present!

## 1. Get your clues together

Think of some awesome clues! In the best case, those reflect your relation to the person for who this crossword is for, but using their favourite movies, books or bands can be a fantastic source as well!

## 2. Generate a crossword

Sure, you can now just layout your puzzle on your own, however you see fit. But I will just use one of the numerous crossword generators on the internet... Those sites have some irritating limitations (they want to make you pay for unnecessary downloads or someting), but remember, we only want the layout for our crossword out of this.

The one I used is [Puzzle-Maker][puzzle], as it doesn't limit the number of clues you can use and typing your clues in is pretty neat: Just your solution word and the clue (which can be as long as you wish), separated by a slash. No [unnecessary form][bad2] or [restricting format][bad].

Okay, fill in your clues and generate your puzzle! You know should have a picture of the crossword of your dreams. In the next step, we will make it interactive!

[puzzle]: http://www.puzzle-maker.com/CW/
[bad]: https://crosswordlabs.com/
[bad2]: https://worksheets.theteacherscorner.net/make-your-own/crossword/

## 3. Fill layout information into crossword app's json file

For building the crossword in the browser, we will build on the fantastic ["Qurossword"][orig] jquery plugin, developed by J. Weisbeck. Basically, we will just edit one file in this whole project (with our clues and the relative positions) and the scripts will take care of the rest. I did a fork of this project to add a crazy final screen when someone completes the crossword, which you can find [here][rave].

You can add clues as follows: Open the file `script.js` in the folder `js`. You will see an array containing this array:

{% highlight javascript %}
var puzzleData = [
    {
      clue: "First letter of greek alphabet",
      answer: "alpha",
      position: 1,
      orientation: "across",
      startx: 1,
      starty: 1
    },...
{% endhighlight %}

Just modify this array so it contains one entry for each clue you have. Per clue, you have to specify if the clue goes "across" or "down", and where the position of the first box is. Btw, we deal here with screen coordinates, so the origin here is on the top left with startx = starty = 1. If you fill this information correctly, your clues should interlock nicely with each other.

If you downloaded my version with the crazy final screen, you also need to change a little detail. Open the file `jquery.crossword.js` and look for this part:

{% highlight javascript %}
// FILL IN HERE - put here the amount
// of character fields to trigger the win screen!
var wordsLength = 9;
{% endhighlight %}

You need to change the value of wordsLength to the number of blanks that you have in your crossword in order to trigger the winning screen (so the length of all your clue words minus intersections).

That's it! Now you can upload the whole folder to your website, and if someone goes to this folder, they get redirected instantly to the `index.html` page (which you also can edit to customise the final message). If you don't have a webpage, just make a quick and easy one with [github pages and jekyll][github]!

[github]: https://help.github.com/articles/about-github-pages-and-jekyll/
[orig]: https://github.com/jweisbeck/Crossword
[rave]: https://github.com/mionisation/Crossword
