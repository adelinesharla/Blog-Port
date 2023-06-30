const express = require('express');
const ReportController = require('../controllers/reportController');
const authMiddleware = require('../middlewares/authMiddleware');
const {Post, Like, PostView} = require('../models/postModel');
const Comment = require('../models/commentsModel');
const ReportService = require('../services/reportService');

class ReportRoutes {
    constructor() {
        this.router = express.Router();
        this.reportController = new ReportController(
            new ReportService(Post, Comment, Like, PostView)
        );
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(
            '/posts',
            authMiddleware,
            this.reportController.generateReport.bind(this.reportController)
        );
    }
}

module.exports = ReportRoutes;
