// import readline module from nodejs
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// create an object to hold answers to the survey
const a = {};

// output questions to console then log answers to the answer object
rl.question("What's your name? Nicknames are also acceptable :) ", answer => {
  a.name = answer;
  // automatically change to a new line and repeat the process
  rl.question("What's an activity you like doing? ", answer => {
    a.activity = answer;

    rl.question("What do you listen to while doing that? ", answer => {
      a.music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", answer => {
        a.meal = answer;

        rl.question("What's your favourite thing to eat for that meal? ", answer => {
          a.cuisine = answer;

          rl.question("Which sport is your absolute favourite? ", answer => {
            a.sport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", answer => {
              a.superpower = answer;
              // output the refined paragraph after the last question is output and answered
              rl.output.write(`${a.name} loves listening to ${a.music} while ${a.activity}, devouring ${a.cuisine} for ${a.meal}, prefers ${a.sport} over any other sport, and is amazing at ${a.superpower}.\n`);
              // end the API
              rl.close();
            });
          });
        });
      });
    });
  });
});