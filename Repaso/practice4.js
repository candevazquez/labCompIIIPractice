// 4. Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
// torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
// velas más altas de la torta.
// Tu objetivo es contar cuántas son las más altas de la torta
// Ejemplo candles = [4, 4, 1, 3]

const candles = [4,5,2,5,4,1];
const max = Math.max(...candles)
const quantityOfMaxLenght = candles.filter( candle => candle == max)
console.log(quantityOfMaxLenght)
const quantity = quantityOfMaxLenght.length
console.log(quantity)