function duplicateCount(String_character){
    let r=0;
    let  lista =[];
      for( let i = 0; i < String_character.length; i++){
        for(let j = i + 1; j < String_character.length; j++){
          if(String_character[i].toLowerCase() === String_character[j].toLowerCase()){
            if(lista.indexOf(String_character[i].toLowerCase()) === -1){
              lista.push(String_character[i].toLowerCase());
              r++;
            }
            
          }
  
        }
      }
      return r;
    }