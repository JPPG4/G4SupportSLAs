function calculateVariance() {
	var target = document.getElementById("target").value;
	var actual = document.getElementById("actual").value;
	var variance = ((actual - target) / target) * 100;
	document.getElementById("result").innerHTML = "Variance: " + variance.toFixed(2) + "%";
}
