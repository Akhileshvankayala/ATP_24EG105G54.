//fetch("https://dummy-json.mock.beeceptor.com/posts").then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))

async function fetechtryNewMethod(){
    try{
    let res=await fetch("https://dummy-json.mock.beeceptor.com/posts")
    let res1=await res.json()
    console.log(res1)
    }catch(err){
        console.log(err)
    }
}
fetechtryNewMethod()