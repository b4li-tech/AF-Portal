function saveAnalysis() {

    const analysis = {

        object:
        document.getElementById("analysisObject").value,

        torA:
        document.getElementById("torA").value,

        torB:
        document.getElementById("torB").value,

        torC:
        document.getElementById("torC").value,

        synteza:
        document.getElementById("synteza").value,

        date:
        new Date().toLocaleString()

    };

    let analyses =
JSON.parse(
localStorage.getItem("AF_ANALYSES")
) || [];

analyses.push(analysis);

localStorage.setItem(
"AF_ANALYSES",
JSON.stringify(analyses)
);
    );

    alert("✅ Analiza została zapisana");
}
function loadLibrary() {

const analyses =
JSON.parse(
localStorage.getItem("AF_ANALYSES")
) || [];

const container =
document.getElementById(
"analysisList"
);

if(!container) return;

container.innerHTML = "";

analyses.forEach((analysis,index)=>{

container.innerHTML += `

<div class="analysis-card">

<h3>${analysis.object}</h3>

<p>${analysis.date}</p>

<hr>

</div>

`;

});

}