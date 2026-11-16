window.addEventListener('DOMContentLoaded', async function() {
    const galleryContainer = document.getElementById('gallery-container');
    
    try {
        // 1. Fetch and read the captions text file
        const response = await fetch('photo_captions.txt');
        if (!response.ok) throw new Error('Could not load photo_captions.txt');
        const text = await response.text();

        // 2. Split the text file into clean, individual lines
        const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

        let galleryHTML = '';
        
        // 3. Process the lines in blocks of 3 (Filename, Title, Description)
        for (let i = 0; i < lines.length; i += 3) {
            const fileName = lines[i];         
            const title = lines[i + 1] || '';   
            const desc = lines[i + 2] || '';    

            const largeImagePath = `photos/${fileName}`;
            const thumbImagePath = `photos/thumbnails/${fileName}`;

            // Combine Title and Description for the data-caption attribute
            // We use standard text mapping to keep search matching intuitive
            const fullCaption = `${title} — ${desc}`;

            // Append the image block
            galleryHTML += `
                <a href="${largeImagePath}" data-caption="${fullCaption}">
                    <img src="${thumbImagePath}" alt="${title}">
                </a>
            `;
        }

        // 4. Inject into HTML page
        galleryContainer.innerHTML = galleryHTML;

        // 5. Initialize baguetteBox now that images are in the DOM
        baguetteBox.run('.gallery');

        // 6. Initialize the search filter now that the <a> elements exist
        const search = new Filter('search', 'data-caption');

    } catch (error) {
        console.error('Error generating gallery:', error);
        galleryContainer.innerHTML = `<p style="color: red; padding: 20px;">Failed to load gallery assets. Make sure you are using a local web server.</p>`;
    }
});
