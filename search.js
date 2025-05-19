document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const items = document.querySelectorAll(".fruit-item");

  input.addEventListener("input", function () {
    const keyword = input.value.toLowerCase();

    items.forEach(item => {
      const name = item.getAttribute("data-name").toLowerCase();
      item.style.display = name.includes(keyword) ? "block" : "none";
    });
  });
});
