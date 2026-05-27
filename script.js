// Sample image data for the gallery
const images = [
  {
    src: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=800&q=80',
    alt: 'Mountain landscape'
  },
  {
    src: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=800&q=80',
    alt: 'Portrait of a woman'
  },
  {
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    alt: 'City skyline at night'
  },
  {
    src: 'https://images.unsplash.com/photo-1504198266289-1659872e6590?auto=format&fit=crop&w=800&q=80',
    alt: 'Desert dunes'
  },
  {
    src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80',
    alt: 'Wedding ceremony'
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    alt: 'Macro flower'
  }
];

function loadGallery() {
  const grid = document.getElementById('gallery-grid');
  images.forEach(img => {
    const imageEl = document.createElement('img');
    imageEl.src = img.src;
    imageEl.alt = img.alt;
    grid.appendChild(imageEl);
  });
}

function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadGallery();
  document.getElementById('contact-form').addEventListener('submit', handleContactForm);
});
