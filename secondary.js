// function renderPreviousResult(result) {
//   main.innerHTML = `
//     <div style="max-width:500px;margin:auto;text-align:center;">
//       <h2>📊 Your Recent Activity</h2>
//       <p><strong>Score:</strong> ${result.score}/${result.totalQuestions}</p>
//       <p><strong>Correct:</strong> ${result.correct} | <strong>Incorrect:</strong> ${result.incorrect}</p>
//       <p><strong>Duration:</strong> ${result.duration}</p>
//       <h3>📂 Performance by Category:</h3>
//       <div id="categoryPerformance"></div>
//       <button id="retakeBtn" style="margin-top:15px;padding:10px 20px;font-size:16px;background:#3B82F6;color:#fff;border:none;border-radius:8px;cursor:pointer;">
//         Retake Exam
//       </button>
//     </div>
//   `;

//   const container = document.getElementById('categoryPerformance');
//   result.categoryPerformance.forEach(cat => {
//     const div = document.createElement('div');
//     div.textContent = `${cat.category}: ${cat.correct}/${cat.total}`;
//     container.appendChild(div);
//   });

//   document.getElementById('retakeBtn').addEventListener('click', () => {
//     startMockExam();
//   });
// }

// function saveExamResult(resultData) {
//   localStorage.setItem('mockExamResult', JSON.stringify(resultData));
// }

// function endMockExam() {
//   const durationMs = Date.now() - startTime;
//   const minutes = Math.floor(durationMs / 60000);
//   const seconds = Math.floor((durationMs % 60000) / 1000);
//   const duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

//   // store result
//   saveExamResult({
//     examId: 'english_grammar_2025',
//     score: 8,
//     totalQuestions: 10,
//     correct: 8,
//     incorrect: 2,
//     duration,
//     categoryPerformance: [
//       { category: 'Grammar', correct: 4, total: 5 },
//       { category: 'Vocabulary', correct: 4, total: 5 }
//     ],
//     takenAt: new Date().toISOString()
//   });

//   renderPreviousResult(JSON.parse(localStorage.getItem('mockExamResult')));
// }