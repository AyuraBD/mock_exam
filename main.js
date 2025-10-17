// Reset body style
document.body.style.margin = "0";
document.body.style.position = "relative";
document.body.style.display = "flex";
document.body.style.height = "100vh";
document.body.style.justifyContent = 'space-between';
document.body.style.fontFamily = "sans-serif";

// === Sidebar ===
const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.style.left = "0";
sidebar.style.top = "0";
sidebar.style.width = '30%';
sidebar.style.background = '#FFFFFF';
sidebar.style.boxShadow = '2px 0 10px rgba(0,0,0,0.1)';
sidebar.style.transition = 'width 0.3s';
sidebar.style.height = '100vh';
sidebar.style.overflow = "scroll";

// === Top section ===
const topSection = document.createElement('div');
topSection.style.background = '#3B82F6';  // blue color
topSection.style.padding = '15px';
topSection.style.display = 'flex';
topSection.style.flexDirection = 'column';
topSection.style.gap = '10px';

// === Button div ===
const buttonDiv = document.createElement('div');
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'space-between';

// Dashboard Button
const backBtn = document.createElement('button');
backBtn.textContent = '< Back to Dashboard';
backBtn.style.background = '#2563EB';
backBtn.style.color = '#fff';
backBtn.style.border = 'none';
backBtn.style.padding = '10px';
backBtn.style.borderRadius = '6px';
backBtn.style.cursor = 'pointer';
backBtn.style.fontSize = '14px';

// Toggle Button
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '⏪';
toggleBtn.style.background = '#1E40AF';
toggleBtn.style.color = '#fff';
toggleBtn.style.border = 'none';
toggleBtn.style.padding = '10px';
toggleBtn.style.borderRadius = '6px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.fontSize = '14px';

// "Mock Exam" Label
const mockLabel = document.createElement('div');
mockLabel.textContent = 'NBDHE - Mock Exam';
mockLabel.style.color = 'white';
mockLabel.style.fontSize = '18px';
mockLabel.style.fontWeight = 'bold';
mockLabel.style.paddingTop = '30px';
mockLabel.style.paddingBottom = '30px';

topSection.appendChild(buttonDiv);
topSection.appendChild(backBtn);
topSection.appendChild(toggleBtn);
topSection.appendChild(mockLabel);

buttonDiv.appendChild(backBtn);
buttonDiv.appendChild(toggleBtn);

// === Sidebar bottom
const bottomSection = document.createElement('div');
bottomSection.id = 'sidebarBottom';
bottomSection.style.padding = '15px';
bottomSection.style.paddingTop = '20px';

bottomSection.style.fontSize = '16px';
bottomSection.style.fontWeight = '500';
bottomSection.style.color = '#334155';

// Dynamic exam name 
const examDiv = document.createElement('div');
examDiv.id = "examDiv";
examDiv.innerHTML = `
  <h3>Mock Exam</h3>
  <h4 id="examName" style="margin-top:0px;"></h4>
`;


// const examDivHeading = document.createElement('h3');

// const examName = document.createElement('h3');
// examName.id = 'examName';
bottomSection.appendChild(examDiv);

// toggle sidebar
toggleBtn.addEventListener('click', () => {
  const isExpanded = sidebar.style.width === '30%';

  if (isExpanded) {
    sidebar.style.width = '3%';
    topSection.style.padding = "0px";
    backBtn.style.display = 'none';
    mockLabel.style.display = 'none';
    bottomSection.style.display = 'none';
    toggleBtn.textContent = '⏩';
  } else {
    sidebar.style.width = '30%';
    topSection.style.padding = "15px";
    backBtn.style.display = 'block';
    mockLabel.style.display = 'block';
    bottomSection.style.display = 'block';
    toggleBtn.textContent = '⏪';
  }
});

// Append
sidebar.appendChild(topSection);
sidebar.appendChild(bottomSection);
document.body.appendChild(sidebar);

// Main area
const main = document.createElement('div');
main.id = 'main';
main.style.flex = '1';
main.style.width = '70%';
main.style.background = '#F8FAFC';
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.justifyContent = "space-between";
main.style.paddingLeft = '50px';
main.style.paddingRight = '50px';

