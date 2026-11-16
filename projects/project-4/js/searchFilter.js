class Filter {
    constructor(inputId, attributeName) {
        // Find the search input box and all elements matching the target attribute
        this.searchInput = document.querySelector(`#${inputId}`);
        this.galleryLinks = document.querySelectorAll(`[${attributeName}]`);

        // Listen for typing ('keyup') or clearing out text ('search') in the input box
        this.searchInput.addEventListener('keyup', (event) => this.handleSearch(event));
        this.searchInput.addEventListener('search', (event) => this.handleSearch(event));
    }

    handleSearch(event) {
        // Get what the user typed and convert it to lowercase
        const searchTerm = event.target.value.toLowerCase();

        // Loop through every image link in the gallery
        this.galleryLinks.forEach(link => {
            // Get the data-caption text and convert it to lowercase
            const captionText = link.getAttribute('data-caption').toLowerCase();

            // If the caption includes the search term (or search is empty), show it. Otherwise, hide it.
            if (captionText.includes(searchTerm) || !searchTerm) {
                link.style.display = ''; // Show
            } else {
                link.style.display = 'none'; // Hide
            }
        });
    }
}