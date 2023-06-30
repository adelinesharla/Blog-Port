const Comment = require('../models/commentsModel');

class CommentsRepository {
    async createComment(postId, userId, content) {
        const comment = new Comment({
            postId,
            userId,
            content,
        });
        await comment.save();
        return comment;
    }

    async getAllComments() {
        const comments = await Comment.find();
        return comments;
    }

    async getCommentById(commentId) {
        const comment = await Comment.findById(commentId);
        return comment;
    }

    async updateComment(commentId, content) {
        return await Comment.findByIdAndUpdate(commentId, content, {new: true});
    }

    async deleteComment(commentId, userId) {
        return await Comment.findByIdAndDelete(commentId);
    }
}

module.exports = new CommentsRepository();
