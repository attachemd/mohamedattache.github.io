let layer_state = true;
let curr_elem_layer_name = null;
let prev_elem_layer_name = null;

function checkInView(
    container,
    elements
) {
    
    //Get container properties
    let cTop = container.scrollTop;
    console.log("container.scrollTop", container.scrollTop);
    // console.log("container.clientTop", container.clientTop);
    // let cBottom = cTop + container.clientHeight;
    // console.log("container.clientHeight", container.clientHeight);
    // console.log("element.clientHeight", element.clientHeight);
    
    //Get element properties
    // let eTop = element.offsetTop;
    
    console.log("element.offsetTop", elements[2].offsetTop);
    console.log("container.scrollTop + 0.5*container.clientHeight", container.scrollTop + 0.5 * container.clientHeight);
    
    let g = ((cTop + (0.5 * container.clientHeight)) >= elements[2].offsetTop)
        && (cTop <= (elements[2].offsetTop + 5));
    
    console.log("comaraison: ", g);
    console.log("layer_state: ", layer_state);
    
    // console.log("container.offsetTop", container.offsetTop);
    // let eBottom = eTop + element.clientHeight;
    // let v = ((cTop + (0.35 *container.clientHeight)) >= eTop) && (cTop <=eTop);
    // console.log('value: ', v);
    
    for (var i = 0; i < elements.length; i++) {
        let eTop = elements[i].offsetTop;
        let v = ((cTop + (0.5 * container.clientHeight)) >= eTop) && (cTop <= (eTop + 5));
        // if(cTop <=eTop){
        //     console.log("small!");
        // }
        
        if (v) {
            // console.log('In!');
            // layer_state = false;
            // console.log('elements[i].className: ', elements[i].className);
            let layer_name = elements[i].getAttribute('data-layer');
            curr_elem_layer_name = layer_name;
            if (prev_elem_layer_name === curr_elem_layer_name) {
                
                if (layer_state) {
                    // console.log("yes!");
                    layer_state = false;
                    let bg = document.getElementById("bg");
                    if (layer_name === "about") {
                        bg.setAttribute('data-layer-color', 'about');
                        // bg.setAttribute('data-layer-color', 'about');
                        // let newone = bg.cloneNode(true);
                        // bg.parentNode.replaceChild(newone, bg);
                    } else if (layer_name === "expertise") {
                        bg.setAttribute('data-layer-color', 'expertise');
                        // let newone = bg.cloneNode(true);
                        // bg.parentNode.replaceChild(newone, bg);
                    } else if (layer_name === "education") {
                        bg.setAttribute('data-layer-color', 'education');
                    } else if (layer_name === "langues") {
                        bg.setAttribute('data-layer-color', 'langues');
                    } else if (layer_name === "contact-me") {
                        bg.setAttribute('data-layer-color', 'contact-me');
                    }
                    let newone = bg.cloneNode(true);
                    bg.parentNode.replaceChild(newone, bg);
                    let nav_link = document.querySelectorAll("a[data-layer='" + layer_name + "']")[0];
                    if (!nav_link.classList.contains('active')) {
                        // The box that we clicked has a class of bad so let's remove it and add the good class
                        
                        // nav_link.classList.add('active');
                        let nav_links = document.querySelectorAll("nav a");
                        for (let k = 0; k < nav_links.length; k++) {
                            // if (nav_link.getAttribute('data-layer') !== nav_links[k].getAttribute('data-layer')){
                            //     nav_links[k].classList.remove('active');
                            // }
                            nav_links[k].classList.remove('active');
                        }
                        nav_link.classList.add('active');
                    } else {
                        //nav_link.classList.remove('active');
                        // The user obviously can't follow instructions so let's alert them of what is
                        // supposed to happen next
                        // alert("You can proceed!");
                    }
                }
            }
            
        } else {
            // console.log('Out!');
        }
        // console.log('value: ', v);
    }
    
    if (prev_elem_layer_name === curr_elem_layer_name) {
        
        // console.log("yes!");
    } else {
        // console.log("no!");
        prev_elem_layer_name = curr_elem_layer_name;
        layer_state = true;
    }
    if (layer_state) {
        console.log('layer_state2: ', layer_state);
    }
    //Return outcome
    return true;
}

