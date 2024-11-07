const jobs = [
    { title: "Software Engineer", location: "New York", type: "Full-time" },
    { title: "Data Analyst", location: "San Francisco", type: "Part-time" },
    { title: "Product Manager", location: "Remote", type: "Full-time" },
    { title: "Web Developer", location: "Los Angeles", type: "Full-time" },
    { title: "UX Designer", location: "Seattle", type: "Part-time" },
    { title: "DevOps Engineer", location: "Austin", type: "Full-time" },
];

// Function to display job listings
function displayJobs(jobsToDisplay) {
    const jobListings = document.getElementById("job-listings");
    jobListings.innerHTML = "";  // Clear previous listings

    jobsToDisplay.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("col-md-4");
        jobCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${job.title}</h5>
                    <p class="card-text">Location: ${job.location}</p>
                    <p class="card-text">Type: ${job.type}</p>
                    <button class="btn btn-primary" onclick="applyJob('${job.title}')">Apply Now</button>
                </div>
            </div>
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
    const loadingText = document.createElement("p");
    loadingText.textContent = `Applying for ${jobTitle}... Please wait.`;
    loadingText.classList.add("alert", "alert-info"); // Bootstrap alert class
    document.body.appendChild(loadingText);

    setTimeout(() => {
        alert(`You have applied for the position: ${jobTitle}`);
        loadingText.remove(); // Remove loading text after application
    }, 2000); // Simulate a 2-second delay for application
}
