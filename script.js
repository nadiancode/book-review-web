const books = [
  { 
    id: 1, 
    title: "Laskar Pelangi", 
    desc: "Perjalanan anak-anak Belitung dalam mengejar pendidikan di tengah keterbatasan.",
    reviews: []
  },
  { 
    id: 2, 
    title: "Negeri 5 Menara", 
    desc: "Kisah enam santri dengan mimpi besar dan semangat Man Jadda Wajada.",
    reviews: []
  },
  { 
    id: 3, 
    title: "Dilan 1990", 
    desc: "Kisah cinta remaja Bandung yang ringan dan penuh kenangan SMA.",
    reviews: []
  },
  { 
    id: 4, 
    title: "5 CM", 
    desc: "Perjalanan lima sahabat menaklukkan Gunung Semeru untuk meraih mimpi.",
    reviews: []
  },
  { 
    id: 5, 
    title: "Bumi", 
    desc: "Petualangan Raib, Seli, dan Ali di dunia paralel dengan kekuatan unik.",
    reviews: []
  }
];

let selectedBook = null;

window.onload = function() {
  displayBooks(books);
};

function displayBooks(bookArray) {
  const container = document.getElementById('book-container');
  container.innerHTML = '';
  bookArray.forEach(book => {
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.desc}</p>
      <button onclick="selectBook(${book.id})">Lihat / Ulas Buku</button>
      <div id="reviews-${book.id}">
        ${book.reviews.length > 0 
          ? book.reviews.map(r => `<div class='review'><p>${r.text}</p><small>⭐${r.rating}</small></div>`).join('')
          : "<p><i>Belum ada ulasan</i></p>"}
      </div>
    `;
    container.appendChild(div);
  });
}

function selectBook(id) {
  selectedBook = books.find(b => b.id === id);
  document.getElementById('selectedBookTitle').textContent = selectedBook.title;
  document.getElementById('review-form').style.display = 'block';
}

function addReview() {
  if (!selectedBook) return alert('Pilih buku dulu!');
  const text = document.getElementById('reviewText').value;
  const rating = document.getElementById('rating').value;
  if (!text || !rating) return alert('Isi semua kolom ya!');
  selectedBook.reviews.push({ text, rating });
  document.getElementById('reviewText').value = '';
  document.getElementById('rating').value = '';
  displayBooks(books);
}

function searchBook() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = books.filter(b => b.title.toLowerCase().includes(input));
  displayBooks(filtered);
}
