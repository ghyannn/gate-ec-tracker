const subjectTopics = {
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

const taskTypes = ["PYQ","DPP","Revision","Notes"];

const currentSubject = new URLSearchParams(window.location.search).get("sub");

document.getElementById("title").innerText = currentSubject;

const topicBoxContainer = document.getElementById("topics");

subjectTopics[currentSubject].forEach(function(topicName) {

    const topicBox = document.createElement("div");
    topicBox.className = "topic";

    let content = `<h3>${topicName}</h3>`;

    taskTypes.forEach(taskName => {

        const storageKey = `${currentSubject}-${topicName}-${taskName}`;
        const isDone = localStorage.getItem(storageKey) === "true";

        content += `
            <label>
                <input type="checkbox" ${isDone ? "checked" : ""} 
                onchange="localStorage.setItem('${storageKey}', this.checked)">
                ${taskName}
            </label>
        `;
    });

    topicBox.innerHTML = content;
    topicBoxContainer.appendChild(topicBox);
});
