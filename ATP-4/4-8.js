//examples of promises
    //make API requests
    //promise consumer
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>{console.log("err is",err)})//fetch is the promise creator

    //Hash a password
    //user authentication-creating tokens
    //Database/http libraries
    //file & Stream APIs
