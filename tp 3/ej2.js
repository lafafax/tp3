let notas=[7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5, 6.0, 7.8, 8.2, 6.9, 7.3];
document.write(notas.join(" - "));
document.write("<br>");
let notasact=notas.map((notas)=>notas+2.50);
document.write(notasact.join(" - "));