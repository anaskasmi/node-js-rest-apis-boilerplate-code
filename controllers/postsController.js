//models
const Post = require('../models/Post');

exports.getAllPosts = async(req, res) => {
    try {
        let posts = await Post.find();
        res.status(200).json(posts)

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

exports.getPostById = async(req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        if (post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({ "message": "not found" })
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }
}


exports.deletePostById = async(req, res) => {
    try {
        let post = await Post.findByIdAndDelete(req.params.id);
        if (post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({ "message": "not found" })
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }
}


exports.updatePostById = async(req, res) => {
    try {
        let post = await Post.findByIdAndUpdate(req.params.id, {
            $set: { title: req.body.title, description: req.body.description }
        });
        if (post) {
            res.status(200).json({ message: 'updated successfully' })
        } else {
            res.status(404).json({ "message": "not found" })
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }
}


exports.savePost = async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        let data = await post.save();
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({ error: error })
        console.log(error);
    }



}