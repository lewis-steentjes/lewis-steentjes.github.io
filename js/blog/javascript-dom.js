
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("example-text-box").value = document.getElementById("blog-title").innerHTML;
})
document.addEventListener('keyup', () => {
    document.getElementById("blog-title").innerHTML = document.getElementById("example-text-box").value;
})