const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'jello')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'jello')
}))

// progressbar ----
const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
    .fromTo(cssBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(70% - 6px)', ease: Power4.easeOut})
    .fromTo(jsBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
    .fromTo(reactBar, .50, {width: 'calc(0% - 6px)'}, {width: 'calc(70% - 6px)', ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

// underline ------
const underLine = document.querySelector('.underline')

var t2 = new TimelineLite()

t2.fromTo(underLine, 1.5, {width: '100%'}, {width: '0%', ease: Power4.easeOut})

const controller1 = new ScrollMagic.Controller()
const scene1 = new ScrollMagic.Scene({
    triggerElement: '.logo',
    triggerHook: 0
})
.setTween(t2)
.addTo(controller1)


const showRequiredCategory = event => {
    const getid = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++) {
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getid}`);
    const categories = document.querySelectorAll(`div[class ^= "category-"]`)
    for(i=0; i<categories.length; i++) {
        if(categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}