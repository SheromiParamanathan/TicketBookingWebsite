document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    let btn = document.getElementById("buyBtn");
    btn.onclick = function() {
        let adults = parseInt(document.getElementById("adults").value) || 0;
        let children = parseInt(document.getElementById("children").value) || 0;
        
        let price = calc(adults, children);
        alert("Total Price: £" + price);
    };
});

function calc(adults, children) {
    if (adults < 0) adults = 0;
    if (children < 0) children = 0;

    let price = (adults * 12 + children * 5);

    console.log("Total Price: £" + price);

    for (let i = 1; i <= adults; i++) {
        console.log("Adult Ticket #" + i);
    }
    for (let j = 1; j <= children; j++) {
        console.log("Child Ticket #" + j);
    }

    return price;
}
