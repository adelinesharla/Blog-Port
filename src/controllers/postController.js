const upload = require('../middlewares/uploadMiddleware');
const postService = require('../services/postService');
const {PostView, Like} = require('../models/postModel');

class PostController {

    async createPost(req, res) {
        const {title, content} = req.body;

        try {
            const userId = req.session.userId;
            const postData = {
                title,
                content,
                author: userId,
            };

            const createdPost = await postService.createPost(postData);
            res.status(201).json(createdPost);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({message: 'Erro ao criar o post'});
        }
    }

    async getAllPosts(req, res) {
        try {
            const posts = await postService.getAllPosts();
            res.json(posts);
        } catch (error) {
            res.status(500).json({message: 'Erro ao obter os posts'});
        }
    }

    async getPostById(req, res) {
        const postId = req.params.id;

        try {
            const post = await postService.getPostById(postId);
            if (!post) {
                return res.status(404).json({message: 'Post não encontrado'});
            }
            res.json(post);
        } catch (error) {
            res.status(500).json({message: 'Erro ao obter o post'});
        }
    }

    async updatePost(req, res) {
        const postId = req.params.id;
        const postData = req.body;

        try {
            const userId = req.session.userId;
            const post = await postService.getPostById(postId);
            if (!post) {
                return res.status(404).json({message: 'Post não encontrado'});
            }
            const isOwner = await postService.checkPostOwnership(postId, userId);
            if (!isOwner) {
                return res
                    .status(403)
                    .json({message: 'Você não tem permissão para atualizar esta postagem'});
            }
            const updatedPost = await postService.updatePost(postId, postData);
            res.json(updatedPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao atualizar o post'});
        }
    }

    async addImageToPost(req, res) {
        const postId = req.params.id;

        try {
            const post = await postService.getPostById(postId);
            if (!post) {
                return res.status(404).json({message: 'Postagem não encontrada'});
            }

            upload.single('image')(req, res, async function (err) {
                if (err) {
                    console.error(err.message);
                    return res
                        .status(500)
                        .json({message: 'Erro ao adicionar a imagem à postagem'});
                }

                if (!req.file) {
                    return res.status(400).json({message: 'Nenhuma imagem foi enviada'});
                }

                post.image = 'https://blog.com/uploads/' + req.file.filename;

                await post.save();

                res.json({message: 'Imagem adicionada à postagem com sucesso'});
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao adicionar a imagem à postagem'});
        }
    }

    async deletePost(req, res) {
        const postId = req.params.id;
        try {
            const userId = req.session.userId;
            const post = await postService.getPostById(postId);
            console.log(post);
            if (!post) {
                return res.status(404).json({message: 'Post não encontrado'});
            }
            const isOwner = await postService.checkPostOwnership(postId, userId);
            if (!isOwner) {
                return res
                    .status(403)
                    .json({message: 'Você não tem permissão para atualizar esta postagem'});
            }
            await postService.deletePost(postId);
            res.json(post);
        } catch (error) {
            res.status(500).json({message: 'Erro ao deletar o post'});
        }
    }

    async viewPost(req, res) {
        const postId = req.params.id;
        const ipAddress = req.body.ipAddress;

        try {
            const post = await postService.getPostById(postId);
            if (!post) {
                return res.status(404).json({message: 'Postagem não encontrada'});
            }

            const newView = await postService.createView(postId,
                ipAddress);

            res.json(newView);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao registrar a visualização'});
        }
    }

    async updateLikes(req, res) {
        const postId = req.params.id;
        const liked = req.body.liked;

        try {
            const post = await postService.getPostById(postId);
            if (!post) {
                return res.status(404).json({message: 'Postagem não encontrada'});
            }

            const newLike = await postService.createLike(postId, liked);

            res.json(newLike);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao atualizar as curtidas'});
        }
    }
}

module.exports = PostController;
