const db = require("./database");
const etl = require("etl");
const util = require("util");

function productWrite() {
  let collection = db.then(function(db) {
    // return db.collection("products");
    return db.collection("productsTest");
  });

  etl
    // .file("../product.csv")
    .file("../test.csv")
    .pipe(etl.csv())
    .pipe(
      etl.map(function(line) {
        this.push({
          _id: Number(line.id),
          name: line.name,
          slogan: line.slogan,
          description: line.description,
          category: line.category,
          default_price: line.default_price.slice(1)
        });
      })
    )
    .pipe(etl.collect(10))
    .pipe(etl.mongo.insert(collection))
    .promise()
    .then(() => console.log("products1 done"));
}

function featuresWrite() {
  let collection = db.then(function(db) {
    // return db.collection("features");
    return db.collection("featuresTest");
  });

  etl
    // .file("../features.csv")
    .file("../test2.csv")
    .pipe(etl.csv())
    .pipe(
      etl.map(function(line) {
        this.push({
          _id: Number(line.feature_id),
          product_id: Number(line.product_id),
          feature: line.feature,
          value: line.value
        });
      })
    )
    .pipe(etl.collect(10))
    .pipe(etl.mongo.insert(collection))
    .promise()
    .then(() => console.log("features2 done"));
}

function stylesWrite() {
  let collection = db.then(function(db) {
    // return db.collection("styles");
    return db.collection("stylesTest");
  });

  etl
    // .file("../styles.csv")
    .file("../test3.csv")
    .pipe(etl.csv())
    .pipe(
      etl.map(function(line) {
        this.push({
          _id: Number(line.style_id),
          style_id: Number(line.style_id),
          product_id: Number(line.product_id),
          name: line.name,
          original_price: line.original_price,
          sale_price: line.sale_price === "null" ? "0" : line.sale_price,
          ["default?"]: Number(line.default_style)
        });
      })
    )
    .pipe(etl.collect(10))
    .pipe(etl.mongo.insert(collection))
    .promise()
    .then(() => console.log("styles3 done"));
}

function skusWrite() {
  let collection = db.then(function(db) {
    // return db.collection("skus");
    return db.collection("skusTest");
  });

  etl
    // .file("../skus.csv")
    .file("../test4.csv")
    .pipe(etl.csv())
    .pipe(
      etl.map(function(line) {
        this.push({
          _id: Number(line.skus_id),
          style_id: Number(line.style_id),
          size: line.size,
          quantity: Number(line.quantity)
        });
      })
    )
    .pipe(etl.collect(10))
    .pipe(etl.mongo.insert(collection))
    .promise()
    .then(() => console.log("skus4 done"));
}

function photosWrite() {
  let collection = db.then(function(db) {
    // return db.collection("photos");
    return db.collection("photosTest");
  });

  etl
    // .file("../photos.csv")
    .file("../test5.csv")
    .pipe(etl.csv())
    .pipe(
      etl.map(function(line) {
        this.push({
          style_id: Number(line.style_id),
          url: line.url,
          thumbnail_url: line.thumbnail_url
        });
      })
    )
    .pipe(etl.collect(10))
    .pipe(etl.mongo.insert(collection))
    .promise()
    .then(() => console.log("photos5 done"));
}

function relatedWrite() {
  let collection = db.then(function(db) {
    // return db.collection("related");
    return db.collection("relatedTest");
  });

  etl
    // .file("../related.csv")
    .file("../test6.csv")
    .pipe(etl.csv())
    .pipe(
      etl.map(function(line) {
        this.push({
          _id: Number(line.id),
          product_id: Number(line.product_id),
          related_product_id: Number(line.related_product_id)
        });
      })
    )
    .pipe(etl.collect(10))
    .pipe(etl.mongo.insert(collection))
    .promise()
    .then(() => console.log("related6 done"));
}

productWrite();
featuresWrite();
stylesWrite();
skusWrite();
photosWrite();
relatedWrite();
