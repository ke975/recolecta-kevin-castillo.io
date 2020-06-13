//importar a dependencia do  sqlite
//instalacion do sqlite3 npm install sqlite
//correr o sqlite node src/database/db.js

const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que ira fazer operacoes no   banco de dados

const db = new sqlite3.Database("./src/database/database.db")

//utilizar objeto de banco de dados 
module.exports = db// isto se usa pra exportar o banco de dados a nossa aplicacao
//db.serialize(() =>{
    // 1 criar uma tabela com comandos sql
// db.run(`
//CREATE TABLE IF NOT EXISTS places (
  // id INTEGER PRIMARY KEY AUTOINCREMENT,
   //image TEXT,
   //name TEXT,
   //address TEXT,
   //address2 TEXT,
   //state TEXT,
   //city TEXT,
   //items TEXT
//);

//`)
//consultar dados da tabela
//const query =`

  //  INSERT INTO places (
    //image,
     //  name,
        //address,
       // address2,
        //state,
        //city,
      //  items
        // ) VALUES (?,?,?,?,?,?,?);
    
         //`
//cada/strar uma entidade
    //const values = [
             
       // "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        //"papersider",
        //"Guilherme Gemballa,Jardim América",
        //"Numero 260",
        //"Santa catarina",
        //"Rio do Sul",
        //"residuos eletronicos"
    
   //]

//callback
    //function afterInsertData(err){
     //   if(err){
      //      return console.log(err)
       // }
        //console.log("cadastrado com sucesso")
        
       // console.log(this)//this referencia um objeto que esta chamando a funcao e nao se usa com arrow function
        //funcao callback llame de volta
   // }
    
  //  db.run(query, values, afterInsertData)


  //3 consultar dados na tabela

  //db.all(`SELECT * FROM places`, function(err,rows){ //selecionar todos los dados da tabela isso faz esta funcao
   // para trazer só um registro devemos colocar `SELECT name FROM places` osea o nome que tem a entidade
   // if(err){
        //return console.log(err)
  //  }
   // console.log("aqui estao seus registros ")
   // console.log(rows)
  //})

//4 deletar um dado da tabela 

//db.run(`DELETE FROM places WHERE id = ?`,[13],function(err){// para isso serve DELETE FROM places WHERE id =?deletar todos os dados da tabela //

//    if(err){
    //    return console.log(err)
  //  }
    //console.log("Registro")})


//})

 

