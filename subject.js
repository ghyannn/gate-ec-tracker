const data = {
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

const prefix = new URLSearchParams(window.location.search).get("sub");
document.getElementById("title").innerText = prefix;

const container = document.getElementById("topics");

data[prefix].forEach(topic => {
    let div = document.createElement("div");
    div.className = "topic";

    let html = `<h3>${topic}</h3>`;

    tasks.forEach(task => {
        const key = `${prefix}-${topic}-${task}`;
        const checked = localStorage.getItem(key) === "true";

        html += `
            <label>
                <input type="checkbox" ${checked ? "checked" : ""} 
                onchange="localStorage.setItem('${key}', this.checked)">
                ${task}
            </label>
        `;
    });

    div.innerHTML = html;
    container.appendChild(div);
});