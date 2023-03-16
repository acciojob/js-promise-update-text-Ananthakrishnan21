//your JS code here. If required.
function myPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello, world!")
        },1000)
    })
}
myPromise()
    .then(update)
    .catch((e)=>{console.log(e)})


function update(data){
    let ele=document.getElementById("output")
    ele.innerText=data
}
