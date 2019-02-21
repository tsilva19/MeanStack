var mongoose = require('mongoose');
var api = {};



api.lista = function(req, res){

    var model = mongoose.model('Foto');
    
    model
         .find({})
         .then(function(fotos){
          res.json(fotos);
         }, function(error){
           console.log(error);
           res.status(500).json(error);
         });
};

api.buscaId = function(req,res){


};
 

api.removeId = function(req, res){
   

};
api.adiciona = function(req, res){
   
}

api.atualiza = function(req, res){
  
 
  };

  
module.exports = api;