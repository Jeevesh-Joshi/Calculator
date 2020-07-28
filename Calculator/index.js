let buttons = document.getElementsByTagName('button');
let screen = document.getElementById('screen');

for(but of buttons){
    but.addEventListener('click',(e)=>{
        let val = e.target.innerText;
        if (val == '=')
        {
                if (screen.value != "")
                    screen.value = eval(screen.value);
        }
        else if (val == 'C')
            screen.value = "";
        else
            screen.value += val; 
    })
}