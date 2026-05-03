
// =====================
// SUBJECTS LIST
// =====================
const subjects = [
    "Engineering Mathematics",
    "General Aptitude",
    "Networks",
    "Signals and Systems",
    "Electronic Devices",
    "Analog Circuits",
    "Digital Circuits",
    "Control Systems",
    "Communication Systems",
    "Electromagnetics",
    "Computer Organization"
];

// =====================
// TOPICS FOR EACH SUBJECT
// =====================
const topics = {
    "Engineering Mathematics": ["Linear Algebra","Calculus","Differential Equations","Vector Calculus","Complex Analysis","Probability"],
    "General Aptitude": ["Verbal Ability","Numerical Ability"],
    "Networks": ["Circuit Analysis","Network Theorems","Two Port Networks"],
    "Signals and Systems": ["LTI Systems","Fourier Series","Laplace Transform","Z-Transform"],
    "Electronic Devices": ["Semiconductors","Diodes","BJT","MOSFET"],
    "Analog Circuits": ["Diodes","Amplifiers","Op-Amps"],
    "Digital Circuits": ["Number Systems","Boolean Algebra","Combinational Circuits","Sequential Circuits","ADC","DAC","Timing & Hazards"],
    "Control Systems": ["Transfer Function","Stability","Root Locus","Bode Plot"],
    "Communication Systems": ["AM","FM","Digital Communication","Information Theory"],
    "Electromagnetics": ["Maxwell Equations","Wave Propagation","Transmission Lines"],
    "Computer Organization": ["Memory","ALU","Instruction Pipeline"]
};

// =====================
// TASK TYPES
// =====================
const tasks = ["PYQ","DPP","Revision","Notes"];

// =====================
// WHERE CARDS WILL GO
// =====================
const container = document.getElementById("ECsubjects");

// =====================
// CREATE SUBJECT CARDS
// =====================
subjects.forEach(function(subject) {

    let total = 0;
    let done = 0;

    // go through topics
    topics[subject].forEach(function(topic) {

        // go through tasks
        tasks.forEach(function(task) {

            total++;

            let key = subject + "-" + topic + "-" + task;

            if (localStorage.getItem(key) === "true") {
                done++;
            }

        });
    });

    let percent = Math.round((done / total) * 100);

    // create card
    let card = document.createElement("a");
    card.className = "card";
    card.href = "subject.html?sub=" + encodeURIComponent(subject);

    card.innerHTML =
        "<h3>" + subject + "</h3>" +
        "<p>" + percent + "% completed</p>" +
        "<div class='progress-bar'>" +
        "<div class='fill' style='width:" + percent + "%'></div>" +
        "</div>";

    container.appendChild(card);

});


// =====================
// COUNTDOWN
// =====================
const examDate = new Date("Feb 15, 2027").getTime();

function updateCountdown() {

    let now = new Date().getTime();
    let gap = examDate - now;

    let days = Math.floor(gap / (1000 * 60 * 60 * 24));
    let hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((gap / (1000 * 60)) % 60);

    document.getElementById("examdaysleft").innerText = days;
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
}

// run every second
setInterval(updateCountdown, 1000);

// run once immediately
updateCountdown();
