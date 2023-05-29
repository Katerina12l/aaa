let a1 = document.getElementById('a1')
let a2 = document.getElementById('a2')
let a3 = document.getElementById('a3')

a1.ondragstart = start
a1.ondragend = end
let ofx = 0
let ofy = 0
function start(event){
    console.log(event.pageX, event.pageY)
    console.log(event.offsetX, event.offsetY)
    ofx=event.offsetX
    ofe=event.offsetY
   // console.log(event.X, event.Y)
}
function end(event){
    let x=event.pageX
    let y=event.pageY
    this.style.left = (x - ofx) + 'px'
    this.style.top = (y -ofy) + 'px'
    console.log(event.pageX, event.pageY)
}

a2.ondragstart = start
a2.ondragend = end


a3.ondragstart = start
a3.ondragend = end

l