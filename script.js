function calculate() {
    let target = parseInt(document.getElementById("target").value);
    let actual = parseInt(document.getElementById("actual").value);
    let percentage = Math.round((actual / target) * 100);
    let result = document.getElementById("result");
    result.innerHTML = `Achievement: ${percentage}%`;
}