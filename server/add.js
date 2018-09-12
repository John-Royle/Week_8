module.exports = function(app,db){

db.collection('products').insert( [{ id: 1, name: "paint", price: 4.00, type: "white", description: "Fine white paint" },
{ id: 2, name: "hose", price: 3.00, type: "long", description: "Long hose" },
{ id: 3, name: "bucket", price: 2.00, type: "red", description: "Small red bucket" }], function(err, res){
  if (err) throw err;
  console.log("Three created");
});

};
