
// Reset body style
document.body.style.margin = "0";
document.body.style.position = "relative";
document.body.style.display = "flex";
document.body.style.height = "100vh";
document.body.style.justifyContent = 'space-between';
document.body.style.overflow = "scroll";

// === Sidebar ===
const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.style.left = "0";
sidebar.style.top = "0";
sidebar.style.width = '400px';
sidebar.style.backgroundColor = '#ffffff';
sidebar.style.boxShadow = '2px 0 10px rgba(0,0,0,0.1)';
sidebar.style.transition = 'width 0.3s';
sidebar.style.height = '100vh';
sidebar.style.overflow = "auto";

// === Top section ===
const topSection = document.createElement('div');
topSection.id = 'sidebarTop';
topSection.style.background = 'var(--color-primary-light)';  // blue color
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
backBtn.style.background = 'var(--color-primary)';
backBtn.style.color = '#fff';
backBtn.style.border = 'none';
backBtn.style.padding = '10px';
backBtn.style.borderRadius = '6px';
backBtn.style.cursor = 'pointer';
backBtn.style.fontSize = '14px';
backBtn.style.fontFamily = "'Noto Sans', sans-serif";




// Inside Toggle Button (to collapse)
const collapseBtn = document.createElement('button');
collapseBtn.textContent = '⏪';
collapseBtn.style.background = 'var(--color-primary)';
collapseBtn.style.color = '#fff';
collapseBtn.style.border = 'none';
collapseBtn.style.padding = '10px';
collapseBtn.style.borderRadius = '6px';
collapseBtn.style.cursor = 'pointer';
collapseBtn.style.fontSize = '14px';

// Outside Toggle Button (to expand)
const expandBtn = document.createElement('button');
expandBtn.id = 'expandBtn';
expandBtn.textContent = '⏩';
expandBtn.style.background = 'var(--color-primary)';
expandBtn.style.color = '#fff';
expandBtn.style.border = 'none';
expandBtn.style.padding = '10px';
expandBtn.style.borderRadius = '6px';
expandBtn.style.cursor = 'pointer';
expandBtn.style.fontSize = '14px';

// Position expand button outside the sidebar
expandBtn.style.position = 'fixed';
expandBtn.style.left = '10px';
expandBtn.style.top = '8px';
expandBtn.style.display = 'none';

document.body.appendChild(expandBtn);
// Collapse sidebar
collapseBtn.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-expanded');
  sidebar.classList.add('sidebar-collapsed');
  collapseBtn.style.display = 'none';
  expandBtn.style.display = 'block';
});

// Expand sidebar
expandBtn.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-collapsed');
  sidebar.classList.add('sidebar-expanded');
  collapseBtn.style.display = 'block';
  expandBtn.style.display = 'none';
});




// "Mock Exam" Label
const mockLabel = document.createElement('h2');
mockLabel.textContent = 'NBDHE - Mock Exam';
mockLabel.style.color = 'white';
mockLabel.style.fontSize = '18px';
mockLabel.style.fontWeight = 'bold';
mockLabel.style.paddingTop = '30px';
mockLabel.style.paddingBottom = '30px';
mockLabel.style.fontFamily = "'Kagins', sans-serif";

topSection.appendChild(buttonDiv);
topSection.appendChild(mockLabel);
buttonDiv.appendChild(backBtn);
buttonDiv.appendChild(collapseBtn);

// === Sidebar bottom
const bottomSection = document.createElement('div');
bottomSection.id = 'sidebarBottom';
bottomSection.style.padding = '15px';
bottomSection.style.paddingTop = '20px';

bottomSection.style.fontSize = '16px';
bottomSection.style.fontWeight = '500';
bottomSection.style.color = 'var(--color-text)';

// Dynamic exam name 
const examDiv = document.createElement('div');
examDiv.id = "examDiv";
examDiv.innerHTML = `
  <h3 style="font-family: var(--font-headings);">Mock Exam</h3>
  <h4 id="examName" style="margin-top:0px; font-family: var(--font-headings);"></h4>
`;

// const examDivHeading = document.createElement('h3');

// const examName = document.createElement('h3');
// examName.id = 'examName';
bottomSection.appendChild(examDiv);

// toggle sidebar
// toggleBtn.addEventListener('click', () => {
//   const isExpanded = sidebar.style.width === '30%';

