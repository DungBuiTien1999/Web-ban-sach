module.exports = (app) => {
    app.use('/categories', require('../routes/category.route'));
    app.use('/products', require('../routes/product.route'));
};