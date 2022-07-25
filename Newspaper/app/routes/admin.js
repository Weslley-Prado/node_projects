module.exports = function(application){
    application.get('/form_include_news', function(req, res){
        application.app.controllers.admin.form_include_news(application, req, res);
    })
    application.get('/news/save', function(req, res){
        application.app.controllers.admin.save_news(application, req, res);
    })
}