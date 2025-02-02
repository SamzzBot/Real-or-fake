// ✅ Form Handling untuk pengiriman data
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman reload

    const formData = new FormData(form);

    fetch("https://formspree.io/f/xbldykzy", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Failed to send message!",
                icon: "error"
            });
        }
    })
    .catch(error => {
        console.error("Error:", error);
        Swal.fire({
            title: "Error!",
            text: "Something went wrong!",
            icon: "error"
        });
    });
});

// ✅ Menangani Resume Button Switching
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

// Menangani Portfolio
document.querySelectorAll(".portfolio-box").forEach(box => {
    box.addEventListener("click", () => {
        // Tutup semua layer yang sedang aktif dengan animasi turun
        document.querySelectorAll(".portfolio-layer.active").forEach(activeLayer => {
            activeLayer.classList.add("closing");
            setTimeout(() => {
                activeLayer.classList.remove("active", "closing");
            }, 500); // Sesuaikan dengan durasi animasi
        });

        // Tampilkan layer yang diklik
        let layer = box.querySelector(".portfolio-layer");
        if (!layer.classList.contains("active")) {
            layer.classList.add("active");
        }
    });
});

// ✅ Menangani Scroll dan Navigasi Aktif
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
        }
    });
};

// ✅ Menangani Menu Navigasi di Mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});