var config = {

  scene: {
      create: create
  }
};


var text;
var timedEvent;

var game = new Phaser.Game(config);

function create ()
{
  console.log('create');
  // 2:30 in seconds
  this.initialTime = 60;

  text = this.add.text(32, 32, 'Day: ' + formatTime(this.initialTime));

  // Each 1000 ms call onEvent
  timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
}

function formatTime(seconds){

  var minutes = Math.floor(seconds/60);

  var partInSeconds = seconds%60;

  partInSeconds = partInSeconds.toString().padStart(2,'0');

  return `${minutes}`;
}

function consoleTime(seconds)
{
  var minutes = Math.floor(seconds/60);

  var partInSeconds = seconds%60;

  partInSeconds = partInSeconds.toString().padStart(2,'0');

  return `${minutes}:${partInSeconds}`;

}


function onEvent ()
{
  this.initialTime += 1; // One second
  text.setText('Day: ' + formatTime(this.initialTime));
  console.log(consoleTime(this.initialTime))
}

  