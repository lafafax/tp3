var nombres=["Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel","Elena", "Raúl"];
var curso=["5º3º"];
document.write(nombres.join(" "));
document.write("<br>")

let nombresycurso=nombres.map((nombres)=>curso+nombres);
document.write(nombresycurso.join(" "));