console.log("jnsdan.js: start");

function jnsdan(fase) {
    console.log("jnsdan.js: fase = " + fase);
    let section = document.querySelector("#jnsdan");

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