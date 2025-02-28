function copyToClipboard(number) {
    navigator.clipboard.writeText(number);

    // Tampilkan alert
    let alertBox = document.getElementById("custom-alert");
    alertBox.classList.add("show");

    // Hilangkan setelah 2 detik
    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2000);
}


document.getElementById("go-to-payment").addEventListener("click", function() {
    document.getElementById("detail-modal").classList.add("modal-hidden"); // Tutup modal
    document.getElementById("Payment").scrollIntoView({ behavior: "smooth" }); // Scroll ke Payment
});

