export default function(application){

    application.get('/newsMore', function(req, res){
        application.app.controllers.news.news(application, req, res);
    });
    application.get('/news', function(req, res){
        application.app.controllers.newsMore.news(application, req, res);
    })
}