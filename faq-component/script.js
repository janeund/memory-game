const data = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
]

// Display answers function
const displayFaqItems = () => {
  data.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('faq-item');
    if (index === 0) {
      listItem.classList.add('active');
    }
    listItem.innerHTML = `
    <div class="faq-header">
      <span class="faq-icon">
        <i class="arrow"></i>
      </span>
      <h2 class="faq-title">${item.question}</h2>
    </div>
    <div class="faq-content">
      <p class="faq-answer">${item.answer}</p>
    </div>`;
    const faqList = document.querySelector('.faq-list');
    faqList.appendChild(listItem);      
  });
  
}

// Event listener on questions
const clickHandler = () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    })
}

const init = () => {
  displayFaqItems();
  clickHandler();
}

document.addEventListener('DOMContentLoaded', init);