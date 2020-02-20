const { Product } = require("../../database");

module.exports.getProduct = id => Product.findById(id);
// module.exports.testPost = data => {
//   Product.create({
//     _id: data._id,
//     name: data.name,
//     slogan: data.slogan
//   })
//     .then(() => console.log("success"))
//     .catch(response => console.log(response));
// };
