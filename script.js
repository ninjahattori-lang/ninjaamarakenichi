document.addEventListener("DOMContentLoaded", function() {
    
    console.log("✅ Script Loaded Successfully");

    const form = document.getElementById("censusForm");
    
    if (form) {
        console.log("✅ Form Found");
        
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log("✅ Submit Button Clicked!");
            alert("Form Submit is Working! ✅");
        });
    } else {
        console.log("❌ Form Not Found");
        alert("Form ID not found!");
    }
});
