console.log("jnsdan.js: start");

function jnsdan(fase) {
    console.log("jnsdan.js: fase = " + fase);
    let section = document.querySelector("#jnsdan");

    let text1 = document.querySelector('.part1 p');
    let text2 = document.querySelector('.part2 p');
    let text3 = document.querySelector('.part3 p');
    let text4 = document.querySelector('.part4 p');

    gsap.to(".part1", {
        text: {
            value: text1.innerText
        },
        scrollTrigger: {
            trigger: ".part1",
            markers: false,
            scrub: 1,
            start: "top center",
            end: "center center"
        },
    })
    gsap.to(".part2", {
        text: {
            value: text2.innerText
        },
        scrollTrigger: {
            trigger: ".part2",
            markers: false,
            scrub: 1,
            start: "top center",
            end: "center center"
        },
    })
    gsap.to(".part3", {
        text: {
            value: text3.innerText
        },
        scrollTrigger: {
            trigger: ".part3",
            markers: false,
            scrub: 1,
            start: "top center",
            end: "center center"
        },
    })
    gsap.to(".part4", {
        text: {
            value: text4.innerText
        },
        scrollTrigger: {
            trigger: ".part4",
            markers: false,
            scrub: 1,
            start: "top center",
            end: "center center"
        },
    })

    if ( !section.init ) {
        section.init = true;
        console.log("jnsdan.js: init");

        section.tl
        .to("#jnsdan .box", 
        {
            backgroundColor: `transparent`,
            duration: .1
        })
        .to("#jnsdan .cube-side", 
        {
            backgroundColor: `rgba(97, 218, 251, 0.8)`,
            boxShadow: `inset 0 0 5vw #61dafb, #61dafb 0 0 1vw`,
            outline: `2px solid #8de6ff`,
            duration: .1,
        })
        .to("#jnsdan .cube-container", 
        {
            rotateX: `360deg`,
            rotateY: `-180deg`,
            duration: 6,
        })
        .to("#jnsdan .cube-side",
        {
            backgroundColor: `white`,
            outline: `0px solid #8de6ff`,
            boxShadow: `inset 0 0 0vw #61dafb, #61dafb 0 0 0vw`,
            duration: .5
        })
    }
}