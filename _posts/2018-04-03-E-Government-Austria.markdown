---
layout: post
title:  "How not to do E-Government - The 'Citizen Card' of Austria"
date:   2018-04-03 19:16:01
categories: blog
---

So a week ago I decided to get political - for the first time in almost 3 years - and to support a [referendum][dontsmoke] to uphold the smoking ban in Austria's restaurants. I used to smoke on and off for 3-4 years before giving up. That smoke is utterly disgusting in closed rooms, is a truth I always knew though. Anyway. I go to the local council and sign it. On the campaigns website, I notice I could have done this comfortably from home, by registering for a "Citizen Card" or a phone signature, which allows you to settle various formalities online. Nice! I am pretty late to the party anyway, the citizen card has been introduced already 15 years ago. I heard that the citizen card had its problems when it launched, but surely they must have fixed everything since then... right?

First things first, I need a card reader. They recommend buying one for 15 Euros from a "trusted" shop, or put a link to an alternative on a price comparison site. The model on that site is one of the most expensive you can find, for >50 Euros. I wonder why they want to make you buy from that specific shop? I found one (the Cherry 1300) on Amazon for 6 Euros.

It arrives, I look on the site for the drivers and install them, works fine.

I go to the Citizen card site. I want to register from home and receive a mail with the final activation code. First, I need to setup the 'Citizen Card environment', developed by the state. There are several providers, but only one, "Mocca", is available for Linux. I download the intallation file - or so I thought. It's a .jnlp file. Turns out this is a file that downloads the installation program itself. But I need a program to run it first. After some googling, I find an app and install it:
```
sudo apt-get install icedtea-netx
```
So I installed the program to finally be able to install the program. I run it, with:
```
javaws mocca.jnlp
```
 It crashes. There's some JWT error. The terminal tells me to run it with Java 1.6 - that's not gonna happen. After even more googling, I find another alternative. I type:

```
sudo apt-get install icedtea-plugin
```
I can execute it, it downloads the files. Cool. I need to install and approve a certificate for browsers. Easy. The app I installed runs this Mocca thing in the background. With this, I will be able to register on the site. I navigate there and it tries to start some Java Web App thing. They sure love Java in the Government. Chromium and Chrome will have none of that - looking at past security vulnerabilities, surely this wasn't the best way to proceed with this whole thing? In Firefox, it crashes. I am pissed off.

I repeat all the steps on Windows. It can run the jnlp file from the get-go, fortunately. This time, I use the kingslayer - Internet Explorer. I have to click away three security warnings before the Java App can launch in the browser. It loads... it loads... and then I get some cryptic Java runtime exception that I cannot inspect further.

I am even more pissed off. Who in the world thought this was a good idea? If you want to make a population change their ways, you have to make it as easy and as comfortably as possible for them. Who in the world looked at all this, at all the steps necessary for the setup, all the applications to install, and said: "Yup, this will change how the government works. This is the future."

It hurts to think the state paid millions in money and countless hours in manwork to create such a turd. Why didn't they bother looking at how other governments were doing these things at the time? The UK, for example, has an impressive history of e-Government. And then, the leading force and head of the certification authority in Austria who produced all this things, said in an interview how he doesn't understand the criticism. He said, the system works, they even sold it to Liechtenstein. To Liechtenstein! I am sad for these poor souls (all 37.666 of them).

There's no surprise the citizen card has been adopted by only 2.4% of the total population (Liechtenstein can be a considered a major win compared to this).

Ok. I liked the idea to have this card, but I made a mistake in ignoring the outdated approach behind it. It baffles me however, that they do not just completely revoke the citizen card for the failure it is, and still put it as a viable option for things like public petitions.

 Anyway, next try: Mobile phone signature. It seems you can do everything with it as with the card - and it makes sense! All the banks use this form of 2 factor authentication. For activating this one, you have to identify with your passport at a local post or council. Luckily, I already did this once before so I have an authorized online post account, so it only takes two clicks. However, if you have not done such a thing before, it will be another one-time annoyance. In order to avoid going to the council, *you have to go to the council first*.

Anyway, I'm waiting for my signature now, and then I will sign all the petitions there are. Hooray for direct democracy!


[dontsmoke]: https://dontsmoke.at/
