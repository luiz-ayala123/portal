module.exports=function(app){//exportação do app
//rota para a pagina do formulario de inclusao de noticias 
app.get('/formularioinclusaodenoticia',(req,res)=>{
	res.render('admin/form_add_noticia.ejs');//renderização da tela form_add_noticia.ejs
});
}