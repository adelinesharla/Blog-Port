const commentsService = require('../services/commentsService');

class CommentsController {
    async createComment(req, res) {
        const {postId, content} = req.body;
        const userId = req.session.userId;

        try {
            const comment = await commentsService.createComment(
                postId,
                userId,
                content
            );
            res.json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao criar o comentário'});
        }
    }

    async getAllComments(req, res) {
        try {
            const comments = await commentsService.getAllComments();
            res.json(comments);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao obter os comentários'});
        }
    }

    async getCommentById(req, res) {
        const {commentId} = req.params;
        try {
            const comment = await commentsService.getCommentById(commentId);
            if (!comment) {
                return res.status(404).json({message: 'Comentário não encontrado'});
            }
            res.json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao obter o comentário'});
        }
    }

    async updateComment(req, res) {
        const {commentId} = req.params;
        const content = req.body;
        const userId = req.session.userId;

        try {
            const comment = await commentsService.getCommentById(commentId);
            if (!comment) {
                return res.status(404).json({message: 'Comentário não encontrado'});
            }
            const isOwner = await commentsService.checkCommentPermission(userId, comment, 'update');
            if (!isOwner) {
                return res.status(403).json({message: 'Você não tem permissão para atualizar este comentário'});
            }
            await commentsService.updateComment(
                commentId,
                userId,
                content
            );
            res.json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao atualizar o comentário'});
        }
    }

    async deleteComment(req, res) {
        const commentId = req.params.commentId;
        const userId = req.session.userId;

        try {
            const comment = await commentsService.getCommentById(commentId);
            if (!comment) {
                return res.status(404).json({message: 'Comentário não encontrado'});
            }
            const isOwner = await commentsService.checkCommentPermission(userId, comment, 'delete');
            if (!isOwner) {
                return res.status(403).json({message: 'Você não tem permissão para atualizar este comentário'});
            }
            await commentsService.deleteComment(
                commentId,
                userId
            );
            res.json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao excluir o comentário'});
        }
    }
}

module.exports = CommentsController;
