// Get the modal element
var modal = document.getElementById("errorModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// Display error message in modal
function showError(message) {
    var errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = message;
    modal.style.display = "block";
}

// Submit form function
document.getElementById("pollForm").addEventListener("submit", function(event) {
    var selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) {
        showError("Please select a choice.");
        event.preventDefault(); // Prevent form submission
    }
});