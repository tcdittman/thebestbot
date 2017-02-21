module.exports = function(robot) {
  robot.hear(/fizz/, function(res) {
     return res.send("buzz");
   });
};
