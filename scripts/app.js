// ==== Variables ==== //
// Buttons
const $feed = $('#feed_btn');
const $rest = $('#rest_btn');
const $play = $('#play_btn');

//Metrics Values
const $hunger = $('#hunger_value');
const $sleepiness = $('#sleepiness_value');
const $bordem = $('#bordem_value');
const $age = $('#age_value');

// Alive Variable
let alive = true;

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
    this.age++;
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
  if (pikachu.hunger > 0 && alive === true) {
    pikachu.feed();
    $hunger.text(pikachu.hunger);
  }
});

$rest.on('click', () => {
  if (pikachu.sleepiness > 0 && alive === true) {
    pikachu.rest();
    $sleepiness.text(pikachu.sleepiness);
  }
});

$play.on('click', () => {
  if (pikachu.bordem > 0 && alive === true) {
    pikachu.play();
    $bordem.text(pikachu.bordem);
  }
});

// ==== Game Timer ==== //
function runGame() {
  if (pikachu.hunger < 10 && pikachu.bordem < 10 && pikachu.sleepiness < 10) {
    pikachu.gamePlay();
    $hunger.text(pikachu.hunger);
    $sleepiness.text(pikachu.sleepiness);
    $bordem.text(pikachu.bordem);
    $age.text(pikachu.age);
    if (pikachu.age === 5) {
      $hunger.text('You win!');
      $sleepiness.text('You win!');
      $bordem.text('You win!');
      $age.text('You win!');
      alive = false;
      clearInterval(gameInterval);
    }
  } else if (pikachu.hunger === 10 || pikachu.bordem === 10 || pikachu.sleepiness === 10) {
    $hunger.text('You lose!');
    $sleepiness.text('You lose!');
    $bordem.text('You lose!');
    $age.text('You lose!');
    alive = false;
  } 
}

const gameInterval = setInterval(runGame, 1000);