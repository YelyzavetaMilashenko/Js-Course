// № 4
function getVisitor() {
    let i = 1
    return function() {
      return i++
    }
  }
  const visitor = getVisitor()
  console.log(visitor())
