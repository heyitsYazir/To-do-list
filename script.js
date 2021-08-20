const btn=document.getElementById("btn")
const input=document.getElementById("input")
const result=document.getElementById("result")
btn.addEventListener("click",function(){
    const list=document.createElement("li")
    list.style.listStyle="roman"
    list.textContent=input.value
    result.append(list)
})