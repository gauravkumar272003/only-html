document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Cute Plush Toy',
            image: 'product1.jpg',
            description: 'Soft and cuddly plush toy.',
            price: '$19.99'
        },
        {
            name: 'Adorable Mug',
            image: 'product2.jpg',
            description: 'Start your day with a smile.',
            price: '$9.99'
        },
        {
            name: 'Lovely Notebook',
            image: 'product3.jpg',
            description: 'Jot down your thoughts.',
            price: '$12.99'
        },
        {
            name: 'Charming Keychain',
            image: 'product4.jpg',
            description: 'Carry cuteness everywhere.',
            price: '$5.99'
        },
        // Additional products for the second category
        {
            name: 'Stylish Pen',
            image: 'product5.jpg',
            description: 'Write in style.',
            price: '$4.99'
        },
        {
            name: 'Fancy Sticker',
            image: 'product6.jpg',
            description: 'Decorate your things.',
            price: '$2.99'
        },
        {
            name: 'Cute Backpack',
            image: 'product7.jpg',
            description: 'Carry your essentials.',
            price: '$29.99'
        },
        {
            name: 'Sweet Candy Jar',
            image: 'product8.jpg',
            description: 'Treat yourself.',
            price: '$8.99'
        }
    ];

    const productCategories = document.querySelectorAll('.product-list');

    // Image URLs
    var imageUrls = [
        "download (1).jpeg",
        "download (2).jpeg",
        "download (3).jpeg",
        "download (4).jpeg",
        "download.jpeg",
    ];

    // Function to insert images
    function insertImages() {
        var gallery = document.getElementById("image-gallery");
        imageUrls.forEach(function (url) {
            var img = document.createElement("img");
            img.src = url;
            gallery.appendChild(img);
        });
    }

    // Call the function to insert images
    insertImages();

    // Assuming the first four products go into the first category
    products.slice(0, 4).forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="#" class="btn">Add to Cart</a>
        `;

        productCategories[0].appendChild(productElement);
    });

    // Assuming the next four products go into the second category
    products.slice(4, 8).forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="#" class="btn">Add to Cart</a>
        `;

        productCategories[1].appendChild(productElement);
    });
});
