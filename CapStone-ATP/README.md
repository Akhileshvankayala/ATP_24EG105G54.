1.generate package.json-npm init -y
2.create .env files-npm i dotenv
3.create express application and assign port number-npm i express
4.connect database-install mongoose
5.create schemas
    -userTypeSchema
        firstname
        lastName
        email(unique)
        password
        role
        profileImageURL
        isUserActive

    -articleSchema
        author
        title
        category
        content
        comments
        isArticleActive
6.implement APIs
    userAPI
    authorAPI
    adminAPI
7.create common api for register,login and logout


//200-success,if user created succesfully its 201
//201-successfully created
//all 400 series are client side problems
//400-bad request
//401-unauthorised
//404-not found
//all 500 series are server side problems
//500-server error

###frontend
dynamic,responsive user interface(UI==webpage-->Browser)
                            HTML
            CSS(styles,responsiveness)
provides latest info(javascript-react/angular/vue/nextjs)