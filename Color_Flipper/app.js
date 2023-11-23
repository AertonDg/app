const colors = ["green", "red","blue","pink", "purple", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
   // console.log(document.body)
   const numero = getrandomnum ()
   document.body.style.backgroundColor = colors[numero]
   color.textContent = colors[numero]
})

function getrandomnum (){
    return Math.floor(Math.random()* colors.length)
}