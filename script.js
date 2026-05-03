// script.js - Clean & Stable Version
document.getElementById("censusForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = data[key] ? data[key] + ", " + value : value;
    }

    console.log("Sending Data:", data);

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyNf5npWvzgoNSutHpX5Lr5Ut5DzJhObyBCVG4oV19n78zpFAvhD4jfaEp2DkKruQCicA/exec", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("✅ Survey Saved Successfully!");
            this.reset();
        } else {
            alert("❌ Failed to save. Try again.");
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("❌ Network Error! Please re-deploy your Google Script with 'Anyone' access.");
    }
});
