function showloading(){
    console.log("1.Loading screen Appeared");
}
function hideloading(){
    console.log("4.Load Screen Hidden");
}
function getdata(callback){
    console.log("2,start pullimg data");
    setTimeout(()=>{
        console.log("3.finnished pulling data");
        callback();
    },2000);
}
