const commentsRepository = require('../repositories/commentsRepository');
const postRepository = require('../repositories/postRepository');

class CommentsService {

    async createComment(postId, userId, content) {
        return await commentsRepository.createComment(postId, userId, content);
    }

    async getAllComments() {
        return await commentsRepository.getAllComments();
    }

    async getCommentById(commentId) {
        return await commentsRepository.getCommentById(commentId);
    }

    async updateComment(commentId, userId, content) {
        return await commentsRepository.updateComment(commentId, userId, content);
    }

    async checkCommentPermission(userId, comment, action) {
        if (action === 'delete') {
            const postUserId = await postRepository.getPostById(comment.postId.toString());
            return comment.userId.toString() === userId.toString() ||
                postUserId.author.toString() === userId.toString();
        }
        if (action === 'update') {
            return comment.userId._id.toString() === userId.toString();
        }
    }

    async deleteComment(commentId, userId) {
        return await commentsRepository.deleteComment(commentId, userId);
    }
}

module.exports = new CommentsService();
