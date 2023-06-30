const {Post, PostView, Like, PostHistory} = require('../models/postModel');

class PostRepository {
    async createPost(postData) {
        const post = new Post(postData);
        return await post.save();
    }

    async getAllPosts() {
        return await Post.find();
    }

    async getPostById(postId) {
        return await Post.findById(postId);
    }

    async updatePost(postId, postData) {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }

        const postHistory = new PostHistory({
            postId: post._id,
            content: post.content,
            title: post.title,
        });

        post.history.push(postHistory);

        for (const key in postData) {
            if (postData.hasOwnProperty(key)) {
                post[key] = postData[key];
            }
        }

        await Promise.all([post.save(), postHistory.save()]);

        return post;
    }

    async deletePost(postId) {
        return await Post.findByIdAndDelete(postId);
    }

    async createView(postId, ipAddress) {
        const newView = new PostView({
            postId,
            ipAddress,
        });

        return await newView.save();
    }

    async createLike(postId, liked) {
        const newLike = new Like({
            postId: postId,
            liked: liked,
        });

        return await newLike.save();
    }
}

module.exports = new PostRepository();