//   if (isExpanded) {
//     sidebar.style.width = '3%';
//     topSection.style.padding = "0px";
//     backBtn.style.display = 'none';
//     mockLabel.style.display = 'none';
//     bottomSection.style.display = 'none';
//     toggleBtn.textContent = '⏩';
//   } else {
//     sidebar.style.width = '30%';
//     topSection.style.padding = "15px";
//     backBtn.style.display = 'block';
//     mockLabel.style.display = 'block';
//     bottomSection.style.display = 'block';
//     toggleBtn.textContent = '⏪';
//   }
// });

// Append
sidebar.appendChild(topSection);
sidebar.appendChild(bottomSection);
document.body.appendChild(sidebar);

// Main area
const main = document.createElement('div');
main.id = 'main';
main.style.flex = '1';
main.style.width = '70%';
main.style.height = '100vh';
main.style.overflow = 'scroll';
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.justifyContent = "space-between";

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
startBtn.style.background = 'var(--color-primary)';
startBtn.style.color = '#fff';
startBtn.style.border = 'none';
startBtn.style.borderRadius = '8px';
startBtn.style.cursor = 'pointer';
startBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
startBtn.style.fontFamily = "var(--font-mainText)";

// When user clicks Start Exam button
startBtn.addEventListener('click', () => {
  const previousResult = JSON.parse(localStorage.getItem('examResults'));

  if (previousResult) {
    // User has taken the exam before
    // renderPreviousResult(previousResult);
    renderStartExam();
  } else {
    // No previous result — start fresh exam
    startFirstExam();
  }
});

main.appendChild(loadMockExam);
loadMockExam.appendChild(startBtn);
document.body.appendChild(main);

function startFirstExam(){
  main.innerHTML = `
    <div id="firstExamDiv" style="padding: 60px;">
      <h2 style="border-bottom: 1px solid gray; padding-bottom:5px; font-weight:bold; font-family: var(--font-headings)">Results of your last exam</h2>
      <p style="font-family: var(--font-mainText)">Looks like it is your first time taking this exam. Your results will appear here after your first attemp.</p>
      <button id="startFirstExam" style="border:none; background-color: var(--color-primary); color:white; width:100%; padding:10px 0px; cursor: pointer;">Start Exam</button>
    </div>
    `;

    document.getElementById('startFirstExam').addEventListener('click', ()=>{
      startMockExam();
      fetchQuestions();
    });
}

