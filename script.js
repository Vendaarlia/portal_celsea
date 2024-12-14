window.onload = function() {
    gsap.from(".animate-me", { duration: 1.5, opacity: 0, y: 50, ease: "power2.inOut" });
    gsap.from(".txt-freya, .line, .logo, .service, .dcardgm", {
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1.5
    });
    gsap.from(".left-head h1, .left-head h1 span, .left-head p, .right-head h3, .right-head p", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1.5
    });

    gsap.from(".wrapper", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1.5,
    });

    // Trigger the SVG animations immediately after the wrapper animation starts
    const svg = document.querySelectorAll('.link');
    svg.forEach(link => {
        const svgs = link.querySelectorAll('path');
        // Start the SVG animation for each link with a slight delay
        gsap.to(svgs, {
            duration: 0.9,
            scaleY: 0,
            y: 10,
            stagger: 0.001,
            ease: "power2.out",
            delay: 3, // Match the delay of .wrapper animations
            onComplete: () => {
                // Return to original height and position
                gsap.to(svgs, {
                    duration: 0.7,
                    scaleY: 1,
                    y: 0,
                    stagger: 0.01,
                    ease: "power2.out"
                });
            }
        });
    });

    gsap.to(".bg-profil", {
        duration: 1,
        width: "90%",
        ease: "power2.out",
        delay: 1.5
    });
    gsap.from(".text-figure", {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power2.out",
        delay: 1.5
    });
    gsap.from(".bg-app", {
        duration: 1.5,
        scale: 2,
        ease: "power2.out"
    });

    // New animation for SVG paths on page load
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        const paths = link.querySelectorAll('path'); // Select all paths inside the link

        // Animate SVG paths to scale down and move down on load
        gsap.from(paths, {
            duration: 0.1,
            scaleY: 0, // Scale down to hide
            y: 10, // Move down by 10 units
            stagger: 0.01, // Stagger each path's animation
            ease: "power2.out",
            delay: 1.5 // Match the delay of .wrapper animations
        });
    });

    // Existing hover animation for SVG paths
    links.forEach(link => {
        const paths = link.querySelectorAll('path'); // Select all paths inside the link

        link.addEventListener('mouseenter', () => {
            // Animate height to 0 in staggered manner
            gsap.to(paths, {
                duration: 0.1,
                scaleY: 0, // Scale down to hide
                y: 10, // Move down by 10 units
                stagger: 0.01, // Stagger each path's animation
                ease: "power2.out"
            });

            // Immediately start the return animation with a slight delay
            gsap.to(paths, {
                duration: 0.1,
                scaleY: 1, // Scale back to original height
                y: 0, // Move back to original position
                stagger: 0.01, // Stagger the return animation
                delay: 0.2, // Delay before starting the return animation
                ease: "power2.out"
            });
        });
    });
};


