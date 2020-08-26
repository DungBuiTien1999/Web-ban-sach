module.exports = (app) => {
    app.use('/categories', require('../routes/category.route'));
    app.use('/products', require('../routes/product.route'));
    app.use('/account', require('../routes/account.route'));
    app.use('/admin', require('../routes/admin.route'));
    app.use('/cart', require('../routes/cart.route'));
};