// Previous exam results , last exam result and retake exam
function renderStartExam() {
  const allExams = JSON.parse(localStorage.getItem('examResults')) || [];  

    main.innerHTML = `
      <div id="recentActivity" style="padding:60px 50px;">
        <div style="border-bottom:1px solid #050505; margin-bottom: 20px;">
          <h2 style="margin: 0px; margin-bottom: 10px; font-family: var(--font-headings);">Your recent exam activity</h2>
        </div>
        <table style="width: 100%; margin-bottom:30px; font-family: var(--font-mainText);" cellspacing="2" cellpadding="12">
          <thead style="text-align:left;">
            <tr style="padding:15px 10px; background-color: var(--color-primary-light)">
              <th>
                <select id="timeMode">
                  <option value="ago">How long ago?</option>
                  <option value="exact">When exactly?</option>
                </select>
              </th>
              <th>Exam Score</th>
              <th>Exam Duration</th>
            </tr>
          </thead>
          <tbody id="examTableBody">
            
          </tbody>
        </table>

        <div style="border-bottom:1px solid #050505; margin-bottom: 20px;">
          <h2 style="margin: 0px; margin-bottom: 10px; font-family: var(--font-headings);">Results of your last exam</h2>
        </div>
        <div style="border: 1px solid gray; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="font-family: var(--font-headings); margin:0px; background-color: var(--color-primary-light); padding: 15px; border-radius: 10px 10px 0px 0px;">YOUR LAST SCORE</h3>
          <div style="font-family: var(--font-mainText); display: flex; justify-content: between; align-items: center;">
            <div style="width:50%;">
              <div class="progress-container" style="display: flex; justify-content: center; align-items: center; padding: 20px;">
                <div class="progress-circle" style="width: 120px; height: 120px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 22px; font-weight: bold; color: #333; background: conic-gradient(#ccc 0deg, #ccc 360deg); position: relative;">
                  <span id="percentageText" style="position: absolute;">0%</span>
                </div>
              </div>
            </div>
            <div style="width:50%;">
              <div style="padding:20px;">
                <p style="margin-bottom: 15px;">To pass you need to reach 75%</p>
                <button id="retakeExamBtn" style="background-color: var(--color-primary); padding: 10px 20px; border-radius: 5px; color:white; font-size:16px;border:none;">Retake Exam</button>
              </div>
            </div>
          </div>
          <p style="font-family: var(--font-mainText); padding:20px; margin:0px;">Last attempt: <span id="lastAttemp"></span></p>
        </div>

        <div style="border: 1px solid gray; border-radius: 10px; margin-bottom:30px;">
          <div style="font-family: var(--font-headings); display: flex; justify-content: space-between; background-color: var(--color-primary-light); padding: 15px; border-radius: 10px 10px 0px 0px;">
            <h3 style="margin:0px; border-radius: 10px 10px 0px 0px;">CORRECTLY ANSWERED</h3>
            <p style="margin:0px; font-size:18px;"><span id="correctCountHeader" style="color:green;"></span>/<span id="totalQuestions"></span></p>
          </div>
          <div style="font-family: var(--font-mainText); font-weight: 500; display: flex; justify-content: center; align-items: center;">
            <div style="width:50%; color:green; padding: 20px; ">
              <p id="correctCount" style="margin:0px; margin-bottom: 10px;  font-size:25px;"></p>
              <p style="margin:0px;">Correct</p>
            </div>
            <div style="width:50%; color: red; padding: 20px; ">
              <p id="wrongCount" style="margin:0px; margin-bottom: 10px; font-size:25px;"></p>
              <p style="margin:0px;">Incorrect</p>
            </div>
          </div>
        </div>

        <div style="border: 1px solid gray; border-radius: 10px;">
          <div style="font-family: var(--font-headings); background-color: var(--color-primary-light); padding: 15px; border-radius: 10px 10px 0px 0px;">
            <h3 style="margin:0px; border-radius: 10px 10px 0px 0px;">YOUR PERFORMANCE BY CATEGORY</h3>
          </div>
          <div id="performanceBody" style="font-family: var(--font-mainText); padding: 20px;">

          </div>
        </div>
      </div>
    `;

    // Elements
    const timeMode = document.getElementById('timeMode');
    const examTableBody = document.getElementById('examTableBody');

    // Format time ago
    function timeAgo(date) {
      const now = new Date();
      const diff = Math.floor((now - new Date(date)) / 1000);

      const minutes = Math.floor(diff / 60);
      const hours = Math.floor(diff / 3600);
      const days = Math.floor(diff / 86400);
      const weeks = Math.floor(diff / 604800);
      const months = Math.floor(diff / 2592000);
      const years = Math.floor(diff / 31536000);

      if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
      if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
      if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
      if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
      if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      return 'Just now';
    }

    function formatDuration(seconds) {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      let result = '';
      if (hrs > 0) result += `${hrs} Hours `;
      if (mins > 0) result += `${mins} Minutes `;
      result += `${secs} Seconds`;

      return result.trim();
    }

    // Render table rows
    function renderTable(mode = 'ago') {
      examTableBody.innerHTML = '';

      allExams.slice(0, 2).forEach(exam => {
        const correctCount = exam.answers.filter(a => a.selectedOption === a.correctAnswer).length;
        // const wrongCount = questions.length - correctCount;
        const row = document.createElement('tr');
        const dateText = mode === 'ago'
        ? timeAgo(exam.finishedAt)
        : new Date(exam.finishedAt).toLocaleString('en-US', {
          month: 'short',
          week: 'numeric',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        row.innerHTML = `
          <td>${dateText}</td>
          <td>${Math.round((correctCount / questions.length) * 100)}% ${(correctCount / questions.length) * 100  >= 75 ? '✅' : ''}</td>
          <td>${formatDuration(exam.duration)}</td>
        `;
        examTableBody.appendChild(row);
      });
    };

    // When option changes
    timeMode.addEventListener('change', () => {
      renderTable(timeMode.value);
    });

    // 🧾 Get last exam
    const lastExam = allExams[allExams.length - 1];
    if (lastExam) {
      const correctCount = lastExam.answers.filter(q => q.selectedOption === q.correctAnswer).length;
      const wrongCount = lastExam.answers.filter(q => q.selectedOption !== q.correctAnswer).length;
      const percentage = Math.round((correctCount / questions.length) * 100);
      const circle = document.querySelector('.progress-circle');
      const text = document.getElementById('percentageText');

      // 🌀 Color based on percentage
      let color = '#e74141ff'; // red
      if (percentage >= (questions.length / 100) * 75) color = '#22c55e'; // green
      else if (percentage >= questions.length / 2) color = '#eab308'; // yellow

      const degree = (percentage / 100) * 360;
      circle.style.background = `conic-gradient(${color} ${degree}deg, #e5e7eb ${degree}deg)`;
      text.textContent = `${percentage}%`;
      document.getElementById('correctCountHeader').innerText = correctCount;
      document.getElementById('correctCount').innerText = correctCount;
      document.getElementById('wrongCount').innerText = wrongCount;
      document.getElementById('totalQuestions').innerText = questions.length;
    }

    // Initial render
    renderTable();
    
    document.getElementById('lastAttemp').innerHTML = `
      ${timeAgo(lastExam.finishedAt)}
    `;
    // Performance by category
    const answers = lastExam.answers || [];
    const categoryStats = {};
    answers.forEach(answer => {
      const {category, selectedOption, correctAnswer} = answer;
      if(!categoryStats[category]){
        categoryStats[category] = {total:0, correct:0};
      }
      categoryStats[category].total++;
      if(selectedOption === correctAnswer){
        categoryStats[category].correct++;
      }
    });
    for(const category in categoryStats){
      const stats = categoryStats[category];
      const percent = (Math.floor((stats.correct / stats.total) * 100));

      const performanceBody = document.getElementById('performanceBody');
      const performanceSingle = document.createElement('div');
      performanceSingle.style.display ='flex';
      performanceSingle.style.justifyContent ='between';
      performanceSingle.style.alignItems = 'center'; 
      performanceSingle.innerHTML = `
        <div style="width:30%">
          <img 
            src="download.png" 
            alt="Profile Picture" 
            style="width:60px; height:60px; border-radius:50%; object-fit:cover;"
          />
        </div>
        
        <div style="width:70%;">
          <div style="display:flex; justify-content: space-between; align-items:center;">
            <p>${category}</p>
            <p>${percent} %</p>
          </div>
          <div style="flex:1; background:#e2e8f0; border-radius:10px; height:12px; overflow:hidden;">
            <div style="height:100%;width:${percent}%;background:#3b82f6;transition:width 0.3s ease;"></div>
          </div>
        </div>
      `;
      performanceBody.appendChild(performanceSingle);
    }

    const retakeExamBtn = document.getElementById('retakeExamBtn');
    retakeExamBtn.style.cursor = 'pointer';
    retakeExamBtn.addEventListener('mouseover', ()=>{
      retakeExamBtn.style.backgroundColor = 'var(--color-secondary)'
    })
    retakeExamBtn.addEventListener('mouseout', ()=>{
      retakeExamBtn.style.backgroundColor = 'var(--color-primary)'
    })

    retakeExamBtn.addEventListener('click', () => {
      startMockExam();
      fetchQuestions();
    });
}

let questions = [];
let result = {};
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
      console.log(result,questions);
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
        <h2 id="examName" style="margin-top:0px; font-family: var(--font-headings);"></h2>
        <div id="answerProgressWrapper" style="font-family: var(--font-mainText); margin-bottom: 20px; position: relative; width: 100%; height: 25px; background-color: #868484ff; border-radius: 5px; overflow: hidden; margin-top: 10px;">
          <div id="answerProgressBar" style="height: 100%; width: 0%; background-color: #4caf50; transition: width 0.3s ease;"></div>
          <p id="answerPercent" style="color:white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); margin: 0; font-weight: bold; width:100%; text-align:center;">
            0% Answered or checked
          </p>
        </div>
        <div style="font-family:var(--font-mainText); display: flex; justify-content: space-between; margin-bottom:20px;">
          <p style="margin:0px; font-size:18px;">Time left: </p>
          <div id="timer" style="font-size:18px;font-weight:bold; color: var(--color-primary)"></div>
        </div>
        <button id="submitExamBtn" style="font-family: var(--font-mainText); width:100%;padding:12px 8px;background:var(--color-primary);color:white;border:none;border-radius:6px; margin:auto;">Submit Exam</button>
      </div>
      <div id="questionIndexDiv" style="font-family: var(--font-mainText); padding: 15px; box-shadow: 2px 0px 20px 0px; border-radius:10px;">
      </div>
    </div>
  `
  
  currentQuestionIndex = 0;
  main.innerHTML = '';
  await fetchQuestions();
  renderQuestion(currentQuestionIndex);
  renderSidebarBottom();
  startTimer();
  
  const submitExamBtn = document.getElementById('submitExamBtn');
  submitExamBtn.style.cursor = 'pointer';
  submitExamBtn.addEventListener('mouseover', ()=>{
    submitExamBtn.style.backgroundColor = 'var(--color-secondary)'
  })
  submitExamBtn.addEventListener('mouseout', ()=>{
    submitExamBtn.style.backgroundColor = 'var(--color-primary)'
  })
  submitExamBtn.addEventListener('click', submitExam);
  
}

// Start timer to tract exam time counting
function startTimer() {
  const timerEl = document.getElementById('timer');
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if(totalTime <= 0){
      clearInterval(timerInterval);
      alert("Times Up");
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
    btn.style.border = 'none';
    btn.style.background = idx === currentQuestionIndex ? 'var(--color-secondary)' : 'var(--color-primary)';
    btn.style.color = idx === currentQuestionIndex ? '#fff' : '#fff';
    btn.addEventListener('click', () => {
      currentQuestionIndex = idx;
      renderQuestion(currentQuestionIndex);
      renderSidebarBottom(); // re-render to update active color    
    });
    btn.addEventListener('mouseover', () => {
      btn.style.boxShadow = '2px 5px 10px 0px rgba(0, 0, 0, 0.3)';
      btn.style.cursor = 'pointer';
    });

    btn.addEventListener('mouseout', () => {
      btn.style.boxShadow = 'none';
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
      btn.style.background = 'var(--color-secondary)';
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
  mainHeader.style.backgroundColor = "var(--color-primary-light)";
  mainHeader.style.padding = '10px';
  mainHeader.style.display = "flex";
  mainHeader.style.justifyContent = "end";
  // mainHeader.style.position = 'fixed';
  // mainHeader.style.top = '0';
  // mainHeader.style.width = '100%';
  // mainHeader.style.boxShadow = '0 0 10px 0';
  
  mainHeader.innerHTML = `
    <button id="checkBtn" style="font-family: var(--font-mainText); background-color: var(--color-primary); border:none; color:white; padding: 10px; border-radius: 5px; margin-right: 10px;">Check</button>
    <button id="flagBtn" style="font-family: var(--font-mainText); color:gray; border: 1px solid gray; padding: 7px 10px; border-radius:5px; border-left: 7px solid gray;">Flag for later review</button>
  `;
  const mainQuestions = document.createElement('div');
  mainQuestions.id = "mainQuestions";
  const mainFooter = document.createElement('div');
  mainFooter.id = "mainFooter";
  mainFooter.style.backgroundColor = "var(--color-bg)";
  mainFooter.style.padding = '10px';
  mainFooter.style.display = "flex";
  mainFooter.style.justifyContent = "space-around";
  // mainFooter.style.position = 'fixed';
  // mainFooter.style.bottom = '0';
  // mainFooter.style.width = '100%';
  // mainFooter.style.boxShadow = '0 0 10px 0';
  mainFooter.innerHTML = `
    <button id="questionPrev" style="font-family: var(--font-mainText); font-size:16px; background-color:transparent; border:none; color:black;">< Previous</button>
    <button id="questionNext" style="font-family: var(--font-mainText); font-size:16px; background-color:transparent; border:none; color:black;">Next ></button>
  `;
  main.appendChild(mainHeader);
  main.appendChild(mainQuestions);
  main.appendChild(mainFooter);

  const checkBtn = document.getElementById('checkBtn');
  checkBtn.addEventListener('mouseover', ()=>{
    checkBtn.style.backgroundColor = 'var(--color-secondary)';
    checkBtn.style.cursor = 'pointer';
  })
  checkBtn.addEventListener('mouseout', ()=>{
    checkBtn.style.backgroundColor = 'var(--color-primary)'
  })
  document.getElementById('flagBtn').addEventListener('mouseover', ()=>{
    document.getElementById('flagBtn').style.color = 'black';
  })
  document.getElementById('flagBtn').addEventListener('mouseout', ()=>{
    document.getElementById('flagBtn').style.color = 'gray';
  })


  mainQuestions.innerHTML = `
    <div id="mainQuestionsWrapper" style="padding:20px 50px;">
      <div style="margin-bottom:10px;">
        <h4 style="color:var(--color-primary); font-family: var(--font-mainText);">Patient (${q?.patient?.comment ? q?.patient?.comment : 'Case not found'})</h4>
        <div id="tabButtons" style="font-family: var(--font-mainText); border-bottom: 2px solid var(--color-primary); margin-bottom: 10px; display: flex; gap: 10px;">
          <button id="photoBtn" class="tab-btn active">Photo</button>
          <button id="chartBtn" class="tab-btn">Chart</button>
          <button id="radioBtn" class="tab-btn">Radiograph</button>
          <button id="profileBtn" class="tab-btn">Profile</button>
        </div>
        <div id="imgWrapper" style="font-family: var(--font-mainText); display:none; overflow:hidden; width:100%; max-width:800px;">
          <h3 id="imgName"></h3>
          <img id="patientImg" style="width: 90%; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.3s ease; transform-origin: center center;" src="${q?.patient?.photo}" alt="patient-image" />
        </div>
      </div>

      <div style="display:flex; justify-content: space-between; align-items: center;">
        <h3 style="margin:0px; font-family: var(--font-headings);">${q.text}</h3>
        <p style="font-family: var(--font-mainText); display: flex; color: gray; margin:0px;">Question<span>[${index+1}]</span></p>
      </div>
      <div id="answersDiv" style="font-family: var(--font-mainText);">
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

  // Tab buttons
  const style = document.createElement('style');
  style.innerHTML = `
    .tab-btn {
      background-color: var(--color-primary-light);
      color: var(--color-primary);
      border: none;
      padding: 10px 18px;
      border-radius: 10px 10px 0 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .tab-btn:hover {
      background-color: var(--color-primary);
      color:white;
    }
    .tab-btn.active {
      background-color: var(--color-primary);
      color: white;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);

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

  // Filter out missing images
  const availableTabs = buttons.filter(btn => q?.patient?.[btn.key]);
  buttons.forEach(btn => {
    const btnEl = document.getElementById(btn.id);
    if (!q?.patient?.[btn.key]) {
      btnEl.style.display = 'none'; // hide it if no image
    }
  });

  // Update active tab UI
  function setActiveTab(activeId) {
    buttons.forEach(b => {
      const btnEl = document.getElementById(b.id);
      if (btnEl) btnEl.classList.toggle('active', b.id === activeId);
    });
  }

  // Show image for selected tab
  function showImage(btn) {
    const imgSrc = q?.patient?.[btn.key];
    if (imgSrc) {
      img.src = imgSrc;
      imgWrapper.style.display = 'block';
      imgName.innerText = btn.key;
      setActiveTab(btn.id);
    } else {
      imgWrapper.style.display = 'none';
    }
  }

  // For available tabs
  availableTabs.forEach(btn => {
    document.getElementById(btn.id).addEventListener('click', () => showImage(btn));
  });

  // Show first available tab by default
  if (availableTabs.length > 0) {
    showImage(availableTabs[0]);
  } else {
    imgWrapper.style.display = 'none';
  }

  // Show first available tab dynamically
  if (availableTabs.length > 0) {
    showImage(availableTabs[0]); // first existing image
  } else {
    imgWrapper.style.display = 'none'; // hide wrapper if no images exist
  }

  // Zoom image on Click
  const patientImg = document.getElementById('patientImg');
  patientImg.addEventListener('click', () => {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';
    overlay.style.padding = '10px'; // for small screens

    // Clone image
    const zoomedImg = patientImg.cloneNode(true);
    zoomedImg.style.width = '100%';
    zoomedImg.style.height = 'auto';
    zoomedImg.style.maxWidth = '800px';
    zoomedImg.style.maxHeight = '90vh';
    zoomedImg.style.borderRadius = '10px';
    zoomedImg.style.objectFit = 'contain';
    zoomedImg.style.cursor = 'zoom-out';
    zoomedImg.style.transition = 'transform 0.3s ease';
    zoomedImg.style.transform = 'scale(1.02)';
    zoomedImg.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';

    overlay.appendChild(zoomedImg);
    document.body.appendChild(overlay);

    // Remove zoom on click
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });

    // Optional: prevent scroll behind overlay
    document.body.style.overflow = 'hidden';
    overlay.addEventListener('click', () => {
      document.body.style.overflow = '';
    });
  });


  // Restore previously selected answer if any and update it
  const answered = selectedOptionAnswer.find(option => option.id === q.qid);
  if (answered) {
    const savedInput = document.querySelector(
      `input[name="answer-${q.qid}"][value="${answered.selectedOption}"]`
    );
    if (savedInput) savedInput.checked = true;
  }

  // ✅ Check Answer
  document.getElementById('checkBtn').addEventListener('click', () => {
    // Remove the selected answer
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
        correctAnswer: q.correct_answer,
        category: q.category
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
  prevBtn.addEventListener('mouseover', ()=>{
    prevBtn.style.color = 'var(--color-primary)';
    prevBtn.style.cursor = 'pointer';
  })
  prevBtn.addEventListener('mouseout', ()=>{
    prevBtn.style.color = 'black';
  })
  nextBtn.addEventListener('mouseover', ()=>{
    nextBtn.style.color = 'var(--color-primary)';
    nextBtn.style.cursor = 'pointer';
  })
  nextBtn.addEventListener('mouseout', ()=>{
    nextBtn.style.color = 'black';
  })
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
        <div id="correct" style="background-color: #a8e9cfff; padding: 20px;">
          <h3>Correct</h3>
          ${q.solution_html}
        </div>
      `;
    } else {
      solutionDiv.innerHTML = `
        <div id="incorrect" style="background-color: #f5a076ff; padding: 20px;">
          <h3>Incorrect</h3>
          ${q.solution_html}
        </div>
      `;
    }
  }

  // Get merged answers of two arrays to show on UI
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
        selectedOptionAnswer.push({ 
          id: q.qid, 
          selectedOption: radio.value, 
          correctAnswer: q.correct_answer,
          category: q.category
        });
      }
      // 🔥 update progress
      updateAnswerProgress();
    });
  });

}

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
        correctAnswer: sel.correctAnswer || null,
        category: sel.category
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

  renderStartExam();
  fetchQuestions();

  const sidebarContentBottom = document.getElementById('sidebarBottom');
  sidebarContentBottom.innerHTML = `
    <h3>Mock Exam</h3>
    <h4 id="examName" style="margin-top:0px; font-family: var(--font-headings);"></h4>
  `;
  examData = {};
  totalTime = 0;
}

