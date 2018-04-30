let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $imgs = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({
    transform: 'translateX(-400px)'
})
bindEvents()
$(next).on('click', function () {
    goToSlides(current + 1)
})
$(previous).on('click', function () {
    goToSlides(current - 1)
})
let timer = setInterval(function () {
    goToSlides(current + 1)
}, 1000)
$('.container').on('mouseenter', function () {
    window.clearInterval(timer)
}).on('mouseleave', function () {
    timer = setInterval(function () {
        goToSlides(current + 1)
    }, 1000)
})

function bindEvents() {
    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlides(index)
    })

}

function goToSlides(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }
    if (current === ($buttons.length - 1) && index === 0) {
        //从最后一张到第一张
        // console.log(1)
        $slides.css({
            transform: `translateX(${-($buttons.length + 1)*400}px)`
        }).one('transitionend', function () {
            $slides.hide()
                .offset()
            $slides.css({
                    transform: `translateX(${-(index+1)*400}px)`
                })
                .show()
        })
    } else if (current === 0 && index === $buttons.length - 1) {
        //从第一张到最后一张
        // console.log(2)
        $slides.css({
            transform: 'translateX(0px)'
        }).one('transitionend', function () {
            $slides.hide()
                .offset()
            $slides.css({
                    transform: `translateX(${-(index+1)*400}px)`
                })
                .show()
        })
    } else {
        // console.log(3)
        $slides.css({
            transform: `translateX(${-(index+1)*400}px)`
        })

    }
    current = index
}

function makeFakeSlides() {
    let $firstCopy = $imgs.eq(0).clone(true)
    let $flastCopy = $imgs.eq($imgs.length - 1).clone(true)
    $slides.append($firstCopy)
    $slides.prepend($flastCopy)
}