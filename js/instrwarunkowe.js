'use strict';

var wzrostMateusza = 190;
var wzrostOlgi = 170;

if (wzrostOlgi < wzrostMateusza) {
    console.log("Olga jest niższa");
}

if (wzrostOlgi > wzrostMateusza) {
    console.log("Olga jest wyzsza");
} else {
    console.log("Olga jest niższa");
}

if (wzrostOlgi > wzrostMateusza) {
    console.log("Olga jest wyższa");
} else if (wzrostOlgi == wzrostMateusza) {
    console.log("Olga tak wysoka jak Mateusz");
} else {
    console.log("Olga jest niższa");
}


var kolor = 'zielony';
switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
      break
    case 'niebieski':
        console.log('Kolor niebieski');
     break;
    default:
        console.log('Inny kolor');
}

