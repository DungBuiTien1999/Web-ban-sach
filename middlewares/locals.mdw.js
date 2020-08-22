const categoryModel = require('../models/category.models');

module.exports = app => {
    app.use(async (req, res, next) => {
        const rows = await categoryModel.all();
        res.locals.lcCategories = rows;
        next();
      })
}