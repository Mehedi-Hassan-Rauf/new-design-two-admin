document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".editable-section");
    sections.forEach((section, index) => {
        if (index !== 0) section.classList.add("hidden");
    });

    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("data-target");

            sections.forEach(section => section.classList.add("hidden"));
            document.getElementById(targetId).classList.remove("hidden");
        });
    });
});