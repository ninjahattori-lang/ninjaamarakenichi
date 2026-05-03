document.getElementById("censusForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};

    // Handle multiple values (like checkboxes)
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            data[key] += ", " + value;
        } else {
            data[key] = value;
        }
    }

    console.log("Sending Data:", data);  // For debugging

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyNf5npWvzgoNSutHpX5Lr5Ut5DzJhObyBCVG4oV19n78zpFAvhD4jfaEp2DkKruQCicA/exec", {
            method: "POST",
            body: formData   // ← Changed to FormData (Important!)
            // Do NOT set Content-Type header when using FormData
        });

        if (response.ok) {
            alert("✅ Survey Saved Successfully!");
            document.getElementById("censusForm").reset();
        } else {
            alert("❌ Failed to save. Please try again.");
            console.error("Error:", response.status);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("❌ Network Error! Check your internet or script URL.");
    }
});