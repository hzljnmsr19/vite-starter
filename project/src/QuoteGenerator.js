export function QuoteGenerator() {
  let currentQuote = '';

  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it's done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Success is not final, failure is not fatal. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
  };

  // Generate initial quote
  generateQuote();

  // Set up the click handler after the component is rendered
  setTimeout(() => {
    const button = document.querySelector('#generate-quote-button');
    const quoteDisplay = document.querySelector('#quote-display');
    
    if (button && quoteDisplay) {
      button.onclick = () => {
        generateQuote();
        quoteDisplay.textContent = currentQuote;
      };
    }
  }, 0);

  return `
    <div class="quote-container">
      <h1>Random Quote Generator</h1>
      <div id="quote-display" class="quote-text">${currentQuote}</div>
      <button id="generate-quote-button">Generate Quote</button>
    </div>
  `;
}