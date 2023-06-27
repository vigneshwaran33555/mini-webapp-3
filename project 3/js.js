const buton=document.getElementById("click")
let wrap=document.getElementById("warp")
buton.addEventListener('click',
function(){
    let str=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
let str1="#"
for (let i = 0; i <6; i++) {
  let str2= str[ Math.floor(Math.random()*15)]
    str1=str1+str2
    
}wrap.style.background=str1
})
