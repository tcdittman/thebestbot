module.exports = function(robot) {
  robot.hear(/fizz/, function(res) {
     return res.send("buzz");
   });

  robot.hear(/what up/, function(res) {
        return res.send("not much. just chillin");
   });

  robot.respond(/you're my best (.*)/i, function(msg) {
      var relation = msg.match[1];
      if (relation === "friend") {
          return msg.reply("Yay for friendship!");
        } else if (relation === "enemy") {
          return msg.reply("I'm sorry you feel that way.");
        } else {
          return msg.reply("I don't understand. It's tough to be a robot +:grimacing");
        }
    });

    robot.hear(/8ball/, function(res) {
        var answers = [
          "It is certain",
          "It is decidedly so",
          "Without a doubt",
          "Yes, definitely",
          "You may rely on it",
          "As I see it, yes",
          "Most likely",
          "Outlook good",
          "Yes",
          "Signs point to yes",
          "Reply hazy try again",
          "Ask again later",
          "Better not tell you now",
          "Cannot predict now",
          "Concentrate and ask again",
          "Don't count on it",
          "My reply is no",
          "My sources say no",
          "Outlook not so good",
          "Very doubtful"
        ];
        var i = Math.floor(Math.random()*answers.length)
        return res.send(answers[i]);
      });


      robot.respond(/count to (.*)/i, function(msg) {
          var top;
          var top = parseInt(msg.match[1]);
          for (let i = 1; i < 9; i++){
            return msg.reply(i);
            }
          });

};

/*
do someting with an array, conditional, for loop
*/
