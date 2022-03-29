const app=require('./config/server');//impotação do modulo server
const rotaHome=require('./app/routes/home')(app);//importação e excução do rota principal
const rotaAdmin=require('./app/routes/admin')(app);//importação e excução da rota formulario
const rotaNoticias=require('./app/routes/noticias')(app);//importação e excução da rota noticias
//Cria um servidor rodando na porta 3000
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});