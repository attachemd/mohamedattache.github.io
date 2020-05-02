// // First we detect the click event
// document.getElementById('the-box').addEventListener('click', function () {
//     // Using an if statement to check the class
//     if (this.classList.contains('bad')) {
//         // The box that we clicked has a class of bad so let's remove it and add the good class
//         this.classList.remove('bad');
//         this.classList.add('good');
//     } else {
//         // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
//         // alert("You can proceed!");
//     }
// });

// $('.parallax').scroll(function() {
//     // console.log('Hi!');
//     var hT = $('#rii').offset().top,
//         hH = $('#rii').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     // if (wS > (hT+hH-wH)){
//     //     console.log('H1 on the view!');
//     // }
//
//     if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
//         //Do something
//         console.log('H1 on the view!');
//     }
//
// });

// var element_position = $('#rii').offset().top;
// var screen_height = $(window).height();
// var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
// var activation_point = element_position - (screen_height * activation_offset);
// var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer
//
// //Does something when user scrolls to it OR
// //Does it when user has reached the bottom of the page and hasn't triggered the function yet
// $('.parallax').on('scroll', function() {
//     // var y_scroll_pos = window.pageYOffset;
//     var y_scroll_pos = $(this).scrollTop();
//
//     var element_in_view = y_scroll_pos > activation_point;
//     var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;
//
//     if(element_in_view || has_reached_bottom_of_page) {
//         //Do something
//         console.log('H1 on the view!');
//     }
// });

function checkInViewModif(
    container,
    element,
    partial
) {
    
    //Get container properties
    let cTop = container.scrollTop;
    // console.log("container.scrollTop", container.scrollTop);
    // console.log("container.clientTop", container.clientTop);
    let cBottom = cTop + container.clientHeight;
    // console.log("container.clientHeight", container.clientHeight);
    // console.log("element.clientHeight", element.clientHeight);
    
    //Get element properties
    let eTop = element.offsetTop;
    // console.log("element.offsetTop", element.offsetTop);
    // console.log("container.offsetTop", container.offsetTop);
    let eBottom = eTop + element.clientHeight;
    let v = ((cTop + (0.85 *container.clientHeight)) >= eTop) && (cTop <=eTop);
    console.log('value: ', v);
    //Check if in view
    let isTotal = (eTop >= cTop && eBottom <= cBottom);
    let isPartial = partial && (
        (eTop < cTop && eBottom > cTop) ||
        (eBottom > cBottom && eTop < cBottom)
    );
    
    //Return outcome
    return (isTotal || isPartial);
}

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
    console.log("container.scrollTop + 0.5*container.clientHeight", container.scrollTop + 0.5*container.clientHeight);
    
    let g = ((cTop + (0.5 *container.clientHeight)) >= elements[2].offsetTop)
        && (cTop <=(elements[2].offsetTop+5));
    
    console.log("comaraison: ", g);
    console.log("layer_state: ", layer_state);
    
    // console.log("container.offsetTop", container.offsetTop);
    // let eBottom = eTop + element.clientHeight;
    // let v = ((cTop + (0.35 *container.clientHeight)) >= eTop) && (cTop <=eTop);
    // console.log('value: ', v);
    
    for(var i = 0; i < elements.length; i++){
        let eTop = elements[i].offsetTop;
        let v = ((cTop + (0.5 *container.clientHeight)) >= eTop) && (cTop <= (eTop+5));
        // if(cTop <=eTop){
        //     console.log("small!");
        // }
        
        if(v){
            // console.log('In!');
            // layer_state = false;
            // console.log('elements[i].className: ', elements[i].className);
            let layer_name = elements[i].getAttribute('data-layer');
            curr_elem_layer_name = layer_name;
            if (prev_elem_layer_name === curr_elem_layer_name){
                
                if(layer_state){
                    // console.log("yes!");
                    layer_state = false;
                    let bg = document.getElementById("bg");
                    if(layer_name === "about"){
                        bg.setAttribute('data-layer-color', 'about');
                        // bg.setAttribute('data-layer-color', 'about');
                        // let newone = bg.cloneNode(true);
                        // bg.parentNode.replaceChild(newone, bg);
                    }
                    else if(layer_name === "expertise") {
                        bg.setAttribute('data-layer-color', 'expertise');
                        // let newone = bg.cloneNode(true);
                        // bg.parentNode.replaceChild(newone, bg);
                    }
                    else if(layer_name === "education") {
                        bg.setAttribute('data-layer-color', 'education');
                    }
                    else if(layer_name === "langues") {
                        bg.setAttribute('data-layer-color', 'langues');
                    }
                    else if(layer_name === "contact-me") {
                        bg.setAttribute('data-layer-color', 'contact-me');
                    }
                    let newone = bg.cloneNode(true);
                    bg.parentNode.replaceChild(newone, bg);
                    let nav_link = document.querySelectorAll("a[data-layer='"+layer_name+"']")[0];
                    if (!nav_link.classList.contains('active')) {
                        // The box that we clicked has a class of bad so let's remove it and add the good class

                        // nav_link.classList.add('active');
                        let nav_links = document.querySelectorAll("nav a");
                        for(let k = 0; k < nav_links.length; k++){
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
    
    if (prev_elem_layer_name === curr_elem_layer_name){
        
        // console.log("yes!");
    } else {
        // console.log("no!");
        prev_elem_layer_name = curr_elem_layer_name;
        layer_state = true;
    }
     if(layer_state){
         console.log('layer_state2: ', layer_state);
     }
    //Return outcome
    return true;
}

var cntnr = document.getElementById('bo');
// var elmnt = document.getElementById('rii');
var elmnts = document.getElementsByClassName('parallax__layer');
// checkInView(cntnr,elmnt, true);

document.getElementById('bo').addEventListener('scroll', function() {
    let v = checkInView(cntnr,elmnts);
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