const loadMockExam = document.createElement('div');
loadMockExam.id = 'loadMockExam';
loadMockExam.style.height = '100%';
loadMockExam.style.display = 'flex';
loadMockExam.style.alignItems = 'center';
loadMockExam.style.justifyContent = 'center';

const startBtn = document.createElement('button');
startBtn.textContent = 'Load Mock Exam';
startBtn.style.padding = '15px 30px';
startBtn.style.fontSize = '18px';
startBtn.style.background = '#3B82F6';
startBtn.style.color = '#fff';
startBtn.style.border = 'none';
startBtn.style.borderRadius = '8px';
startBtn.style.cursor = 'pointer';
startBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';

// When user clicks Start Exam button
startBtn.addEventListener('click', () => {
  const previousResult = JSON.parse(localStorage.getItem('mockExamResult'));

  if (previousResult) {
    // User has taken the exam before
    // renderPreviousResult(previousResult);
  } else {
    // No previous result — start fresh exam
    renderStartExam();
  }
});

main.appendChild(loadMockExam);
loadMockExam.appendChild(startBtn);
document.body.appendChild(main);

function renderStartExam() {
  main.innerHTML = `
    <div style="padding-top:20px; padding-bottom: 20px;">
      <div style="border-bottom:1px solid #050505; margin-bottom: 20px;">
        <h2 style="margin: 0px; margin-bottom: 10px;">Your recent exam activity</h2>
      </div>
      <table style="width: 100%;" cellspacing="0" cellpadding="8">
        <tr style="padding:20px; background-color: #90c3dfff;">
          <th>
            <select>
              <option>How long ago?</option>
              <option>When exactly?</option>
            </select>
          </th>
          <th>Exam Score</th>
          <th>Exam Duration</th>
        </tr>
        <tr>
          <td>14 Hours ago</td>
          <td>0%</td>
          <td>5 Minues</td>
        </tr>
        <tr>
          <td>4 months ago</td>
          <td>76%</td>
          <td>3 hours</td>
        </tr>
      </table>

      <div style="border-bottom:1px solid #90c3dfff; margin-bottom: 20px;">
        <h2 style="margin: 0px; margin-bottom: 10px;">Results of your last exam</h2>
      </div>
      <div style="border: 1px solid gray; border-radius: 10px; margin-bottom: 30px;">
        <h3 style="margin:0px; background-color: #90c3dfff; padding: 15px; border-radius: 10px 10px 0px 0px;">YOUR LAST SCORE</h3>
        <div style="padding: 20px; display: flex; justify-content: between; align-items: center;">
          <div style="width:50%;">
            <p>Score Diagram</p>
          </div>
          <div style="width:50%;">
            <p style="margin-bottom: 15px;">To pass you need to reach 75%</p>
            <button style="background-color: #1073a8ff; padding: 10px; border-radius: 10px;">Retake Exam</button>
          </div>
        </div>
        <p>Last attempt: 14 hours ago</p>
      </div>

      <div style="border: 1px solid gray; border-radius: 10px; margin-bottom:30px;">
        <div style="display: flex; justify-content: space-between; background-color: #90c3dfff; padding: 15px; border-radius: 10px 10px 0px 0px;">
          <h3 style="margin:0px; background-color: #90c3dfff; border-radius: 10px 10px 0px 0px;">CORRECTLY ANSWERED</h3>
          <p style="margin:0px;"><span style="color:green;">0</span>/<span>75</span></p>
        </div>
        <div style="padding: 20px; display: flex; justify-content: between; align-items: center;">
          <div style="width:50%; color:green;">
            <p style="margin-bottom: 15px;">0</p>
            <P>Correct</P>
          </div>
          <div style="width:50%; color: red;">
            <p style="margin-bottom: 15px;">0</p>
            <p>Incorrect</p>
          </div>
        </div>
      </div>

      <div style="border: 1px solid gray; border-radius: 10px;">
        <div style="display: flex; justify-content: space-between; background-color: #90c3dfff; padding: 15px; border-radius: 10px 10px 0px 0px;">
          <h3 style="margin:0px; background-color: #90c3dfff; border-radius: 10px 10px 0px 0px;">YOUR PERFORMANCE BY CATEGORY</h3>
          <p style="margin:0px;"><span style="color:green;">0</span>/<span>75</span></p>
        </div>
        <div style="padding: 20px;">
          <div style="display:flex;align-items:center;gap:15px;background:#f8fafc;padding:15px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.1);max-width:400px;">
            <img 
              src="https://via.placeholder.com/60" 
              alt="Profile Picture" 
              style="width:60px; height:60px; border-radius:50%; object-fit:cover;"
            />
            
            <div style="flex:1; background:#e2e8f0; border-radius:10px; height:12px; overflow:hidden;">
              <div style="height:100%;width:70%;background:#3b82f6;transition:width 0.3s ease;"></div>
            </div>
          </div>
        </div>
      </div>
      
      <button id="startNowBtn" style="padding:10px 20px;font-size:16px;background:#3B82F6;color:#fff;border:none;border-radius:8px;cursor:pointer;">
        Start Now
      </button>
    </div>
  `;
  
  document.getElementById('startNowBtn').addEventListener('click', () => {
    startMockExam();
    fetchQuestions();
  });
}

