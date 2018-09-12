module.exports = function(app,db){

db.collection('products').remove( { id: 1, name: "paint", price: 4.00, type: "white", description: "Fine white paint" }, function(err, res){
  if (err) throw err;
  console.log("Product Removed");
});

};
