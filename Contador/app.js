let count = 0

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

const randomcolor = () => 
{

const color = Math.floor(Math.random()*16777215).toString(16);
return "#"+color ;
}
btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        const style = event.currentTarget.classList
        if(style.contains('decrase')){
            count--
        }else if(style.contains('reset')){
            count = 0     
        }else if(style.contains('incrase')){
            count++
        }
        value.textContent = count
        if(count < 0)
        value.style.color = "#ff0000"
        else if(count > 0 && count < 30 )
        value.style.color = "#00FF00"
        else if (count == 0)  
        value.style.color = "#102A42"
        else if(count > 30)
        value.style.color = randomcolor()
    })
    
})