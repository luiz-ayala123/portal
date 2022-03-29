module.exports=function(app){//exportação do app
	//rota para a pagina de noticias
	app.get('/noticias',function(req,res){
		const dbConnection = require('../../config/dbConnection');//impotação do dbConnection
			const connection=dbConnection();
			connection.query('select * from noticias', function(error, result){
				if(error){
					console.log(error)
				};
				res.render('noticias/noticias.ejs', {noticias:result});//renderização da tela noticia.ejs passando pela variável result
			});

	});
}