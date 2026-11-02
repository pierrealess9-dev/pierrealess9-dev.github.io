document.querySelectorAll(".resource-list a").forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("is-opened")) return;

    const status = document.createElement("span");
    status.className = "link-status";
    status.textContent = "✓ Aberto";
    link.insertBefore(status, link.querySelector("span"));
    link.classList.add("is-opened");
  });
});
