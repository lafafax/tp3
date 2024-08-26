
let numeros=[];
for(let i=0;i<10;i++){
    numeros[i]=Math.floor(Math.random()*10);
}
document.write(numeros.join(" - "));
document.write("<br>")
var cubo=numeros.map((numeros)=>Math.pow(numeros,3));
document.write(cubo.join(" - "));