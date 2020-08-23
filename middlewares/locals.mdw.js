const categoryModel = require('../models/category.models');

module.exports = app => {
    app.use(async (req, res, next) => {
        const rows = await categoryModel.all();
        res.locals.lcCategories = rows;

        if (typeof (req.session.isAuthenticated) === 'undefined') {
          req.session.isAuthenticated = false;
        }
        res.locals.isAuthenticated = req.session.isAuthenticated;
        res.locals.authUser = req.session.authUser;
        res.locals.isAdmin = req.session.isAdmin;

        next();
      })
}