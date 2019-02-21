
module.exports = function(uri){

    var mongoose = require('mongoose');

mongoose.connect('mongodb://'+ uri);

mongoose.connection.on('connected', function(){
    console.log('Conectado ao MongoDB');
});

mongoose.connection.on('error', function(error){
    console.log('Erro na Conexao: '+error);
});

mongoose.connection.on('disconnect', function(){
    console.log('Desconectado do MonGoDB');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
            console.log('Conexao fechada pelo terrmino da aplicação');
            process.exit(0);
    });
})

}
