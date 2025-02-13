document.addEventListener("DOMContentLoaded", function () {
    // Lead form validation
    const form = document.getElementById("leadForm");
    const messageContainer = document.createElement("p");
    messageContainer.className = "text-green-600 font-bold mt-2 hidden";
    form.appendChild(messageContainer);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let country = document.getElementById("country").value;

        if (validateForm(name, email, phone, country)) {
            messageContainer.textContent = "🎉 Application submitted successfully!";
            messageContainer.classList.remove("hidden");
            form.reset(); 
        }
    });

    function validateForm(name, email, phone, country) {
        if (!name || !email || !phone || !country) {
            alert("Please fill all fields correctly.");
            return false;
        }

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert("Please enter a valid name.");
            return false;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return false;
        }

        return true;
    }

    // Initialize Swiper for country carousel
    const swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Accordion for Admission Process
    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("hidden");
            this.classList.toggle("active");
        });
    });

    // Floating WhatsApp button
    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/1234567890";
    whatsappButton.className = "fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg";
    whatsappButton.innerHTML = "📲 Chat with Us";
    document.body.appendChild(whatsappButton);
});
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Default for small screens
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
        }
    });
});

