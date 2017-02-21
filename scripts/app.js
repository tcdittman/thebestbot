module.exports = function(robot) {
  robot.hear(/fizz/, function(res) {
     return res.send("buzz");
   });

  robot.hear(/what up?/, function(res) {
        return res.send("not much. just chillin");
   });

   robot.respond(/you are my best/, function(res) {
        return res.emote("v");
      });


};
/*
   robot.respond(/you are my best (.*)/i, function(res) {
     var relation;
     relation = res.match[1];
     if (relation === "friend") {
       return res.emote(happy);
     } else if (relation === "enemy") {
       return res.emote(sad);
     } else {
       return res.emote(blank);
     }
   });


   var lulz;
   lulz = ['lol', 'rofl', 'lmao'];

   return robot.respond(/lulz/i, function(res) {
     return res.send(res.random(lulz));
   });

};
*/
