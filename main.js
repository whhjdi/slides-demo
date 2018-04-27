let n 
initState()
setInterval(()=>{
    makeLeave(getImage(n))
        .one('transitionend',(e)=>{
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n += 1
},1000)


function getImage(n){
    return $(`.imgs>img:nth-child(${x(n)})`)
}
function x(n){
    if(n>5){
        n = n%5
        if(n===0){
            n = 5
        }
    }
    return n
}
function initState(){
    n = 1
    getImage(n).addClass('current')
        .siblings().addClass('enter')
}
function makeLeave($node){
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node){
    return $node.removeClass('current leave').addClass('enter')
    
}
function makeCurrent($node){
    return $node.removeClass('leave enter').addClass('current')
   
}