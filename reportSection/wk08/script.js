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

const q1 = `In the last week, I have met with my team twice and completed the team7 assignment 
with them. We fixed the cart page and our site is functional now on all pages. I watched 
several videos on JWT and came to a basic understanding of how it allows developers to streamline 
the sign-in/authentication experience for the user. While maintaining site security.`;

const q2 = `Next week, I will meet with my team and go over the assignment. We will hopefully be 
able to finish all the requirements for the SleepOutside site. I will read and take notes on the 
assigned readings. Looking ahead, I can see that I should also begin the proposal for the final project.`;

const q3 = `I can honestly say that I didn't feel I had any large blockers this week. There were, 
of course, subjects I had to research and topics that I needed a refresh on. However, I feel like 
I planned enough time and energy to accomplish them and still get to the other things 
I needed to complete.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');