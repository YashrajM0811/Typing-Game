const typingText = document.querySelector(".typing-text p");
const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span b");
const cpm = document.querySelector(".cpm span b");
const btn = document.getElementById("btn");

// Set Values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  const paragraph = [
    "The Indian government recently announced a new initiative to boost the country's digital economy. This includes investments in artificial intelligence, machine learning, and blockchain technology to enhance various sectors such as healthcare, agriculture, and education.",
    "India is set to become the third-largest economy in the world by 2030, according to recent projections. This growth is driven by a robust manufacturing sector, a burgeoning middle class, and significant advancements in technology and innovation.",
    "The Indian Space Research Organisation (ISRO) successfully launched the Gaganyaan mission, marking India's first human spaceflight. This milestone highlights India's growing capabilities in space exploration and its ambition to join the ranks of spacefaring nations.",
    "In response to the global climate crisis, India has committed to achieving net-zero carbon emissions by 2070. The country is focusing on renewable energy sources such as solar and wind power to reduce its dependence on fossil fuels and promote sustainable development.",
    "The Indian government has introduced a series of economic reforms to attract foreign direct investment. These reforms aim to create a more business-friendly environment, streamline regulatory processes, and provide incentives for international companies to set up operations in India.",
    "India's tech startups have seen a surge in funding and innovation, particularly in the fields of fintech, edtech, and healthtech. These startups are leveraging cutting-edge technologies to provide innovative solutions and services, contributing to India's digital transformation.",
    "The Indian automotive industry is undergoing a significant transformation with the adoption of electric vehicles (EVs). Government policies and incentives are encouraging the production and use of EVs, aiming to reduce pollution and promote sustainable mobility.",
    "India's vaccination drive against COVID-19 has been one of the largest in the world. The government has successfully administered millions of doses, aiming to achieve herd immunity and mitigate the impact of the pandemic on the country's population.",
    "The Indian education system is embracing digital learning in response to the challenges posed by the COVID-19 pandemic. Online classes, digital resources, and e-learning platforms are becoming increasingly popular, transforming the way education is delivered in the country.",
    "India's cultural heritage continues to gain international recognition. Efforts to preserve and promote traditional arts, crafts, and practices are being supported by both the government and private organizations, highlighting the country's rich and diverse cultural legacy.",
  ];

  const randomIndex = Math.floor(Math.random() * paragraph.length);
  typingText.innerHTML = " ";
  for (const char of paragraph[randomIndex]) {
    // console.log(char);
    typingText.innerHTML += `<span>${char}</span>`;
  }
  typingText.querySelectorAll("span")[0].classList.add("active");
  document / addEventListener("keydown", () => input.focus());
  typingText.addEventListener("click", () => {
    input.focus();
  });
}

// Handle user input
function initTyping() {
    const char = typingText.querySelectorAll("span");
    const typedChar = input.value.charAt(charIndex);
    if (charIndex < char.length && timeLeft > 0) {
      if (!isTyping) {
        timer = setInterval(initTime, 1000);
        isTyping = true;
      }
  
      if (char[charIndex].innerText === typedChar) {
        char[charIndex].classList.add("correct");
      } else {
        mistake++;
        char[charIndex].classList.add("incorrect");
      }
      charIndex++;
      char[charIndex].classList.add("active");
      mistakes.innerText = mistake;
      cpm.innerHTML = charIndex - mistake;
    } else {
      clearInterval(timer);
      isTyping = false; // Add this line
      input.value = '';
    }
  }
  
  function initTime() {
    if (timeLeft > 0) {
      timeLeft--;
      time.innerText = timeLeft;
      let wpmValue = Math.round(((charIndex - mistake) / 5) / ((maxTime - timeLeft) / 60)); // Calculate WPM
      wpm.innerText = wpmValue; // Update WPM element
    } else {
      clearInterval(timer);
    }
  }

function reset(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText = timeLeft;
    input.value = '';
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    wpm.innerText = 0;
    cpm.innerText = 0;
    mistakes.innerText = 0;
}

input.addEventListener("input", initTyping);
btn.addEventListener("click", reset);


loadParagraph();
