// Service details data
const serviceDetails = {
    hemming: {
        title: "Professional Hemming Services",
        description: "Our expert hemming service ensures your garments have the perfect length and fit. We use professional techniques to maintain the original look of your clothing while achieving the desired length.",
        priceList: [
            { service: "Pants Hemming", price: "$15-20" },
            { service: "Skirt Hemming", price: "$20-25" },
            { service: "Dress Hemming", price: "$25-35" },
            { service: "Sleeve Length Adjustment", price: "$20-30" }
        ],
        features: [
            "Precise measurements",
            "Original hem look available",
            "Quick turnaround time",
            "Professional finishing"
        ]
    },
    suit: {
        title: "Professional Suit Tailoring",
        description: "Transform your off-the-rack suit into a custom-fitted masterpiece. Our expert tailors ensure your suit fits perfectly and enhances your professional appearance.",
        priceList: [
            { service: "Jacket Alterations", price: "$45-75" },
            { service: "Pants Alterations", price: "$35-50" },
            { service: "Vest Fitting", price: "$25-35" },
            { service: "Complete Suit", price: "$95-150" }
        ],
        features: [
            "Expert measurement taking",
            "Multiple fitting sessions",
            "High-quality materials",
            "Attention to detail"
        ]
    },
    dress: {
        title: "Dress Alteration Services",
        description: "Whether it's a wedding dress, evening gown, or casual dress, we provide precise alterations to ensure your dress fits perfectly and looks stunning.",
        priceList: [
            { service: "Wedding Dress", price: "$150-300" },
            { service: "Evening Gown", price: "$75-150" },
            { service: "Casual Dress", price: "$35-75" },
            { service: "Rush Service", price: "+50%" }
        ],
        features: [
            "Bridal specialists available",
            "Detailed consultations",
            "Premium materials",
            "Preservation services"
        ]
    },
    repairs: {
        title: "Expert Repair Services",
        description: "Give your damaged garments new life with our professional repair services. We fix tears, replace zippers, and repair seams to restore your clothing to its original condition.",
        priceList: [
            { service: "Seam Repair", price: "$20-30" },
            { service: "Zipper Replacement", price: "$25-40" },
            { service: "Patch Work", price: "$30-50" },
            { service: "Button Replacement", price: "$5-10" }
        ],
        features: [
            "Quality materials used",
            "Invisible mending available",
            "Quick turnaround options",
            "Guaranteed workmanship"
        ]
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('serviceModal');
    const serviceCards = document.querySelectorAll('.service-card');
    const closeModal = document.querySelector('.close-modal');

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.dataset.service;
            const details = serviceDetails[serviceType];
            
            // Populate modal content
            const modalContent = `
                <div class="service-title-banner">
                    <h2>${details.title}</h2>
                </div>
                <span class="close-modal">&times;</span>
                <div class="modal-body">
                    <p>${details.description}</p>
                    
                    <div class="price-list">
                        <h3>Service Pricing</h3>
                        <ul>
                            ${details.priceList.map(item => `
                                <li>
                                    <span>${item.service}</span>
                                    <span>${item.price}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="features">
                        <h3>Service Features</h3>
                        <ul>
                            ${details.features.map(feature => `
                                <li>${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
            
            modal.querySelector('.modal-content').innerHTML = modalContent;
            modal.style.display = 'block';
            // Allow display to take effect before adding show class
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });

            // Reattach close button event listener
            const newCloseButton = modal.querySelector('.close-modal');
            newCloseButton.addEventListener('click', () => {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match the transition duration
            });
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match the transition duration
        }
    });
}); 