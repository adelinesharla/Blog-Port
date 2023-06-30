class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }

    async generateReport(req, res) {
        try {
            const report = await this.reportService.generateReport();
            res.json(report);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Erro ao gerar o relatório no controller'});
        }
    }
}

module.exports = ReportController;
