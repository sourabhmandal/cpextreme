const Post = require('../models/Posts.js')

module.exports = {
    admin_home: function (req, res) {
      Post.find()
        .sort({date : -1})
        .then(post => res.json(post));
    },

    admin_addpost: function (req, res) {
        const newPost = new Post({
            title: req.body.title,
            tags: req.body.tags,
            author: req.body.author,
            content: req.body.content
        });

        newPost.save()
            .then(post => res.json(post))
    },

    admin_deletepost: function (req, res) {
        Post.findByIdAndDelete(req.params.id)
            .then(post => res.json({"Post deleted" : "true"}))
            .catch(err => res.status(404).json({"Post deleted" : "false"}));
    },

    admin_updatepost: function (req, res) {
        Post.findByIdAndUpdate(req.params.id)
            .then(post => res.json({"Post Updated" : "true"}))
            .catch(err => res.status(404).json({"Post Updated" : "false"}));
    }
};