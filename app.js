var listCounter = document.querySelectorAll('.counter')


function count(el) {
    var to = parseInt(numberEl.innerText)
    var numberEl = el.querySelector('.number')
    var count = 0
    var time = 100;
    var step = to/time;
    let counting = setInterval(() => {
        count+=step
    if(count > to) {
        clearInterval(counting)
         numberEl.innerText = to
    } else {
         numberEl.innerText = Math.round(count)
    }
    }
,1)
}

listCounter.forEach(item => {
    count(item)
})