let precios=[700, 800, 605, 900, 505, 760, 845, 690, 728, 842,129,132,500,660,612];

document.write(precios.join(' - '));
document.write("<br>");
let preciosconiv=precios.map((precios)=>precios+(precios*0.10));
document.write(preciosconiv.join(' - '));
