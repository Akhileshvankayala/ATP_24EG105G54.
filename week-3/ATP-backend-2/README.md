1.generate package.json
2.create express server
3.instal mongoose and connect to mongodb server
        REST API ---Mongodb native driver ->DB server
        REST API ---Mongoose ODM tool ->DB server
        ODM tool-js object will be mapped to mongodb document
        (object document mapping)
4.build user api-resource is user
        create user-POST
        read all user-GET
        read user by id-GET
        update user by id-PUT
        delete user by id-DELETE
5.create schema and model ofthe resource(user)
(models folder contains schemas tooo...so no seperate folder for schemas)
6.define routes
7.create userAPI and define routes


->handling unavailable resources-using if else or return keyword
->validators during update-by setting runValidators:true
->hashing password-bcryptjs
->unique fields
->refined version of error handling middleware

//200-success,if user created succesfully its 201
//201-successfully created
//all 400 series are client side problems
//400-bad request
//401-unauthorised
//404-not found
//all 500 series are server side problems
//500-server error


---------------
task:
#Create Product REST API with below features
1.Product document structure-validation(product model)
     a.productId (required)
     b.productName(required)
     c.price(required, min price 10000 and max price 50000)
     d.brand(required)
2.REST API with below operations(product api)
     a. Create product
     b. Read all products
     c. Read a product by productId
     d. Update a product by productId
     e. Delete a product by productId

-------------
##user authentication(login)
        -submit credentials and get token
        
        req-->middleware--->protected routes
        
        -every backend consists of public routes(by anyone) and protected routes(by authenticated users only)
attacks on data:
xss-cross side scripting attack
csrf-
when we store the data in the cookie in the form of http,browser cannot read it
----------
make the following routes protected
        -read User and products
        -read User and product by id
        -Updsate User & Product
        -Deleted User & Product
