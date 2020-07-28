let buttons = document.getElementsByTagName('button');
let screen = document.getElementById('screen');

for (but of buttons) {
    but.addEventListener('click', (e) => {
        let val = e.target.innerText;
        if (val == '=') {
            if (screen.value != "") {
                try {
                    var initial = screen.value;
                    let Expression = String(eval(screen.value));
                    let Expression1 = parseFloat(Expression);
                    let Expression2 = parseInt(Expression1);
                    if (Expression1 == Expression2)
                        screen.value = Expression1;
                    else
                        screen.value = Expression1.toFixed(3);
                }
                catch (e){
                    screen.value = "Invalid Expression";
                    setTimeout(() => {
                        screen.value = initial;
                    }, 1000);
                }
            }


        }
        else if (val == 'C')
            screen.value = "";
        else if (val == 'DEL')
        {
            screen.value = screen.value.slice(0, -1);
        }
        else
            screen.value += val;
    })
}
