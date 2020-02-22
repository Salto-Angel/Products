const db = require("./database");
const etl = require("etl");

var collection = db.then(function(db) {
  return db.collection("product");
});

etl
  .file("../product.csv")
  .pipe(etl.csv())
  .pipe(
    etl.map(function(doc) {
      this.push({
        _id: Number(doc.id),
        name: doc[" name"],
        slogan: doc[" slogan"],
        description: doc[" description"],
        category: doc[" category"],
        default_price: doc[" default_price"].slice(1)
      });
    })
  )
  .pipe(etl.collect(10))
  .pipe(etl.mongo.insert(collection))
  .promise()
  .then(() => console.log("done"));
