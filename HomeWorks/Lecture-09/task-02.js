// № 2
function queue() {
    const arrQueue = []

    function add(element) {
        arrQueue.push(element)
    }

    function remove() {
        arrQueue.shift()
    }

    function getArr () {
        return [...arrQueue]
    }

    return {
        add, remove, getArr
    }
}
const turn = queue()
turn.add('Bob')
turn.add('Nick')
turn.remove()
turn.add('Ann')
console.log(turn.getArr())
