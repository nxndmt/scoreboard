let stringHomeScore = document.getElementById("home")
let stringGuestScore = document.getElementById("guest")

let homeScore = 0
let guestScore = 0
let round = 1
let seconds = 0



function home1() {
    if (seconds > 0) {
    homeScore += 1
    stringHomeScore.textContent = homeScore
    leading()
    }
}
function home2() {
    if (seconds > 0) {
    homeScore += 2
    stringHomeScore.textContent = homeScore
    leading()
    }
}
function home3() {
    if (seconds > 0) {
    homeScore += 3
    stringHomeScore.textContent = homeScore
    leading()
    }
}

function guest1() {
    if (seconds > 0) {
    guestScore += 1
    stringGuestScore.textContent = guestScore
    leading()
    }
}
function guest2() {
    if (seconds > 0) {
    guestScore += 2
    stringGuestScore.textContent = guestScore
    leading()
    }
}
function guest3() {
    if (seconds > 0) {
    guestScore += 3
    stringGuestScore.textContent = guestScore
    leading()
    }
}

function leading() {
    if (homeScore == guestScore) {
    document.getElementById("leading").textContent = "SAME SCORE!"
} else if (homeScore > guestScore) {
    document.getElementById("leading").textContent = "THE HOME TEAM IS LEADING! 🥳"
} else {
    document.getElementById("leading").textContent = "THE GUEST TEAM IS LEADING! 😰"
}  
}

function newGame() {
    if (seconds == 0) {
    countdown();

    round += 1
    homeScore = 0
    guestScore = 0
    stringHomeScore.textContent = homeScore
    stringGuestScore.textContent = guestScore
    
    document.getElementById("btn2").textContent = "NEW GAME"
        }
    
}


function countdown() {
        seconds = 12;
        function tick() {
          var counter = document.getElementById("counter");
          seconds--;
          counter.innerHTML =
            "0:" + (seconds < 10 ? "0" : "") + String(seconds);
          if (seconds > 0) {
            setTimeout(tick, 1000);
          } else {
            document.getElementById("counter").innerHTML = "0:00";
            document.getElementById("leading").textContent = "GET READY FOR ROUND " + round
          }
        }
        tick();
      }