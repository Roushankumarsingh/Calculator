// let buttons = document.querySelectorAll(".button") ; 
// let str = "" ; 
// let arr = Array.from(buttons) ; 
// let screen = document.querySelector(".screen") ; 
// arr.forEach((button) =>
// {
//     button.addEventListener("click" ,(e)=>
//     {
//         if(e.target.innerHTML == "=")
//         {
//             str = eval(str) ; 
//             screen.innerText = str ; 
//         }
//         else if(e.target.innerHTML == "AC")
//         {
//             str ="0" ; 
//             screen.innerText = str ; 
//         }
//         else if(e.target.innerHTML == "DEL")
//         {
//             str = str.substring(0,str.length-1) ; 
//             screen.innerText = str ; 
//         }
//         else
//         {
//             str += e.target.innerHTML ; 
//             screen.innerText = str ; 
//         }
//     })
// })
let buttons = document.querySelectorAll(".button") ; 
let str = "" ; 
let screen = document.querySelector(".screen") ; 
let arr = Array.from(buttons) ; 
arr.forEach((button) =>
{
    button.addEventListener("click" , (evt) =>
    {
        if(evt.target.innerHTML == "=")
        {
            str = eval(str) ; 
            screen.innerText = str ; 
        }
        else if(evt.target.innerHTML == "AC")
        {
            str = "0" ; 
            screen.innerText = str ;  
        }
        else if(evt.target.innerHTML == "DEL")
        {
            str = str.substring(0,str.length -1 ) ; 
            screen.innerText = str ; 
        }
        else 
        {
            str += evt.target.innerHTML ; 
            screen.innerText = str ; 
        }
    })
})