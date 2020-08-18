module.exports = (app) => {
    app.use('/categories', require('../routes/category.route'));
};