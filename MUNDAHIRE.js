
const jobs = [
    { title: 'Delivery Driver', location: 'Dar es Salaam', schedule: 'Part-Time', salary: 'Tsh20000/day' },
    { title: 'Data Entry Clerk', location: 'Dar es Salaam', schedule: 'Part-Time', salary: 'Tsh15000/day' },
    { title: 'Waiter/Waitress', location: 'Dar es Salaam', schedule: 'Part-Time', salary: 'Tsh10000/day' }
];


// Function to display job listings
// Function to display job listings with checkboxes for selection

function displayJobListings() {
    const jobListingsContainer = document.getElementById('jobListings');
    let listingsHTML = '';

    jobs.forEach((job, index) => {
        listingsHTML += `
            <div class="job">
                <input type="checkbox" id="job${index}" name="selectedJobs" value="${job.title}">
                <label for="job${index}">
                    <h3>${job.title}</h3>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p><strong>Schedule:</strong> ${job.schedule}</p>
                    <p><strong>Salary:</strong> ${job.salary}</p>
                </label>
            </div>
        `;
    });

    jobListingsContainer.innerHTML = listingsHTML;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


// Handle form submission to apply selected jobs
document.getElementById('jobSelectionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const selectedJobs = Array.from(document.querySelectorAll('input[name="selectedJobs"]:checked'))
                            .map(checkbox => checkbox.value);

    if (selectedJobs.length > 0) {
        // Dummy implementation: display selected jobs (you can replace this with your own implementation)
        alert('Selected jobs: ' + selectedJobs.join(', '));
    } else {
        alert('Please select at least one job to apply.');
    }

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Dummy implementation: log form values to console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Display success message (you can replace this with your own implementation)
    alert('Your message has been sent successfully!');
});

// Display job listings when the page loads
window.addEventListener('DOMContentLoaded', displayJobListings);
