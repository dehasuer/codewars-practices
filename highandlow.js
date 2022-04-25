function highAndLow(numbers){
    let newnumbers = numbers.split(" ")
       newnumbers.forEach((item, index, array) =>{
     array[index] = Number(item)
      })
   
     return Math.max(...newnumbers) + " " + Math.min(...newnumbers)
   }