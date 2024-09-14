function opentab() {
    var tabName = event.target.dataset.tab;

    // Get all elements with class name 'tab-contents' and hide them
    var tabContents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Get all elements with class name 'tab-links' and remove the 'active-link' class
    var tabLinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    // Show the tab content corresponding to the clicked tab link
    document.getElementById(tabName).style.display = "block";

    // Add the 'active-link' class to the clicked tab link
    event.target.classList.add("active-link");
}

// Add event listeners to all tab links
var tabLinks = document.querySelectorAll('.tab-links');
tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener('click', opentab);
});
