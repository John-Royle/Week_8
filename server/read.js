module.exports = function(app,db){
console.log("module");

db.collection('products').find({}).toArray(function(err, result){
  if (err) throw err;
  //console.log(db.collection('products'.find()));
  console.log(result);
});

};
