'use strict';

var Deck = require('./deck.js')

class Hand extends Deck.DeckF {
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
    if (this.cards.length < this.limit) {
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

  // sorts the hand
  sort() {
    this.cards.sort();
  }

  // removes all cards from the player's hand
  clear() {
    this.cards = [];
  }
}

var myHand = new Hand([5, 3, 4, 1, 2]);
myHand.sort();
myHand.remove(2);
myHand.printCards();
