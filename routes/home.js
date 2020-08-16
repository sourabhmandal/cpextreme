const homepage = 
// define the about route
module.exports = {
  homepage: function (req, res) {
    res.send('site home page');
  },
  cft: function (req, res) {
    res.send('CFT page');
  },
};