const subjectlist = [
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

const container = document.getElementById("ECsubjects");

for (let i = 0; i < subjectlist.length; i++) {

    let sub = subjectlist[i];
    let topics = topicData[sub.prefix];

    let total = topics.length * tasks.length;
    let done = 0;

    for (let j = 0; j < topics.length; j++) {
        for (let k = 0; k < tasks.length; k++) {

            let key = sub.prefix + "-" + topics[j] + "-" + tasks[k];

            if (localStorage.getItem(key) === "true") {
                done++;
            }
        }
    }

    let percent = Math.round((done / total) * 100);

    let card = document.createElement("a");
    card.href = "subject.html?sub=" + sub.prefix;
    card.className = "card";

    card.innerHTML =
        "<h3>" + sub.name + "</h3>" +
        "<p>" + percent + "% completed</p>" +
        "<div class='progress-bar'>" +
        "<div class='fill' style='width:" + percent + "%'></div>" +
        "</div>";

    container.appendChild(card);
}

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

setInterval(updateCountdown, 1000);
updateCountdown();
