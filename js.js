function if_else(){ 
    let a=document.getElementById('numb_a').value;
    a = parseInt(a);
    let b=document.getElementById('numb_b').value;
    b = parseInt(b);
    let x_s=document.getElementById('numb_start').value;
    x_s = parseInt(x_s);
    let x_e=document.getElementById('numb_end').value;
    x_e = parseInt(x_e);
    let step=document.getElementById('numb_step').value;
    step = parseInt(step);
    if (x_s<x_e){
        for (x_s;x_s<=x_e;)
        {
        var y=(a*Math.pow(Math.log(x_s),2))/b+Math.sqrt(x_s);
        var element = document.getElementById("itog");
        var itog1 = document.createElement('p');
        itog1.innerHTML='Якщо x = '+x_s+', y = '+y;
        element.appendChild(itog1);
        x_s=x_s+step; 
        }
    }else alert('Кінцеве значення меньше початкового');

    document.getElementById("clearButton").onclick = function(del) {
        document.getElementById("itog").value = "";
}
}