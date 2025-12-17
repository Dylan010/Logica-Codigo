//TODO: esta funcion lo que hace  recibir una array con cosas repetidas y devuelve un array sin los cosos repetidos

var uniqueInOrder=function(iterable){
    let resu = [] ;
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i]!=iterable[i+1]){
            resu.push(iterable[i])
        }
    }
    return resu;
}





