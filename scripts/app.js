// ==== Variables ==== //
// Buttons
const $feed = $('#feed_btn');
const $rest = $('#rest_btn');
const $play = $('#play_btn');
const $start = $('#start_btn')
const $reset = $('#reset_btn');

//Metrics Values
const $hunger = $('#hunger_value');
const $sleepiness = $('#sleepiness_value');
const $bordem = $('#bordem_value');
const $age = $('#age_value');
const $winText = $('#win_text');

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

$start.on('click', () => {
  
});

$reset.on('click', () => {
  pikachu.hunger = -1;
  pikachu.bordem = -1;
  pikachu.sleepiness = -1;
  pikachu.age = -1;
});

// ==== Game Timer ==== //
const gameInterval = setInterval(runGame, 1000);

function runGame() {
  if (pikachu.hunger < 10 && pikachu.bordem < 10 && pikachu.sleepiness < 10) {
    pikachu.gamePlay();
    $hunger.text(pikachu.hunger);
    $sleepiness.text(pikachu.sleepiness);
    $bordem.text(pikachu.bordem);
    $age.text(pikachu.age);
    if (pikachu.age === 15) {
      $hunger.empty();
      $sleepiness.empty();
      $bordem.empty();
      $age.empty();
      alive = false;
      $winText.text('You won the best game ever!')
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