var cntnr = document.getElementById('bo');
// var elmnt = document.getElementById('rii');
var elmnts = document.getElementsByClassName('parallax__layer');
// checkInView(cntnr,elmnt, true);

document.getElementById('bo').addEventListener('scroll', function () {
    let v = checkInView(cntnr, elmnts);
    // console.log('value: ', v);
});

// const buttons = document.querySelectorAll("nav a");
// for (const button of buttons) {
//     button.addEventListener('click', function(event) {
//         let nav_links = document.querySelectorAll("nav a");
//         for(let k = 0; k < nav_links.length; k++){
//             // if (nav_link.getAttribute('data-layer') !== nav_links[k].getAttribute('data-layer')){
//             //     nav_links[k].classList.remove('active');
//             // }
//             nav_links[k].classList.remove('active');
//         }
//         this.classList.add('active');
//     })
// }

if (window.matchMedia("(max-width: 300px)").matches) {
    /* the viewport is at least 400 pixels wide */
    // document.getElementsByTagName("nav")[0].style.left = "10px";
    //console.log("document.getElementsByTagName(\"nav\")[0].style.left: ", document.getElementsByTagName("nav")[0].style.left);
} else {
    /* the viewport is less than 400 pixels wide */
    //console.log("no!!!");
}

// media query event handler
if (window.matchMedia) {
    const mq = window.matchMedia("(max-width: 300px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
// window width is at least 500px
        console.log("yes!!!");
        // document.getElementsByTagName("nav")[0].style.left = "10px";
    } else {
// window width is less than 500px
        console.log("no!!!");
    }
    
}

let nav = document.getElementsByTagName("nav")[0];
let clonedElem = nav.cloneNode(true);
nav.parentNode.appendChild(clonedElem);

clonedElem.style.width = "min-content";
let mc = clonedElem.offsetWidth;
console.log("clonedElem.offsetWidth: ", clonedElem.offsetWidth);
console.log("clonedElem.getBoundingClientRect(): ", clonedElem.getBoundingClientRect());
console.log("clonedElem.style.width: ", clonedElem.style.width);
clonedElem.remove();

var style = document.createElement('style');
style.innerHTML = `

  @media only screen and (max-width: ` + Math.ceil(mc / 0.6) + `px) {

    nav {
        left: ` + (-1 * mc - 5) + `px;
    }
}
  `;
document.head.appendChild(style);

class Carousel {
    
    constructor(
        carouselSelector,
        isVertical
    ) {
        
        let $this = this;
        this.carousel = document.querySelector(carouselSelector);
        this.cells = this.carousel.querySelectorAll('.carousel__cell');
        this.cellWidth = null;
        this.cellHeight = null;
        this.isVertical = !!isVertical;
        console.log("this.isVertical: ", this.isVertical);
        this.rotateFn = this.isVertical ? 'rotateX' : 'rotateY';
        this.cellCount = null;
        this.radius = null;
        this.theta = null;
        this.selectedIndex = 0;
        
        this.prevButton = document.querySelector('.previous-button');
        // console.log('this.prevButton: ', this.prevButton);
        this.nextButton = document.querySelector('.next-button');
        
        this.prevButton.addEventListener('click', function () {
            $this.selectedIndex--;
            $this.rotateCarousel();
            // $this.findFrontCellPrev();
            $this.findFrontCell();
        });
        
        this.nextButton.addEventListener('click', function () {
            $this.selectedIndex++;
            $this.rotateCarousel();
            // $this.findFrontCellNext();
            $this.findFrontCell("next");
        });
        
        this.changeCarousel();
        // this.findFrontCellNext();
        $this.findFrontCell("next");
    }
    
    changeCarousel() {
        this.cellCount = this.cells.length;
        this.theta = 360 / this.cellCount;
        this.cellWidth = this.carousel.offsetWidth;
        this.cellHeight = this.carousel.offsetHeight;
        let cellSize = this.isVertical ? this.cellHeight : this.cellWidth;
        this.radius = Math.round((cellSize / 2) / Math.tan(Math.PI / this.cellCount));
        for (let i = 0; i < this.cellCount; i++) {
            let cell = this.cells[i];
            if (i < this.cellCount) {
                // visible cell
                cell.style.opacity = 1;
                let cellAngle = this.theta * i;
                cell.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
                // let cellCntnt = cell.querySelector('.cell-cntnt');
                // if(cellCntnt){
                //     cell.querySelector('.cell-cntnt').style.transform = rotateFn + '(' + cellAngle*-1 + 'deg)';
                // }
                
            } else {
                // hidden cell
                cell.style.opacity = 0;
                cell.style.transform = 'none';
            }
        }
        
        this.rotateCarousel();
    }
    
