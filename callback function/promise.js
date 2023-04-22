let promise= new Promise((resolve,reject)=>{
    let grade="A";
    if (grade==="A"){
        resolve("the parent buys a bike for the kid");
    }
    else{
        reject("the parent doesn't buy the bike for the kid");
    }
})
promise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})