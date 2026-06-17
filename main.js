document.addEventListener("DOMContentLoaded", function () {
    
    
    // 1. SCROLL FADE-IN INTERACTION (Intersection Observer)
    
    const fadeElements = document.querySelectorAll(".scroll-fade");
    
    const scrollOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, scrollOptions);

    fadeElements.forEach(element => {
        scrollObserver.observe(element);
    });
  });