
var api = {};

var fotos = [ 
    {_id: 1, titulo: 'Leao', url:'http://www.fundosanimais.com/Minis/leoes.jpg'},
    {_id: 1, titulo: 'Leao 2 ', url:'http://www.fundosanimais.com/Minis/leoes.jpg'},
    
];

api.lista = function(req, res){


       res.json(fotos);  
      
     };

api.buscaId = function(req,res){

     var foto = fotos.find(function(foto){

        return foto._id = req.params.id;
    });

    res.json(foto);
};
 

api.removeId = function(req, res){
   
   fotos =  fotos.filter(function(foto){

      return foto._id != req.params.id;

    });

    res.sendStatus(204);
};

module.exports = api;