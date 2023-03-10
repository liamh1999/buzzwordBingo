# Buzzword Bingo Coding Challenge

Welcome at _azeti_, and thank you very much for taking the time to participate in this
challenge!

In this repository, you will find the boilerplate code for a simple game. You task is the completion of the boilerplate code into a playable game.

We'll explain the game rules a bit below after some words of introduction.


## Logistics and Expectations

We know that you'd be using your precious free time to work on this challenge
and therefore, we want to set clear expectations to ensure that your time is
spent reasonably, and to avoid that, you waste or invest too much of it.
Again we appreciate your participation.

__How much time should I spend?__

_A reasonable amount of time is a couple of hours, if you are aware of the
technologies, we guess you would be able to complete this in less than
2 hours._

__How do we evaluate the results?__

_We will not grade or evaluate based on quantity but on quality. Apart from
implementing the asked stuff, feel free to add any comments or remarks that
you may find relevant._

__How can I submit my results?__

_First, copy this repository to your GitHub, GitLab, Bitbucket, or any other
git repository. Secondly, commit your code to it and share the link to your
repository with us. Make sure we can read your repository. We will then review your code._

__How much time do I have to complete this challenge?__

_You will have a maximum of 1 week after receiving this challenge.
Again, take the quality into consideration, don't rush!_


## Buzzword Bingo Game Rules

We first describe the game from the user's point of view.

The playing surface consists of 5 by 5 squares. All squares are filled with a word at the beginning of the game. No word appears twice on the board. All squares have colour#0.

The player now attentively participates in a meeting. Whenever he hears a word that appears on his playing field, he may click on this square. The corresponding field changes its colour to colour#1.

As soon as the player has clicked all the squares in a column, all the squares in a row or all the squares in one of the two main diagonals, the colour of the squares concerned changes to colour#2.
In this case, the player may shout "Bingo" loudly into the meeting.

If other players in the same meeting play the game, the player who shouts "Bingo" first wins.

## How to implement the game?

### The Boilerplate code

To keep the effort within limits, we have already created a basic framework.
This boilerplate code was created using 

    npx create-react-app

and extended by including 

    mui/material

When you checkout this repo and run 

    npm install

and afterwards

    npm run

your browser should start up. If not, please goto

    localhost:3000

You should then see a basic playground like this:

![](docs/boilerplate.png)

The boilerplate code already reacts to click events. That means if you click a square it will change the color from white to blue. But not more.

⚠️ The please mind that the code already contains a dictionary in the file `Dictionary.js`.

### What should you do?

In short: __Extend the boilerplate code in a way that the game gets playable according to the given rules above.__

You're free to change the boilerplate code to your needs!


### Here are our acceptance criteria:

* You should stick to the given base framework of Javascript, React and Material-UI.

* The game must compile without errors and fully playable.

* The given word list shall be used.

* When the game is over ("Bingo" state), the buttons shall be no longer clickable.

* You should add a button that can restart the game at any given time.

### Here is what we don't expect:

* Don't write exhaustive documentation. But if extra knowledge is required to compile and start your code than please let us know.

* Don't waste your time on extensive comments in the code. Only comment if you think it's strictly requried.

* Effects, animations, sounds, graphics, CSS are all nice. But we don't want to steal your precious time. So please don't waste time on this.

* And for sure no backend is expected.

Don't hesitate to contact us in case of any questions!









