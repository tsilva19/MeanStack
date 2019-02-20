

module.exports = function(app){

 var api = app.api.foto;

app.route('/v1/fotos') 
app.get(api.lista)
app.post(api.adiciona);

app.route('/v1/fotos/:id')
   .get(api.buscaId)
   .delete(api.removeId);


};