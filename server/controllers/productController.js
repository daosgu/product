const productSch = require('../models/product.js')

module.exports = {
    newProduct: function(req, res){
        newProduct = new productSch.Product(req.body);
        // console.log("product ", newproduct);
        newProduct.save(function(err, datas){
            if(err)
                // res.json({error:'Something wrong in New in Controller', err});
                res.json(err);
            else
               res.json({message: "New product added.", datas: datas});
        })
    },


    allProducts: function(req, res){
        // console.log("Controller allproducts");
        productSch.Product.find(function(err, datas){
            if(err)
                res.json({error: "Something wrong in allproducts in Controller"})
            else
                res.json({datas: datas})

            // console.log(datas);
            
        })
    },


    showProduct: function(req, res){
        productSch.Product.findOne({_id: req.params.id}, function(err, datas){
            if(err)
                console.log(err.errors);
            else
                res.json({datas: datas})
        })
    },


    updateProduct: function(req, res){
        // console.log("PARAMS ",req.params);
        // console.log("BODY ", req.body);
        productSch.Product.updateOne({_id: req.params.id}, {$set: req.body}, function(err, datas) {
            if(err)
                res.json(err);
            else {
                if(datas.nModified > 0)
                    res.json({message: "Modified."})
                else{
                    res.json({message: "Value not found."})
                    console.log('Not Found!');
                }
            }
        })
    },


    deleteProduct: function(req, res){
        productSch.Product.deleteOne({_id: req.params.id}, function(err, datas){
            if(err)
                console.log(err.errors);
            else
                res.json({datas: datas})
        })
    },

}