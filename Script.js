document.addEventListener("DOMContentLoaded", function() {
  const analyzeBtn = document.getElementById("analyzeBtn");
  const resultsPopup = document.getElementById("resultsPopup");
  const closeBtn = document.querySelector(".close");

  analyzeBtn.addEventListener("click", function() {
    const codeForm = document.getElementById("codeForm");
    const formData = new FormData(codeForm);
    fetch("/validate", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      showResultsPopup(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });

  closeBtn.addEventListener("click", function() {
    resultsPopup.style.display = "none";
  });

  function showResultsPopup(data) {
    const analysisResults = document.getElementById("analysisResults");
    if (data.error) {
      analysisResults.textContent = "Error: " + data.error;
    } else {
      analysisResults.textContent = "No errors found. Code is valid!";
    }
    resultsPopup.style.display = "block";
  }
});
