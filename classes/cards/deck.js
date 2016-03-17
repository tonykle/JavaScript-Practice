'use strict';

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  // shuffles the cards in the deck
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

  // prints the cards of the deck
  printCards() {
    console.log(this.cards);
  }
}

module.exports.DeckF = Deck;