let questions = [];
let result = {};
let fetchQuestionsTime = {};
let currentQuestionIndex = 0;
let timerInterval = null;
let totalTime = 0;
let flaggedQuestions = [];
let answers = {};
let selectedOptionAnswer = [];

let currentExamId = `exam-${Date.now()}`;
let examData = {
  id: currentExamId,
  totalTime: 0,
  duration: 0,
  answers: []
};

  // Function to fetch questions from API
  async function fetchQuestions() {
    try {
      const response = await fetch('https://6b3kct08il.execute-api.us-east-1.amazonaws.com/qa//exams/bpa?respectOrder=1');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      document.getElementById('examName').textContent = data.result.name;
      questions = data.result?.questions ?? [];
      result = data.result;
      console.log(result);
      // fetchQuestionsTime = data.result ?? {};
      totalTime = data?.result?.duration_seconds;
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }
fetchQuestions();


async function startMockExam() {
  const sidebarBottom = document.getElementById('sidebarBottom');
  sidebarBottom.innerHTML = `
    <div style="padding:10px;">
      <div id="questionHead" style="padding: 15px; box-shadow: 2px 0px 20px 0px; border-radius:10px; margin-bottom: 20px;">
        <h2 id="examName" style="margin-top:0px;"></h2>
        <div>
          <div id="answerProgressWrapper">
            <div id="answerProgressBar"></div>
          </div>
          <p id="answerPercent">0% Answered or checked</p>

        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom:20px;">
          <p style="margin:0px; font-size:18px;">Time left: </p>
          <div id="timer" style="font-size:18px;font-weight:bold;color:#1E40AF;"></div>
        </div>
        <button id="submitExamBtn" style="width:100%;padding:12px 8px;background:skyblue;color:white;border:none;border-radius:6px; margin:auto;">Submit Exam</button>
      </div>
      <div id="questionIndexDiv" style="padding: 15px; box-shadow: 2px 0px 20px 0px; border-radius:10px;">
      </div>
    </div>
  `
  
  currentQuestionIndex = 0;
  main.innerHTML = '';
  await fetchQuestions();
  renderQuestion(currentQuestionIndex);
  renderSidebarBottom();
  startTimer();
  document.getElementById('submitExamBtn').addEventListener('click', submitExam);
}

// Start timer to tract exam time counting
function startTimer() {
  const timerEl = document.getElementById('timer');
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if(totalTime <= 0){
      clearInterval(timerInterval);
      alert("Times Up")
    }else{
      totalTime--;
      const hours = Math.floor(totalTime / 3600);
      const minutes = Math.floor((totalTime % 3600) / 60);
      const seconds = totalTime % 60;
      timerEl.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}: ${String(seconds).padStart(2,'0')}`
    }
  }, 1000);
}

// Sidebar buttons UI
function renderSidebarBottom() {
  const questionIndexDiv = document.getElementById('questionIndexDiv');
  questionIndexDiv.innerHTML = `
      <div id="questionIndex" style="margin-top:10px;display:flex;flex-wrap:wrap;gap:10px; justify-content:center; align-items: center;">
      </div>
  `;

  // 📝 Render index buttons
  const indexContainer = document.getElementById('questionIndex');
  questions.map((q, idx) => {
    const btn = document.createElement('button');
    btn.id = q.qid;
    btn.textContent = idx + 1;
    btn.style.width = '40px';
    btn.style.height = '35px';
    btn.style.border = '1px solid #ddd';
    btn.style.background = idx === currentQuestionIndex ? '#edce32ff' : 'skyblue';
    btn.style.color = idx === currentQuestionIndex ? '#fff' : '#fff';
    btn.addEventListener('click', () => {
      currentQuestionIndex = idx;
      renderQuestion(currentQuestionIndex);
      renderSidebarBottom(); // re-render to update active color    
    });
    indexContainer.appendChild(btn);

    // Change color of answered questions index
    examData.answers.map(answer => {
      if(btn.id === answer.id){
        btn.style.background = '#bfbbbb';
        btn.style.color = 'black';
      }
    });
    selectedOptionAnswer.map(option => {
      if(btn.id === option.id){
        btn.style.background = '#bfbbbb';
        btn.style.color = 'black';
      }
    });
    if(idx === currentQuestionIndex){
      btn.style.background = '#edce32ff';
      btn.style.color = 'white';
    }
  });

  // Flag sidebar index buttons
  flaggedQuestions.map(flaggedQuestion => document.getElementById(flaggedQuestion).style.borderLeft = "6px solid red")
}

// Rendering question
function renderQuestion(index) {
  const q = questions[index];
  
  const optionsDiv = document.createElement('div');
  optionsDiv.id = 'options';
  q.items.forEach((item, idx)=>{
    const select = document.createElement('select');
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
    optionsDiv.appendChild(select);
  });

  main.innerHTML = '';

  const mainHeader = document.createElement('div');
  mainHeader.id = "mainHeader";
  mainHeader.style.backgroundColor = "#d4ecf0";
  mainHeader.style.padding = '10px';
  mainHeader.style.display = "flex";
  mainHeader.style.justifyContent = "end";
  mainHeader.innerHTML = `
    <button id="checkBtn" style="background-color: blue; border:none; color:white; padding: 10px; border-radius: 5px; margin-right: 10px;">Check</button>
    <button id="flagBtn" style="border: 1px solid gray; padding: 7px 10px; border-radius:5px; border-left: 7px solid gray;">Flag for later review</button>
  `;
  const mainQuestions = document.createElement('div');
  mainQuestions.id = "mainQuestions";
  const mainFooter = document.createElement('div');
  mainFooter.id = "mainFooter";
  mainFooter.style.backgroundColor = "#d4ecf0";
  mainFooter.style.padding = '10px';
  mainFooter.style.display = "flex";
  mainFooter.style.justifyContent = "space-between";
  mainFooter.innerHTML = `
    <button id="questionPrev" style="background-color:transparent; border:none;">Previous</button>
    <button id="questionNext" style="background-color:transparent; border:none;">Next</button>
  `;
  main.appendChild(mainHeader);
  main.appendChild(mainQuestions);
  main.appendChild(mainFooter);

  mainQuestions.innerHTML = `
    <div>
      <div style="margin-bottom:10px;">
        <h4 style="color:blue;">Patient (${q?.patient?.comment})</h4>
        <div style="display: flex; gap: 10px;">
          <button id="photoBtn" style="background-color:skyblue; color:white; border:none; padding: 10px; border-radius:5px;">Photo</button>
          <button id="chartBtn" style="background-color:skyblue; color:white; border:none; padding: 10px; border-radius:5px;">Chart</button>
          <button id="radioBtn" style="background-color:skyblue; color:white; border:none; padding: 10px; border-radius:5px;">Radiograph</button>
          <button id="profileBtn" style="background-color:skyblue; color:white; border:none; padding: 10px; border-radius:5px;">Profile</button>
        </div>
        <div style="display:none;" id="imgWrapper">
          <h3 id="imgName"></h3>
          <img id="patientImg" style="width:500px;" src="${q.patient.photo}" alt="patient" />
        </div>
      </div>

      <div style="display:flex; justify-content: space-between; align-items: center;">
        <h3 style="margin:0px;">${q.text}</h3>
        <p style="display: flex; color: gray; margin:0px;">Question <span> [${index +1}]</span></p>
      </div>
      <div id="answersDiv">
        <ul style="list-style: none; padding: 0px;">
          ${q.items.map(
              (item, index) => `
                <li style="padding: 10px;">
                  <label id="optionLabel" style="padding: 10px;">
                    <input type="radio" name="answer-${q.qid}" value="${item}" id="option-${q.qid}-${index}">
                    ${item}
                  </label>
                </li>
              `
            )
            .join('')}
        </ul>
      </div>
      <div id="solutionDiv"></div>
    </div>
  `;

  // Restore previously selected answer if any and update it
  const answered = selectedOptionAnswer.find(option => option.id === q.qid);
  if (answered) {
    const savedInput = document.querySelector(
      `input[name="answer-${q.qid}"][value="${answered.selectedOption}"]`
    );
    if (savedInput) savedInput.checked = true;
  }

  // Question's Image
  const img = document.getElementById('patientImg');
  const imgWrapper = document.getElementById('imgWrapper');
  const imgName = document.getElementById('imgName');
    const buttons = [
      { id: 'photoBtn', key: 'photo' },
      { id: 'chartBtn', key: 'chart' },
      { id: 'radioBtn', key: 'radiogram' },
      { id: 'profileBtn', key: 'profile' }
    ];

    buttons.forEach(btn => {
      document.getElementById(btn.id).addEventListener('click', () => {
        img.src = q.patient[btn.key];
        imgWrapper.style.display = "block";
        imgName.innerText = btn.key;
      });
    });

  // ✅ Check Answer
  document.getElementById('checkBtn').addEventListener('click', () => {
    // Remove the selected answer from the array
    selectedOptionAnswer = selectedOptionAnswer.filter(
      (option) => option.id !== q.qid
    );

    const selected = document.querySelector(`input[name="answer-${q.qid}"]:checked`);
    const radios = document.querySelectorAll(`input[name="answer-${q.qid}"]`);
    const solutionDiv = document.getElementById('solutionDiv');

    document.querySelectorAll(`.answer-icon-${q.qid}`).forEach(el => el.remove());
    radios.forEach(radio => {
      const label = radio.parentElement;
      
      if(radio.value === q.correct_answer){
        const icon = document.createElement('span');
        icon.textContent = `✅`;
        icon.classList.add(`answer-icon-${q.qid}`);
        label.appendChild(icon);
      }
      if(selected && radio === selected && radio.value !== q.correct_answer){
        const icon = document.createElement('span');
        icon.textContent = `❌`;
        icon.classList.add(`answer-icon-${q.qid}`);
        label.appendChild(icon);
      }
      radio.disabled = true;
    });

    
    const existingIndex = examData.answers.findIndex(item => item.id === q.qid);
    if(existingIndex !== -1){
      examData.answers[existingIndex].selectedOption = selected ? selected.value : null;
    } else {
      examData.answers.push({
        id: q.qid,
        selectedOption: selected ? selected.value : null,
        correctAnswer: q.correct_answer
      });
    }
    // let storedAnswers = JSON.parse(localStorage.getItem(currentExamId)) || [];

    // const existingIndex = storedAnswers.findIndex(item => item.id === q.qid);
    // if(existingIndex !== -1){
    //   storedAnswers[existingIndex].selectedOption = selected ? selected.value : null;
    // } else {
    //   storedAnswers.push({
    //     id:q.qid,
    //     selectedOption: selected ? selected.value : null
    //   })
    // }
    
    // localStorage.setItem(currentExamId, JSON.stringify(storedAnswers));

    if (!selected) {
      solutionDiv.innerHTML = `
      <div id="incorrect" style="background-color: #ec8856ff; padding: 20px;">
        <h3>Incorrect</h3>
        ${q.solution_html}
      </div>
    `
    } else if(selected.value === q.correct_answer) {
      solutionDiv.innerHTML = `
      <div id="correct" style="background-color: #c0eddbff; padding: 20px;">
        <h3>Correct</h3>
        ${q.solution_html}
      </div>
    `
    } else {
      solutionDiv.innerHTML = `
      <div id="incorrect" style="background-color: #ec8856ff; padding: 20px;">
        <h3>Incorrect</h3>
        ${q.solution_html}
      </div>
    `
    }
    // localStorage.setItem(selected.value)
  });

  // 🚩 Flag Question
  document.getElementById('flagBtn').addEventListener('click', () => {
    if (!flaggedQuestions.includes(q.qid)){
      flaggedQuestions.push(q.qid);
      document.getElementById('flagBtn').style.borderLeft = '7px solid red';
    } else {
      flaggedQuestions = flaggedQuestions.filter(qid => qid !== q.qid);
      document.getElementById('flagBtn').style.borderLeft = '7px solid gray';
    }
    renderSidebarBottom(); // highlight flagged
    renderQuestion(currentQuestionIndex);
    console.log(flaggedQuestions);
  });

  const flagBtn = document.getElementById('flagBtn');
  if(flaggedQuestions.includes(q.qid)){
    flagBtn.style.borderLeft = '7px solid red';
  }else{
    flagBtn.style.borderLeft = '7px solid gray';
  }


  // 📝 Navigation Buttons
  const prevBtn = document.getElementById('questionPrev');
  const nextBtn = document.getElementById('questionNext');
  prevBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex > 0){
      main.innerHTML = '';
      currentQuestionIndex--;
      renderQuestion(currentQuestionIndex);
      renderSidebarBottom();
    }
  });
  nextBtn.addEventListener('click', ()=>{
    // When the user select an option and click the next button, we will save the selected option and the id of the question
    // const selected = document.querySelector(`input[name="answer-${q.qid}"]:checked`);
    // const checkedAnswer = examData.answers.find(answer => answer.id === q.qid );
    // if(!checkedAnswer){
    //   if(selected){
    //     const existingIndex = selectedOptionAnswer.findIndex(option => option.id === q.qid);
    //     if(existingIndex !== -1){
    //       selectedOptionAnswer[existingIndex].selectedOption = selected.value;
    //     }else{
    //       selectedOptionAnswer.push({
    //         id:q.qid,
    //         selectedOption: selected.value,
    //         correctAnswer: q.correct_answer
    //       });
    //     }
    //   }
    // }
    
    // And go to next question
    if(currentQuestionIndex < questions.length -1){
      main.innerHTML = '';
      currentQuestionIndex++;
      renderQuestion(currentQuestionIndex);
      renderSidebarBottom();
    }
  });

  const answeredOption = examData.answers.find(option => option.id === q.qid);
  if(answeredOption){
    const savedInput = document.querySelector(`input[name="answer-${q.qid}"][value="${answeredOption.selectedOption}"]`);
    if(savedInput){
      savedInput.checked = true;
    }
    const radios = document.querySelectorAll(`input[name="answer-${q.qid}"]`);
    radios.forEach(radio => {
      radio.disabled = true;
    });

    document.querySelectorAll(`.answer-icon-${q.qid}`).forEach(el => el.remove());
    radios.forEach(radio => {
      const label = radio.parentElement;
      // Correct answer gets
      if (radio.value === answeredOption.correctAnswer) {
        const icon = document.createElement('span');
        icon.textContent = '✅';
        icon.classList.add(`answer-icon-${q.qid}`);
        label.appendChild(icon);
      }
      // User's wrong answer gets
      if (
        answeredOption.selectedOption &&
        radio.value === answeredOption.selectedOption &&
        answeredOption.selectedOption !== answeredOption.correctAnswer
      ) {
        const icon = document.createElement('span');
        icon.textContent = '❌';
        icon.classList.add(`answer-icon-${q.qid}`);
        label.appendChild(icon);
      }
    });

    // Restore solution block
    const solutionDiv = document.getElementById('solutionDiv');
    if (answeredOption.selectedOption === answeredOption.correctAnswer) {
      solutionDiv.innerHTML = `
        <div id="correct" style="background-color: #c0eddbff; padding: 20px;">
          <h3>Correct</h3>
          ${q.solution_html}
        </div>
      `;
    } else {
      solutionDiv.innerHTML = `
        <div id="incorrect" style="background-color: #ec8856ff; padding: 20px;">
          <h3>Incorrect</h3>
          ${q.solution_html}
        </div>
      `;
    }
  }
  // user selects an option
  const selected = document.querySelector(`input[name="answer-${q.qid}"]:checked`);
  if(selected){
    const existingIndex = selectedOptionAnswer.findIndex(opt => opt.id === q.qid);
    if(existingIndex !== -1){
      selectedOptionAnswer[existingIndex].selectedOption = selected.value;
    } else {
      selectedOptionAnswer.push({
        id: q.qid,
        selectedOption: selected.value,
        correctAnswer: q.correct_answer
      });
    }
  }

  const answeredQ = getMergedAnswers().find(ans => ans.id === q.qid);
  if(answeredQ && answeredQ.selectedOption){
    const input = document.querySelector(`input[name="answer-${q.qid}"][value="${answeredQ.selectedOption}"]`);
    if(input) input.checked = true;
  }

  // option selection listener
  document.querySelectorAll(`input[name="answer-${q.qid}"]`).forEach(radio => {
    radio.addEventListener('change', () => {
      const existingIndex = selectedOptionAnswer.findIndex(opt => opt.id === q.qid);
      if(existingIndex !== -1){
        selectedOptionAnswer[existingIndex].selectedOption = radio.value;
      } else {
        selectedOptionAnswer.push({ id: q.qid, selectedOption: radio.value, correctAnswer: q.correct_answer });
      }
      // 🔥 update progress
      updateAnswerProgress();
    });
  });

  console.log(selectedOptionAnswer);
}


// if (flaggedQuestions.includes(q.id)) {
//   btn.style.background = '#facc15'; // yellow for flagged
// }
// if (answers[q.id]) { 
//   btn.style.background = '#16a34a'; // green for answered
// }
// if (idx === currentQuestionIndex) {
//   btn.style.background = '#3B82F6'; // blue for active
//   btn.style.color = '#fff';
// }

// Get merged answers of arrays
function getMergedAnswers() {
  const merged = [...examData.answers];
  selectedOptionAnswer.forEach(sel => {
    const idx = merged.findIndex(ans => ans.id === sel.id);
    if(idx !== -1){
      merged[idx].selectedOption = sel.selectedOption;
    } else {
      merged.push({
        id: sel.id,
        selectedOption: sel.selectedOption,
        correctAnswer: sel.correctAnswer || null
      });
    }
  });

  return merged;
}

// Update Progress bar
function updateAnswerProgress() {
  const mergedAnswers = getMergedAnswers();
  const answeredCount = mergedAnswers.filter(ans => ans.selectedOption).length;
  const totalQuestions = questions.length;
  const percent = totalQuestions ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const bar = document.getElementById('answerProgressBar');
  const percentText = document.getElementById('answerPercent');

  if(bar) bar.style.width = percent + '%';
  if(percentText) percentText.textContent = `${percent}% Answered or checked`;
}




function submitExam() {
  clearInterval(timerInterval);

  examData.finishedAt = new Date().toISOString();
  examData.totalTime = totalTime;
  examData.duration = result.duration_seconds - totalTime;

  // merge selected answers into examData.answers
  examData.answers = getMergedAnswers();

  const allExams = JSON.parse(localStorage.getItem('examResults')) || [];

  // keep only last 2 exams
  if(allExams.length >= 2) allExams.shift();

  allExams.push(examData);
  localStorage.setItem('examResults', JSON.stringify(allExams));

  console.log('✅ Exam submitted:', examData);
}


// function formatDuration(ms) {
//   const totalSec = Math.floor(ms / 1000);
//   const min = Math.floor(totalSec / 60);
//   const sec = totalSec % 60;
//   return `${min}:${sec.toString().padStart(2, '0')}`;
// }







