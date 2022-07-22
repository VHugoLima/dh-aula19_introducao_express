// Importando o Express para o projeto.
const  Express  =  require ( 'express' ) ;

// Inicializando o Express no projeto Nodejs.
const  Aplicativo  =  new  Express ( ) ;

// Disponibilizo o meu Recurso (Endpoint) via Http.
Aplicativo.get( '/',(RequisicaoCliente , RespostaServidor) =>  RespostaServidor.send ( " Hello World" ) ) ;

// Configura uma porta de acesso aos recursos do Express via Http.
Aplicativo.listen(1234 ,  ( )  =>  console.log(" Servidor Ok... "));