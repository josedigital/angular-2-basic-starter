class Greeter {
  saySomething (message: string = 'wuzzzup') {
    return message + ' something';
  }
}

var greeter = new Greeter();
greeter.saySomething