var speech = {
  hello: 'hi',
  bye : 'bye',
  sayBye: function() {
    console.log(this.bye);
  }
}

function next(sec) {
  console.log(this.hello);
  console.log('second argument: ' + sec);
  this.sayBye();
}

// following line of code will:
// run the 'next' function within the context of the speech object
next.call(speech, 'test2');
