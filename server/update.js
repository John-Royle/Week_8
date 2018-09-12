module.exports = function(app,db){

db.collection('products').update( { id: 2 }, {$set: { name: 'Shovel' }}, function(err, res){
  if (err) throw err;
  console.log("Product Updated");
});

};
