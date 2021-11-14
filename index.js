let composite = false

function generate(num) {

for (let j = 2; j < num; j++) {
  for (let i = 2; i < j; i++) {
    if (j % i === 0 && j !== i){
      composite = true
    }
    
  }

  if (composite === false) {
   console.log(j)
  }
  composite = false
}
}