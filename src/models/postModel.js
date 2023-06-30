const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    history: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PostHistory',
        },
    ],
    createdAt: {type: Date, default: Date.now},
});

const postHistorySchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const postViewSchema = new mongoose.Schema({
    postId: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    ipAddress: String,
    timestamp: {type: Date, default: Date.now},
});

const likeSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    liked: {
        type: Boolean,
        required: true,
    },
});

const Like = mongoose.model('Like', likeSchema);
const PostView = mongoose.model('PostView', postViewSchema);
const PostHistory = mongoose.model('PostHistory', postHistorySchema);
const Post = mongoose.model('Post', postSchema);

module.exports = {
    PostHistory,
    Post,
    PostView,
    Like,
};
