const controller = require('../controllers/productController.js')

module.exports = function(app){
    app.post("/newProduct", function(req, res){
        controller.newProduct(req, res);
    });


    app.get("/allProducts", function(req, res){
        controller.allProducts(req, res);
    });

    
    app.get('/edit/:id', function(req, res){
        controller.showProduct(req, res);
    });


    app.post("/edit/product/:id", function(req, res){
        controller.updateProduct(req, res);
    });


    app.delete('/delete/:id', function(req, res){
        controller.deleteProduct(req, res);
    });
}