    rotateCarousel() {
        let angle = this.theta * this.selectedIndex * -1;
        this.carousel.style.transform = 'translateZ(' + -this.radius + 'px) ' +
            this.rotateFn + '(' + angle + 'deg)';
        this.syncRotation()
    }
    
    syncRotation() {
        this.cellCount = this.cells.length;
        this.theta = 360 / this.cellCount;
        for (let i = 0; i < this.cellCount; i++) {
            let cell = this.cells[i];
            if (i < this.cellCount) {
                let cellAngle = this.theta * i - (this.theta * this.selectedIndex);
                
                let cellCntnt = cell.querySelector('.cell-cntnt');
                if (cellCntnt) {
                    cell
                        .querySelector('.cell-cntnt')
                        .style
                        .transform = this.rotateFn + '(' + cellAngle * -1 + 'deg)';
                }
                
            }
        }
    }
    
    findFrontCell(direction) {
        console.log("-----------------------------");
        let modulus = this.selectedIndex % this.cellCount
        if (modulus < 0) {
            modulus = modulus ? modulus + this.cellCount : modulus
        }
        for (
            let i = direction === "next" ? 0 : this.cellCount - 1;
            direction === "next" ? i < this.cellCount : i >= 0;
            direction === "next" ? i++ : i--
        ) {
            let cell = this.cells[i];
            let a = cell.querySelector('a');
            if (a) {
                if (i !== modulus) {
                    cell.querySelector('a').style.opacity = 0.05;
                } else {
                    cell.querySelector('a').style.opacity = 1;
                }
            }
            
        }
        
    }
    
    findFrontCellNext() {
        console.log("-----------------------------");
        let modulus = this.selectedIndex % this.cellCount
        if (modulus < 0) {
            modulus = modulus ? modulus + this.cellCount : modulus
        }
        for (let i = 0; i < this.cellCount; i++) {
            let cell = this.cells[i];
            let a = cell.querySelector('a');
            if (a) {
                if (i !== modulus) {
                    cell.querySelector('a').style.opacity = 0.05;
                } else {
                    cell.querySelector('a').style.opacity = 1;
                }
            }
            
        }
        
    }
    
    findFrontCellPrev() {
        console.log("-----------------------------");
        let modulus = this.selectedIndex % this.cellCount
        if (modulus < 0) {
            modulus = modulus ? modulus + this.cellCount : modulus
        }
        for (let i = this.cellCount - 1; i >= 0; i--) {
            let cell = this.cells[i];
            let a = cell.querySelector('a');
            if (a) {
                if (i !== modulus) {
                    cell.querySelector('a').style.opacity = 0.05;
                } else {
                    cell.querySelector('a').style.opacity = 1;
                }
            }
            
        }
        
    }
    
}


function generatecarouselCntnt() {
    var container = document.createElement("div");
    container.setAttribute('id', "carousel01");
    
    for (var x = 1; x < 11; x++) {
        var cell = document.createElement("div");
        cell.setAttribute('class', "carousel__cell");
        cell.appendChild(document.createTextNode(x));
        container.appendChild(cell)
    }
    let cntnr2 = document.getElementById("carousel");
    cntnr2.parentNode.replaceChild(container, cntnr2);
}


const carousel01 = new Carousel('#carousel01');

window.addEventListener('resize', function (event) {
    carousel01.changeCarousel();
});

const carousel02 = new Carousel('#carousel02', true);

document.querySelector('.cell-nmbr').innerHTML = carousel01.cellCount;

// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener('click', function () {
//     carousel01.selectedIndex--;
//     carousel01.rotateCarousel();
// });
//
// var nextButton = document.querySelector('.next-button');
// nextButton.addEventListener('click', function () {
//     carousel01.selectedIndex++;
//     carousel01.rotateCarousel();
// });
//
// window.addEventListener('resize', function (event) {
//     carousel01.changeCarousel();
// });