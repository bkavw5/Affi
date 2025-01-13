// Shopee Affiliate Marketing Script
// This script generates affiliate links for Shopee products, tracks user clicks,
// opens a popup and a popunder, and repeats the process with each user every hour.

// Replace with your Shopee Affiliate ID
const affiliateId = '17378330065';

// Function to generate affiliate link
function generateAffiliateLink(productUrl) {
    if (!productUrl.includes('shopee.vn')) {
        console.error('Invalid Shopee product URL');
        return null;
    }

    const url = new URL(productUrl);
    url.searchParams.set('af', affiliateId);
    return url.toString();
}

// Function to open a popup
function openPopup(url) {
    window.open(url, '_blank', 'width=800,height=600');
}

// Function to open a popunder after a delay
function openPopunder(url, delay) {
    setTimeout(() => {
        const iframe = document.createElement('iframe');
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.opacity = '0';
        iframe.src = url;
        document.body.appendChild(iframe);

        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 10000); // Remove the iframe after 10 seconds
    }, delay);
}

// Main logic to handle popup and popunder
function handleUserInteraction(productUrl) {
    const affiliateLink = generateAffiliateLink(productUrl);
    if (affiliateLink) {
        console.log('Generated Affiliate Link:', affiliateLink);
        
        // Open popup immediately
        openPopup(affiliateLink);

        // Open popunder after 1 minute (60000 ms)
        openPopunder(affiliateLink, 60000);

        // Set a timeout to allow this process again after 1 hour (3600000 ms)
        setTimeout(() => {
            console.log('Re-enabling affiliate process for this user.');
        }, 3600000);
    }
}

// Example usage
const productUrl = 'https://s.shopee.vn/4VJb58jLIX';
handleUserInteraction(productUrl);