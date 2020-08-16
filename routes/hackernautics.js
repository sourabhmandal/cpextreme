const Post = require('../models/Posts.js')

module.exports = {
    homepage: function (req, res) {
        Post.find()
        .sort({date : -1})
        .then(post => res.json(post));
    },
    networkhome: function (req, res) {
        res.send('Networking page');
    },
    ctfhome: function (req, res) {
        res.send('CFT page');
    },
};