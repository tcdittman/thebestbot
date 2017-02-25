module.exports = function(robot) {
  robot.hear(/fizz/, function(res) {
     return res.send("buzz");
   });

  robot.hear(/what up?/, function(res) {
        return res.send("not much. just chillin");
   });

   robot.respond(/peace/, function(res) {
        return res.send(:v:);
      });


   robot.respond(/you're my best (.*)/i, function(msg) {
      var relation;
      relation = msg.match[1];
      if (relation === "friend") {
          return msg.reply("Yay for friendship!");
        } else if (relation === "enemy") {
          return msg.reply("that's not nice");
        } else {
          return msg.reply("I don't understand. It's tough to be a robot :grimacing:");
        }
    });



};

/*
do someting with an array, conditional, for loop
*/
