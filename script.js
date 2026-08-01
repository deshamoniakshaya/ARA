// ===============================
// PAGE SWITCH
// ===============================

function nextPage(pageNumber){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document
    .getElementById("page"+pageNumber)
    .classList.add("active");

    if(pageNumber===2){
        typeMessage();
    }

}

// ===============================
// TYPEWRITER MESSAGE
// ===============================

const message = `Some people come into our lives and quietly become one of the best parts of it.

Thank you for the laughter,
the endless conversations,
the unforgettable memories,
and for simply being there.

No matter where life takes us,
I hope this friendship always stays just as special.

Happy Friendship Day! 💜`;

let index = 0;
let typingStarted = false;

function typeMessage(){

    if(typingStarted) return;

    typingStarted = true;

    function type(){

        if(index < message.length){

            document.getElementById("typing").innerHTML += message.charAt(index);

            index++;

            setTimeout(type,35);

        }

    }

    type();

}

// ===============================
// SPARKLES
// ===============================

setInterval(()=>{

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.animationDuration=
    (3+Math.random()*3)+"s";

    document
    .getElementById("sparkles")
    .appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },6000);

},180);

// ===============================
// BUTTERFLIES
// ===============================

const butterflies=["🦋","🦋","🦋"];

setInterval(()=>{

    const butterfly=document.createElement("div");

    butterfly.className="butterfly";

    butterfly.innerHTML=
    butterflies[Math.floor(Math.random()*butterflies.length)];

    butterfly.style.left=
    Math.random()*100+"vw";

    butterfly.style.animationDuration=
    (8+Math.random()*5)+"s";

    butterfly.style.fontSize=
    (22+Math.random()*18)+"px";

    document
    .getElementById("butterflies")
    .appendChild(butterfly);

    setTimeout(()=>{
        butterfly.remove();
    },13000);

},1200);