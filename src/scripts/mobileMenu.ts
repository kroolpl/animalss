function setupMobileMenu() {
    let currentButton: HTMLElement | null = null;
    let currentMenu: HTMLElement | null = null;
    let currentIcons: NodeListOf<Element>;

    function getElements() {
        currentButton = document.getElementById('mobile-menu-button');
        currentMenu = document.getElementById('mobile-menu');
        currentIcons = document.querySelectorAll('.mobile-menu-icon, .mobile-menu-close');
    }

    // ... rest of your mobile menu logic ...
}

// Initialize only when DOM is ready
document.addEventListener('astro:page-load', setupMobileMenu); 