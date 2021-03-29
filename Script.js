let acc = document.querySelectorAll("#accordion");
let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");


        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        arrow[i].classList.toggle("activeb")
    });
}

