export function form_include_news(application, req, res){
    res.render("admin/form_add_news", {validation: {}, news : {}});
}

export function save_news(application, req, res){
    const news = req.body;

    req.assert("Title", "You need write").notEmpty();
    req.assert("Resume", "Resume needs writed").notEmpty();
    req.assert("Author", "It needs to write the Author");
    req.assert("news_date", "Type the date").notEmpty().isDate({format: 'YYYY-MM-DD'});

    const err = req.validation.Errors();

    if(err){
        res.render("admin/form_add_news", {validation: err, news: news});
        return;
    }

    const connection = application.config.dbConnection();
    const newsModel = new application.app.models.NewsDao(connection);

    newsModel.saveNews(news, function(err, result){
        res.redirect('/news');
    })
}