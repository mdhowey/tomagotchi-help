// ==== Variables ==== //
// Buttons
const $feed = $('#feed_btn');
const $rest = $('#rest_btn');
const $play = $('#play_btn');

//Metrics Values
const $hunger = $('#hunger_value');
const $sleepiness = $('#sleepiness_value');
const $bordem = $('#bordem_value');

// ==== Tomagotchi Class Definition ==== //
class Tomagotchi {
  // create a new instance of the Tomagotchi class --> make a new Tomagotchi object
  // //TODO: Change the default values back to 0
  constructor(name, hunger = 0, sleepiness = 0, bordem = 0, age = 0) {
    this.name = name;
    this.hunger = hunger;
    this.bordem = bordem;
    this.sleepiness = sleepiness;
    this.age = age;
  }

  // increment the hunger, sleepiness, bordem values for Tomagotchi
  gamePlay() {
    this.hunger++;
    this.bordem++;
    this.sleepiness++;
  }

  // increment the age of the Tomagotchi
  growUp() {
    this.age++;
  }

  // decrement the hunger of the Tomagotchi
  feed() {
    this.hunger--;
  }
  // decrement the sleepiness of the Tomagotchi
  rest() {
    this.sleepiness--;
  }
  // decrement the bordem of the Tomagotchi
  play() {
    this.bordem--;
  }
}

// ==== Pikachu Tomagotchi Instance ==== //
let pikachu = new Tomagotchi('Pikachu');

// ==== Button Event Listeners ==== //
$feed.on('click', () => {
  pikachu.feed();
  $hunger.text(pikachu.hunger);
});

$rest.on('click', () => {
  pikachu.rest();
  $sleepiness.text(pikachu.sleepiness);
});

$play.on('click', () => {
  pikachu.play();
  $bordem.text(pikachu.bordem);
});

// ==== Timers ==== //
