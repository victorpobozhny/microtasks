import fetch from "node-fetch"

fetch("https://google.com/?query=js")
    .then((data)=>{
        console.log('data from google ' + data.url)
    })
export default '76'