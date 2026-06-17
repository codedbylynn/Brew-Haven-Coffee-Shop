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
  
   
    // 2. CONTACT FORM MICRO-INTERACTION
    =
    const contactForm = document.querySelector(".contact-form-card form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Turn button into a loading state
            const submitBtn = contactForm.querySelector(".btn-contact-submit");
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            // Simulate server delivery delay
            setTimeout(() => {
                // Beautiful native feedback replacement
                contactForm.innerHTML = `
                    <div class="text-center py-5">
                        <div class="mb-4" style="font-size: 3rem; color: #502416;">✓</div>
                        <h3 class="fw-bold mb-2" style="color: #502416; font-family: 'Playfair Display', serif;">Message Transmitted</h3>
                        <p style="color: #72594A;">Thank you for connecting with us. We will review your inquiry shortly.</p>
                    </div>
                `;
            }, 1200);
        });
    }

    
    // 3. MENU FILTER ENGINE CONSOLIDATION
   
    const filterButtons = document.querySelectorAll(".btn-filter");
    const menuItems = document.querySelectorAll(".menu-item");

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", function () {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");

                const filterValue = this.getAttribute("data-filter");

                menuItems.forEach(item => {
                    if (filterValue === "all" || item.classList.contains(filterValue)) {
                        item.style.display = "block";
                        // Instantly hook into our animation engine
                        setTimeout(() => item.classList.add("appear"), 10);
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    }
});