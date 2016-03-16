'use strict';

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  /**
  *  shuffles the cards in the deck
  */
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      let currCard = this.cards[i];
      let switchIndex = Math.floor((Math.random() * this.cards.length) + 0);
      this.cards[i] = this.cards[switchIndex];
      this.cards[switchIndex] = currCard;
    }
  }

  /**
  * returns the card from the top of the deck
  *
  * @return {Integer}
  */
  deal() {
    if (this.cards.length > 0) {
      return this.cards.shift();
    } else {
      console.log('The deck is out of cards to deal!');
    }
  }

  /**
  * returns true if the deck contains a card, false otherwise
  *
  * @param {Integer} card
  * @return {Boolean}
  */
  contains(card) {
    return this.cards.indexOf(card) > - 1;
  }

  /**
  * prints the cards of the deck
  */
  printCards() {
    console.log(this.cards);
  }
}

class Hand extends Deck {
  constructor(cards, limit) {
    super(cards);
    this.limit = limit; // max number of cards a player can have at one moment
  }

  /**
  * adds a card to the player's hand
  *
  * @param {Integer} card
  */
  add(card) {
    if (this.cards.length < 12) {
      this.cards.push(card);
    } else {
      console.log('You cannot add another card to your hand.');
    }
  }

  /**
  * removes a card from the players hand
  *
  * @param {Integer} card
  */
  remove(card) {
    if (super.contains(card)) {
      this.cards.splice(this.cards.indexOf(card), 1);
    } else {
      console.log('Card is not in deck.');
    }
  }

  /**
  * sorts the hand
  */
  sort() {
    this.cards.sort();
  }

  /**
  * removes all cards from the player's hand
  */
  clear() {
    this.cards = [];
  }
}

let cards = [];
for (let i = 0;  i < 2; i++) {
  cards[i] = i + 1;
}
var currDeck = new Deck(cards);

let cardsInHand = [1, 2, 3, 4, 5];
let currHand = new Hand(cardsInHand, 12);
currHand.remove(2);
currHand.shuffle(); // accesses the class Deck's shuffle() method
currHand.printCards();
