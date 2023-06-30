class ReportService {
    constructor(postModel, commentModel, likeModel, postViewModel) {
        this.postModel = postModel;
        this.commentModel = commentModel;
        this.likeModel = likeModel;
        this.postViewModel = postViewModel;
    }

    async generateReport() {
        try {
            const posts = await this.postModel.find().lean();
            const report = [];

            for (const post of posts) {
                const commentCount = await this.commentModel.countDocuments({postId: post._id});
                const likes = await this.likeModel.countDocuments({postId: post._id, liked: true});
                const dislikes = await this.likeModel.countDocuments({postId: post._id, liked: false});
                const views = await this.postViewModel.countDocuments({postId: post._id});

                report.push({
                    title: post.title,
                    commentCount,
                    likes,
                    dislikes,
                    views,
                });
            }
            return report;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao gerar o relatório');
        }
    }
}

module.exports = ReportService;
