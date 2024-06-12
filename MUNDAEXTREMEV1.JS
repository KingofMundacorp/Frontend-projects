document.addEventListener('DOMContentLoaded', function() {
    const clientCheckbox = document.getElementById('clientCheckbox');
    const freelancerCheckbox = document.getElementById('freelancerCheckbox');

    clientCheckbox.addEventListener('change', function() {
        if (this.checked) {
            freelancerCheckbox.checked = false; // Uncheck freelancer checkbox
        }
    });

    freelancerCheckbox.addEventListener('change', function() {
        if (this.checked) {
            clientCheckbox.checked = false; // Uncheck client checkbox
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const clientCheckbox = document.getElementById('clientCheckbox');
    const freelancerCheckbox = document.getElementById('freelancerCheckbox');
    const actionButton = document.getElementById('actionButton');

    clientCheckbox.addEventListener('change', updateButton);
    freelancerCheckbox.addEventListener('change', updateButton);

    function updateButton() {
        if (clientCheckbox.checked) {
            actionButton.textContent = "Join as Freelancer";
        } else if (freelancerCheckbox.checked) {
            actionButton.textContent = "Apply as Freelancer";
        } else {
            actionButton.textContent = "Create Account";
        }
    }
});

