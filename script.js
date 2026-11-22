const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("demo-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("demo-query");
  const response = document.getElementById("demo-response");
  if (!input.value.trim()) {
    response.textContent = "ERROR: Enter a research query first.";
    return;
  }
  response.textContent = "DEMO MODE: Dr. V.I.R.U.S. is not connected to the live AI service on this website yet. Your query was not transmitted or stored.";
  input.value = "";
});
