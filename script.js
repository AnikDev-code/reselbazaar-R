let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showNextTestimonial() {
  testimonials.forEach(t => t.classList.remove("active"));
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}

setInterval(showNextTestimonial, 4000);

// Scroll to Top
const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
