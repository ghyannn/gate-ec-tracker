const subjects = [
    { name: "Engineering Mathematics", prefix: "Maths" },
    { name: "General Aptitude", prefix: "Apt" },
    { name: "Networks", prefix: "Net" },
    { name: "Signals and Systems", prefix: "SS" },
    { name: "Electronic Devices", prefix: "Dev" },
    { name: "Analog Circuits", prefix: "Analog" },
    { name: "Digital Circuits", prefix: "Digital" },
    { name: "Control Systems", prefix: "Control" },
    { name: "Communication Systems", prefix: "Comm" },
    { name: "Electromagnetics", prefix: "EMFT" },
    { name: "Computer Organization", prefix: "CO" }
];

const topicData = {
    Maths: ["Linear Algebra","Calculus","Differential Equations","Vector Calculus","Complex Analysis","Probability"],
    Apt: ["Verbal Ability","Numerical Ability"],
    Net: ["Circuit Analysis","Network Theorems","Two Port Networks"],
    SS: ["LTI Systems","Fourier Series","Laplace Transform","Z-Transform"],
    Dev: ["Semiconductors","Diodes","BJT","MOSFET"],
    Analog: ["Diodes","Amplifiers","Op-Amps"],
    Digital: ["Number Systems","Boolean Algebra","Combinational Circuits","Sequential Circuits","ADC","DAC","Timing & Hazards"],
    Control: ["Transfer Function","Stability","Root Locus","Bode Plot"],
    Comm: ["AM","FM","Digital Communication","Information Theory"],
    EMFT: ["Maxwell Equations","Wave Propagation","Transmission Lines"],
    CO: ["Memory","ALU","Instruction Pipeline"]
};

const tasks = ["PYQ","DPP","Revision","Notes"];

const container = document.getElementById("subjects");

// SUBJECT CARDS
subjects.forEach(sub => {
    let total = topicData[sub.prefix].length * tasks.length;
    let done = 0;

    topicData[sub.prefix].forEach(topic => {
        tasks.forEach(task => {
            if (localStorage.getItem(`${sub.prefix}-${topic}-${task}`) === "true") done++;
        });
    });

    let percent = Math.round((done / total) * 100);

    let card = document.createElement("a");
    card.href = `subject.html?sub=${sub.prefix}`;
    card.className = "card";

    card.innerHTML = `
        <h3>${sub.name}</h3>
        <p>${percent}% completed</p>
        <div class="progress-bar">
            <div class="fill" style="width:${percent}%"></div>
        </div>
    `;

    container.appendChild(card);
});

// OVERALL DONUT
function updateOverall() {
    let total = 0, done = 0;

    subjects.forEach(sub => {
        topicData[sub.prefix].forEach(topic => {
            tasks.forEach(task => {
                total++;
                if (localStorage.getItem(`${sub.prefix}-${topic}-${task}`) === "true") done++;
            });
        });
    });

    let percent = Math.round((done / total) * 100);

    document.querySelector(".donut").style.background =
        `conic-gradient(#22c55e ${percent}%, #334155 ${percent}%)`;

    document.getElementById("overallPercent").innerText = percent + "%";
}

updateOverall();

// COUNTDOWN
const examDate = new Date("Feb 15, 2027 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = examDate - now;

    document.getElementById("days").innerText = Math.floor(gap / (1000*60*60*24));
    document.getElementById("hours").innerText = Math.floor((gap/(1000*60*60))%24);
    document.getElementById("minutes").innerText = Math.floor((gap/(1000*60))%60);
}

setInterval(updateCountdown, 1000);
updateCountdown();