// function formatDuration(ms) {
//   const totalSec = Math.floor(ms / 1000);
//   const min = Math.floor(totalSec / 60);
//   const sec = totalSec % 60;
//   return `${min}:${sec.toString().padStart(2, '0')}`;
// }


// === Handle responsive default state ===
function handleSidebarResponsiveness() {
  if (window.innerWidth <= 768) {
    // small screen → start collapsed
    sidebar.classList.add('sidebar-collapsed');
    sidebar.classList.remove('sidebar-expanded');
    expandBtn.style.display = 'block';
    collapseBtn.style.display = 'none';
  } else {
    // large screen → start expanded
    sidebar.classList.add('sidebar-expanded');
    sidebar.classList.remove('sidebar-collapsed');
    expandBtn.style.display = 'none';
    collapseBtn.style.display = 'block';
  }
}

// Call on load + resize
window.addEventListener('load', handleSidebarResponsiveness);
window.addEventListener('resize', handleSidebarResponsiveness);

// === Inject Styles ===
const style = document.createElement('style');
style.innerHTML = `
  /* === Import Google Font === */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  :root {
    /* === Brand Colors === */
    --color-primary: #800080;    /* purple */
    --color-primary-light: #D996D9; /* purple light */
    --color-secondary: #FF3F7F;
    --color-bg: #eed6eeff;
    --color-text: #111827;

    /* === Font Settings === */
    --font-headings: 'Kagins', sans-serif;
    --font-mainText: 'Noto Sans', sans-serif;
  }

  #sidebar {
    position: relative;
    transition: width 0.3s ease;
  }

  .sidebar-expanded {
    width: 400px !important;
  }

  .sidebar-collapsed {
    width: 0 !important;
    overflow: hidden !important;
  }

  @media (max-width: 768px) {
    #sidebar {
      position: absolute;
      z-index: 9999;
      height: 100vh;
      top: 0;
      left: 0;
      background: #fff;
      box-shadow: 2px 0 10px rgba(0,0,0,0.15);
    }

    #firstExamDiv {
      padding: 60px 15px!important;
    }

    #expandBtn {
      display: block;
      position: fixed;
      top: 15px;
      left: 15px;
      z-index: 10000;
    }
    #recentActivity{
      padding: 60px 15px!important;
    }

    #mainQuestionsWrapper {
      padding: 20px 15px !important;
    }
  }
`;
document.head.appendChild(style);