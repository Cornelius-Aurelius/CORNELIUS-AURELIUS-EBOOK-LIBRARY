// Book data
const books = [
  {
    id: 1,
    title: "Colour Blindness in Football",
    category: "sports",
    description: "Explore the hidden dynamics in football through a unique psychological lens.",
    url: "https://cornelius-aurelius.github.io/COLOUR-BLINDNESS-IN-FOOTBALL/"
  },
  {
    id: 2,
    title: "Proof Is King",
    category: "skills",
    description: "Master the art of evidence-based thinking and decision-making.",
    url: "https://cornelius-aurelius.github.io/PROOF-IS-KING-EBOOK/"
  },
  {
    id: 3,
    title: "The Flow State Footballer",
    category: "sports",
    description: "Unlock peak performance through flow state principles in football.",
    url: "https://cornelius-aurelius.github.io/THE-FLOW-STATE-FOOTBALLER/"
  },
  {
    id: 4,
    title: "Why Do I Pick the Wrong Men?",
    category: "relationships",
    description: "Understand the psychology behind attraction and relationship choices.",
    url: "https://cornelius-aurelius.github.io/Why-Do-I-Pick-the-Wrong-Men_-Written-by-an-Attractive-Narcissist/"
  },
  {
    id: 5,
    title: "Why You Keep Choosing the Wrong People",
    category: "relationships",
    description: "Break patterns and make healthier relationship decisions.",
    url: "https://cornelius-aurelius.github.io/WHY-YOU-KEEP-CHOOSING-THE-WRONG-PEOPLE/"
  },
  {
    id: 6,
    title: "The Imagination Book",
    category: "psychology",
    description: "Harness the power of imagination for personal transformation.",
    url: "https://cornelius-aurelius.github.io/THE-IMAGINATION-BOOK/"
  },
  {
    id: 7,
    title: "Become Worth Paying",
    category: "finance",
    description: "Build genuine value and increase your earning potential.",
    url: "https://cornelius-aurelius.github.io/Become-Worth-Paying/"
  },
  {
    id: 8,
    title: "The Continuation Code",
    category: "psychology",
    description: "Decode the patterns that keep you stuck and move forward.",
    url: "https://cornelius-aurelius.github.io/The-Continuation-Code/"
  },
  {
    id: 9,
    title: "Take What You Want",
    category: "skills",
    description: "Develop the mindset and tactics to achieve your goals.",
    url: "https://cornelius-aurelius.github.io/Take-What-You-Want/"
  },
  {
    id: 10,
    title: "The Un-Psychologist",
    category: "psychology",
    description: "Psychology without the academic constraints.",
    url: "https://cornelius-aurelius.github.io/The-Un-Psychologist-Psychology-Without-Permission/"
  },
  {
    id: 11,
    title: "The Numb Achiever",
    category: "psychology",
    description: "Understand success without fulfillment and how to change it.",
    url: "https://cornelius-aurelius.github.io/THE-NUMB-ACHIEVER-EBOOK/"
  },
  {
    id: 12,
    title: "The Systems for Personalised Equilibrium",
    category: "psychology",
    description: "Build sustainable balance in your life and work.",
    url: "https://cornelius-aurelius.github.io/The-Systems-for-Personalised-Equilibrium-Ebook/"
  },
  {
    id: 13,
    title: "The Invisible Tax",
    category: "finance",
    description: "Uncover hidden costs affecting your wealth and wellbeing.",
    url: "https://cornelius-aurelius.github.io/The-Invisible-Tax-Ebook/"
  },
  {
    id: 14,
    title: "High Signal",
    category: "skills",
    description: "Learn to read people, situations, and yourself before it costs you years.",
    url: "https://cornelius-aurelius.github.io/HIGH-SIGNAL-How-to-Read-People-Situations-and-Yourself-Before-It-Costs-You-Years-Ebook/"
  },
  {
    id: 15,
    title: "The Equilibrium Code",
    category: "psychology",
    description: "Diagnose misalignment, reduce drift, and build a life that fits.",
    url: "https://cornelius-aurelius.github.io/THE-EQUILIBRIUM-CODE-How-to-Diagnose-Misalignment-Reduce-Drift-and-Build-a-Life-That-Fits-Ebook"
  },
  {
    id: 16,
    title: "Hard to Replace",
    category: "skills",
    description: "Stay valuable, multiply output, and win in the age of AI.",
    url: "https://cornelius-aurelius.github.io/HARD-TO-REPLACE-How-to-Stay-Valuable-Multiply-Your-Output-and-Win-in-the-Age-of-AI/"
  },
  {
    id: 17,
    title: "Just Get Skills",
    category: "skills",
    description: "The direct path to competence and market value.",
    url: "https://cornelius-aurelius.github.io/JUST-GET-SKILLS-EBOOK/"
  },
  {
    id: 18,
    title: "Rich Yin Poor Yang",
    category: "finance",
    description: "Balance masculine and feminine principles in wealth building.",
    url: "https://cornelius-aurelius.github.io/RICH-YIN-POOR-YANG-EBOOK/"
  },
  {
    id: 19,
    title: "Zero to One",
    category: "skills",
    description: "Create something from nothing—the founder's guide.",
    url: "https://cornelius-aurelius.github.io/ZERO-TO-ONE-EBOOK/"
  },
  {
    id: 20,
    title: "The Identity Paradox",
    category: "psychology",
    description: "Navigate the tension between who you are and who you want to become.",
    url: "https://cornelius-aurelius.github.io/THE-IDENTITY-PARADOX-EBOOK/"
  }
];

