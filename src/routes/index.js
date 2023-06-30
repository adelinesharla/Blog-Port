const express = require('express');
const UserRoutes = require('./userRoutes');
const PostRoutes = require('./postRoutes');
const CommentsRoutes = require('./commentsRoutes');
const ReportRoutes = require('./reportRoutes');

const router = express.Router();
const userRoutes = new UserRoutes().router;
const postRoutes = new PostRoutes().router;
const commentsRoutes = new CommentsRoutes().router;
const reportRoutes = new ReportRoutes().router;

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes);
router.use('/reports', reportRoutes);

module.exports = router;