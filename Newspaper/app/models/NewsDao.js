class NewsDao {
    constructor(connection) {
        this._connection = connection;
    }
    getNews(callback) {
        this._connection.query('select * from news', callback);
    }
    saveNews(news, callback) {
        this._connection.query('insert into news set ?', news, callback);
    }
    getNews(callback){
        this._connection.query('select * from news where id_news = 2', callback);
    }
    
}
export default function(){
    return NewsDao;
}