// TODO: Se le pasa una tarjeta y se debe enmascarar los  numeros de la tarjeta CON "#" Exceptuando los ultimos 4

function maskify(cc) {
  for (let i = 0; i < cc.length - 4; i++) {
    cc = cc.replace(cc[i], "#");  // ** replace reemplaza
  }
  return cc
}