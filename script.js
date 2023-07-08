/** @format */

const content = document.getElementById("content");
const showcontent = document.getElementById("showcontent");
const btn = document.getElementById("read-more-btn");
const button = document.getElementById("show-more-btn");

btn.addEventListener("click", () => {
  content.classList.toggle("expanded");
  if (content.classList.contains("expanded")) {
    btn.textContent = "Read Less";
  } else {
    btn.textContent = "Read More";
  }
});
button.addEventListener("click", () => {
  showcontent.classList.toggle("expanded");
  if (showcontent.classList.contains("expanded")) {
    button.textContent = "Read Less";
  } else {
    button.textContent = "Read More";
  }
});
