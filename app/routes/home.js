module.exports=function(app){//exportação do app
//rota para a pagina principal
app.get('/', function(req,res){
	res.render('home/index.ejs');//renderização da tela index.ejs 
});
}