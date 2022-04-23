function betterThanAverage(classPoints, yourPoints) {
    let x = classPoints.reduce((total,item)=>{
      total += item 
      return total
    })
    x /= classPoints.length
    return x < yourPoints ? true : false
  }