let myArray = [];

function techList(technologies,name) {
    for(let i = 0;i<technologies.length; i+=1){
       myArray.push({
        tech:technologies[i],
        name:name
       }) 
    }
    return myArray 
  }
  console.log(techList(['java','script','otavio'],'felipe'))
  
  
