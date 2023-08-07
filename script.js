

const newQuoteButton = document.querySelector('#generate');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = "https://api.quotable.io/random";

async function getQuote() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.content);
  } catch (err) {
    console.log(err);
    alert('Failed to fetch new quote');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#quote');
  quoteText.textContent = quote;
}
