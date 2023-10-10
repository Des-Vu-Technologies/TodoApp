 // Function to fetch contributor data from GitHub API
 async function fetchContributors() {
    const apiUrl = "https://api.github.com/repos/Des-Vu-Technologies/TodoApp/contributors";

    try {
        const response = await fetch(apiUrl);
        const contributorsData = await response.json();

        // Loop through the contributor data and create HTML elements
        const contributorsContainer = document.getElementById("contributors");
        contributorsData.forEach((contributor) => {
            const contributorDiv = document.createElement("div");
            contributorDiv.className = "contributor";
            const img = document.createElement("img");
            img.src = contributor.avatar_url;
            img.alt = contributor.login;
            contributorDiv.appendChild(img);
            contributorsContainer.appendChild(contributorDiv);
        });
    } catch (error) {
        console.error("Error fetching contributor data:", error);
    }
}

// Call the fetchContributors function to load contributor data
fetchContributors();