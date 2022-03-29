const mysql=require('mysql');//importação do titulo MySQL

module.exports=function(){
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'ifms',
		database:'portal_noticias'
	});//cria conexão com o banco de dados portal_noticias;
}