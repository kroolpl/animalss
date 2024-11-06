function setupParallax() {
    const handleParallax = () => {
        requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            
            document.querySelectorAll<HTMLElement>('.parallax-bg').forEach((element) => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });

            document.querySelectorAll<HTMLElement>('.parallax-content').forEach((element) => {
                const speed = 0.2;
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleParallax, { passive: true });
}

document.addEventListener('astro:page-load', setupParallax); 