let htmlQuiz = [
    {
      question: "What does HTML stand for _______________ ?",
      options: [
        "Hyper Text Markup Language",
        "Hot Mail",
        "How to Make Lasagna",
        "None of these",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "How many tags are in a regular element?",
      options: ["2 tag", "1 tag", "3 tag", "4 tag"],
      correctAnswer: "2 tag",
    },
    {
      question:
        "What is the difference between an opening tag and a closing tag?",
      options: [
        "Opening tag has a / in front",
        "Closing tag has a / in front",
        "There is no difference",
        "There is major difference",
      ],
      correctAnswer: "Closing tag has a / in front",
    },
    {
      question: "< br / > What type of tag is this?",
      options: ["Break tag", "A broken one", "An opening tag", "An spacing tag"],
      correctAnswer: "Break tag",
    },
    {
      question: "< body > Is this an opening tag or a closing tag?",
      options: [
        "Opening",
        "Closing",
        "Opening n Closing",
        "Both Opening n Closing",
      ],
      correctAnswer: "Opening",
    },
    {
      question: "< / body > Is this an opening tag or a closing tag?",
      options: [
        "Opening",
        "Closing",
        "Opening n Closing",
        "Both Opening n Closing",
      ],
      correctAnswer: "Closing",
    },
    {
      question: "Where is the meta tag only found?",
      options: [
        "The last page",
        "The home page",
        "The second page",
        "None of these",
      ],
      correctAnswer: "The home page",
    },
  
    {
      question: "Which of the following is an example of an empty element?",
      options: ["< img / >", "< img > < / img >", "< / img >", "None of these"],
      correctAnswer: "< img / >",
    },
    {
      question: "What should values always be enclosed in?",
      options: ["Quotation marks", "Commas", "Parenthesis", "< >"],
      correctAnswer: "Quotation marks",
    },
    {
      question: "Where do all items for the same website need to be saved?",
      options: [
        "In the same folder",
        "Where ever is fine",
        "In different folders",
        "In new files",
      ],
      correctAnswer: "In the same folder",
    },
  
    {
      question:
        "What is always a welcome page, and explains the purpose or topic of the site?",
      options: ["Page 4", "Hompage", "Table of contents", "None of these"],
      correctAnswer: "Homepage",
    },
    {
      question: "What does View Source do?",
      options: [
        "Nothing",
        "Brings up a note pad with the HTML code already used for the site.",
        "Open a new website.",
        "Both B and C",
      ],
      correctAnswer:
        "Brings up a note pad with the HTML code already used for the site.",
    },
  ];
  let quizContainer = document.getElementById("quizContainer");
  let quizHeader = document.getElementById("quizHeader");
  let allQuiz = document.getElementById("allQuiz");
  
  let runningQueNum = document.getElementById("runningQueNum");
  let totalQue = document.getElementById("totalQueNum");
  
  let questions = document.getElementById("displayQuestion");
  let options = document.getElementById("optionContainer");
  
  let results = document.getElementById("resultDisplay");
  let percent_age = document.getElementById("percentage");
  
  let indx = 0;
  let marks = 0;
  let started = false;
  
  
  let h4 = document.querySelector("h4");
  document.addEventListener("keypress", function (event) {
    if (started === false) {
      started = true;
      nextBtn.removeAttribute("disabled");
      start(); // Timer is Start
      h4.innerHTML = "Quiz is started";
    } else {
      started = false;
    }
  });
  
  
  let min = 15;
  let sec = 0; 
  
  let interval;
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  
  function start() {
    interval = setInterval(function () {
      if (sec > 0) {
        sec--;
      } else if (min > 0) {
        min--;
        sec = 60;
      }
  
      
      let formattedSec = sec < 10 ? "0" + sec : sec;
      let formattedMin = min < 10 ? "0" + min : min;
  
      seconds.innerHTML = formattedSec + "<small>s</small>";
      minutes.innerHTML = formattedMin + "<small>m</small>";
  
      if (min === 0 && sec === 0) {
        clearInterval(interval);
        Swal.fire("Times Up");
      }
    }, 1000);
  }
  
  function showQuestion() {
    questions.innerHTML = htmlQuiz[indx].question;
    let correctAns = htmlQuiz[indx].correctAnswer;
  
    options.innerHTML = "";
  
    for (let optionsValue of htmlQuiz[indx].options) {
      console.log(optionsValue, correctAns);
  
      options.innerHTML += `<div>
      <h4 class="w-75 mt-2 p-3 rounded" style="background-color: #5F0F40">
      <input class="form-check-input m-1 me-3" style="cursor: pointer" type="checkbox" value="${optionsValue}"name="flexcheckdefault">
      <label class="form-check-label  text-light fw-bold"  style="cursor: pointer">${optionsValue}</label>
      </h4>
      
         </div>
          `;
    }
  
    indx++;
    totalQue.innerHTML = htmlQuiz.length;
    runningQueNum.innerHTML = indx;
  }
  showQuestion();
  
  let nextBtn = document.getElementById("btn");
  nextBtn.addEventListener("click", () => {
  
    console.log("click"), checkAnswer();
  
    result();
  });
  
  
  
  
  
  function checkAnswer() {
    let selectedOptions = document.querySelectorAll(
      'input[name="flexcheckdefault"]:checked'
    );
    let userAnswer = Array.from(selectedOptions).map((option) => option.value);
    let correctAns = htmlQuiz[indx - 1].correctAnswer;
    if (userAnswer.length > 0 && userAnswer[0] === correctAns) {
      marks++;
      console.log(marks);
    }
    
  }
  function result() {
    if (indx === htmlQuiz.length) {
      quizContainer.style.display = "none";
      results.style.display = "block";
  
      let totalPercent_age = (marks / htmlQuiz.length) * 100;
      totalPercent_age = totalPercent_age.toFixed(2 ) + " % ";
      percent_age.innerHTML = totalPercent_age;
      Swal.fire({
        title: "Quiz Completed!" + "\n  Good luck next time",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
  
  
  
    } else {
      showQuestion();
    }
  }
  
  function resetQuiz() {
    indx = 0;
    marks = 0;
    started = false;
    clearInterval(interval);
    quizContainer.style.display = "block";
    results.style.display = "none";
    nextBtn.setAttribute("disabled", true);
    h4.innerHTML = "Press any key to start the quiz";
    minutes.innerHTML = "15<small>m</small>";
    seconds.innerHTML = "00<small>s</small>";
     showQuestion();
  }
  
  let resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", () => {
    resetQuiz()
  
  });
  