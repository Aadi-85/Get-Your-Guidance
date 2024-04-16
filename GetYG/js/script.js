// Career options data (example)
const careerOptions = {
    class10: {
        title: "Career Options After Class 10th",
        options: [
            "Engineering",
            "Medicine",
            "Commerce and Business Administration",
            "Arts and Humanities"
        ]
    },
    class12: {
        title: "Career Options After Class 12th",
        options: [
            "Computer Science",
            "Electronics Engineering",
            "Civil Engineering",
            "Mechanical Engineering"
        ]
    },
    engineering: {
        title: "Engineering",
        options: [
            { name: "Computer Science Engineering", link: "https://example.com/cs-engineering" },
            { name: "Electronics and Communication Engineering", link: "https://example.com/ece-engineering" },
            { name: "Mechanical Engineering", link: "https://example.com/mechanical-engineering" },
            { name: "Civil Engineering", link: "https://example.com/civil-engineering" },
            { name: "Chemical Engineering", link: "https://example.com/chemical-engineering" }
        ]
    },
    medicine: {
        title: "Medicine",
        options: [
            { name: "MBBS", link: "https://example.com/mbbs" },
            { name: "BDS", link: "https://example.com/bds" },
            { name: "Pharmacy", link: "https://example.com/pharmacy" },
            { name: "Nursing", link: "https://example.com/nursing" },
            { name: "Physiotherapy", link: "https://example.com/physiotherapy" }
        ]
    },
    commerce: {
        title: "Commerce and Business Administration",
        options: [
            { name: "BBA (Bachelor of Business Administration)", link: "https://example.com/bba" },
            { name: "B.Com (Bachelor of Commerce)", link: "https://example.com/bcom" },
            { name: "CA (Chartered Accountancy)", link: "https://example.com/ca" },
            { name: "CFA (Chartered Financial Analyst)", link: "https://example.com/cfa" },
            { name: "MBA (Master of Business Administration)", link: "https://example.com/mba" }
        ]
    },
    arts: {
        title: "Arts and Humanities",
        options: [
            { name: "BA (Bachelor of Arts)", link: "https://example.com/ba" },
            { name: "BFA (Bachelor of Fine Arts)", link: "https://example.com/bfa" },
            { name: "Literature", link: "https://example.com/literature" },
            { name: "History", link: "https://example.com/history" },
            { name: "Psychology", link: "https://example.com/psychology" }
        ]
    }
};

// Function to display career options
function displayCareerOptions(level) {
    const options = careerOptions[level].options;
    const title = careerOptions[level].title;
    const careerOptionsDiv = document.getElementById("career-options");

    // Clear previous options
    careerOptionsDiv.innerHTML = "";

    // Create title element
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    careerOptionsDiv.appendChild(titleElement);

    // Create list element
    const listElement = document.createElement("ul");

    // Add options to the list
    options.forEach(option => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = option.name || option;
        link.href = option.link || "#";
        listItem.appendChild(link);
        listElement.appendChild(listItem);
    });

    // Append list to careerOptionsDiv
    careerOptionsDiv.appendChild(listElement);
}

// Event listeners for class buttons
document.getElementById("class-10-button").addEventListener("click", function() {
    displayCareerOptions("class10");
});

document.getElementById("class-12-button").addEventListener("click", function() {
    displayCareerOptions("class12");
});