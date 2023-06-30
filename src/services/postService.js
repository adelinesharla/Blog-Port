const postRepository = require('../repositories/postRepository');

class PostService {
    async checkPostOwnership(postId, userId) {
        const post = await postRepository.getPostById(postId);
        return post && post.author._id.toString() === userId.toString();
    }

    async createPost(postData) {
        return await postRepository.createPost(postData);
    }

    async getAllPosts() {
        return await postRepository.getAllPosts();
    }

    async getPostById(postId) {
        return await postRepository.getPostById(postId);
    }

    async updatePost(postId, postData) {
        return await postRepository.updatePost(postId, postData);
    }

    async deletePost(postId) {
        return await postRepository.deletePost(postId);
    }

    async createView(postId, ipAddress) {
        return await postRepository.createView(postId, ipAddress);
    }

    async createLike(postId, liked){
        return await postRepository.createLike(postId, liked);
    }
}

module.exports = new PostService();
