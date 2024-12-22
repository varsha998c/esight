$(document).ready(function () {
    $(".features-list").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    });
    $("#hamburgerMenu").click(function () {
        $(".nav-links").toggleClass("active");
    });
    $(document).click(function (e) {
        if (!$(e.target).closest("#hamburgerMenu, .nav-links").length) {
            $(".nav-links").removeClass("active");
        }
    });
});
$(".one-time").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
});
document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = Object.fromEntries(formData.entries());

        fetch("https://example.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Thank you for contacting us!");
                    event.target.reset();
                } else {
                    alert("There was an error. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to submit. Please try again.");
            });
    });
