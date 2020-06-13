const express= require("express")

const server = express()

const db = require("./database/db")
//configurar pasta pulbica
server.use(express.static("public"))

//habilitar o uso do req.body na nossa apliacacao

server.use(express.urlencoded({extended: true}))

//utilizando templates engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express:server,
    noCache: true
})
//configurar caminhos da minha aplicacao

//pagina inicial
//req:requisicao
//res: resposta
server.get("/", (req,res) => {
return res.render("index.html",{title:"um titulo"})
})



server.get("/createpoint", (req,res) => {

  console.log(req.query)

//req.query:son loa query strings da nossa url

   return res.render("createpoint.html")





   
    })

    server.post("/savepoint", (req,res ) => {

      console.log(req.body)

   //req.body : o corpo do nosso formulario
   
      //inserir dados no banco de dados
      //consultar dados da tabela
const query =`

    INSERT INTO places (
    image,
     name,
        address,
        address2,
        state,
        city,
        items
         ) VALUES (?,?,?,?,?,?,?);
    
         `
//cada/strar uma entidade
    const values = [
         req.body.image,
         req.body.name,
         req.body.address,
         req.body.address2,
         req.body.state,
         req.body.city,
         req.body.items
   ]

//callback
    function afterInsertData(err){
        if(err){
        
           return res.send("Erro no cadastro")
       }
        console.log("cadastrado com sucesso")
        
        console.log(this)//this referencia um objeto que esta chamando a funcao e nao se usa com arrow function
       // funcao callback llame de volta
       return res.render("createpoint.html", {saved:true})
    }
    
   db.run(query, values, afterInsertData)





     
     
            
   


    })

    server.get("/search", (req,res) => {
    
      const search = req.query.search
      if(search =="" ){

        //pesquisas vazias
        return res.render("search-results.html", { total:0})

      }
        
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows){ 
    
    if(err){
        return console.log(err)
    }
   const total = rows.length

    return res.render("search-results.html", { places: rows, total:total})
 })

        
         })
//ligar o servidor

server.listen(3000)
