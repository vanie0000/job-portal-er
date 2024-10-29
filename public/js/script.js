// Sample job data for demonstration
const jobs = [
    { title: "Software Engineer", location: "New York", type: "Full-time" },
    { title: "Data Analyst", location: "San Francisco", type: "Part-time" },
    { title: "Product Manager", location: "Remote", type: "Full-time" },
];

// Function to display job listings
function displayJobs(jobsToDisplay) {
    const jobListings = document.getElementById("job-listings");
    jobListings.innerHTML = "";  // Clear previous listings

    jobsToDisplay.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>Location: ${job.location}</p>
            <p>Type: ${job.type}</p>
            <button onclick="applyJob('${job.title}')">Apply Now</button>
        `;
        jobListings.appendChild(jobCard);
    });
}

// Initial display of all jobs
displayJobs(jobs);

// Job filter function
function filterJobs() {
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const jobType = document.getElementById("jobType").value;

    const filteredJobs = jobs.filter(job => {
        return (
            (job.title.toLowerCase().includes(keyword) || job.location.toLowerCase().includes(keyword)) &&
            (jobType === "" || job.type === jobType)
        );
    });

    displayJobs(filteredJobs);
}

// Function to handle job applications
function applyJob(jobTitle) {
    alert(`You have applied for the position: ${jobTitle}`);
}

// Form validation for login and registration
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login successful!");
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration successful!");
});