// DOM Elements
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const filterChips = document.querySelectorAll('.filter-chip');
const themeToggle = document.getElementById('themeToggle');
const toast = document.getElementById('toast');

let currentFilter = 'all';
let currentSearch = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  initThemeToggle();
  initEventListeners();
});

function renderBooks() {
  let filteredBooks = books;

  // Filter by category
  if (currentFilter !== 'all') {
    filteredBooks = filteredBooks.filter(book => book.category === currentFilter);
  }

  // Filter by search
  if (currentSearch) {
    const searchLower = currentSearch.toLowerCase();
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchLower) ||
      book.description.toLowerCase().includes(searchLower) ||
      book.category.toLowerCase().includes(searchLower)
    );
  }

  // Render
  booksGrid.innerHTML = filteredBooks.map(book => `
    <article class="book-card" role="article">
      <div class="book-cover" aria-label="Book cover placeholder">
        📖
      </div>
      <span class="book-category">${book.category}</span>
      <h2 class="book-title">${book.title}</h2>
      <p class="book-description">${book.description}</p>
      <a href="${book.url}" class="book-link" target="_blank" rel="noopener noreferrer">
        Read Now →
      </a>
    </article>
  `).join('');

  // Show empty state
  if (filteredBooks.length === 0) {
    booksGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <p style="color: var(--muted); font-size: 1.1rem;">No books found matching your search.</p>
      </div>
    `;
  }
}

function initEventListeners() {
  // Search input
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderBooks();
  });

  // Filter chips
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', 'true');
      currentFilter = chip.dataset.filter;
      renderBooks();
    });
  });
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const isDark = savedTheme === 'dark';
  
  if (!isDark) {
    document.body.classList.add('light-mode');
    updateThemeIcon(isDark);
  } else {
    updateThemeIcon(isDark);
  }

  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('light-mode');
    const theme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon(!isDarkMode);
  });
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById('themeIcon');
  const label = themeToggle.querySelector('span:last-child');
  if (isDark) {
    icon.textContent = '🌙';
    if (label) label.textContent = 'Dark';
  } else {
    icon.textContent = '☀️';
    if (label) label.textContent = 'Light';
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Copy to clipboard functionality
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('book-link')) {
    // Links open normally, no toast needed
  }
});