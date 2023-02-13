function reportTemplate() {
    return `
    <div id="repBody">
    <div class="question">
        <h3>What did I do since the last meeting?</h3>
            <p>${q1}</p>
        </div>
        <div class="question">
        <h3>What am I going to do next?</h3>
            <p>${q2}</p>
        </div>
            <div class="question">
        <h3>What are my blockers?</h3>
            <p>${q3}</p>
        </div>
        </div>`;
  }

const q1 = `I met with my team twice this week to go over and complete the team assignments. 
 I completed all four reading for this week and placed the notes in my Notes section on my page.
 Furthermore, I attempted to learn more about DOM manipulation. I coded out a function that would 
 build my notes page dynamically and give me the ability to display my notes directly in the DOM 
 instead of the console. `;

const q2 = `I have a team meeting scheduled for Tuesday, and so I will review the team assignment 
on Monday to prepare. I will then begin the reading for week 7 and compile the notes on my page 
using the newly created dynamic pages. Looking forward, I anticipate that this might take longer
 than normal in order to troubleshoot the new code.  As such, I will consider this my additional
  JS practice for this week and will focus on making the notes page more dynamic.`;

const q3 = `There were significant errors in our group's site this week, and so it became necessary 
to spend more time on that assignment than I had originally planned. I feel like my blockers have 
been fairly manageable as far as this class 
is concerned. I do have some outside challenges that are taking up brain power as well, but I feel 
like I'm doing okay.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');