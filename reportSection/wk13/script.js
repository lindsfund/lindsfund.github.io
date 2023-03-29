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

const q1 = `This last week I finished up the functionality on my garden page. I also cleaned 
up the code and made the site more presentable with CSS. I also recorded the presentation 
for the final project and completed a text document that contained all the necessary links 
for submission. Finally, I submitted all that in the week 14 final submission section.`;

const q2 = `Next I will wait for the grades to be posted and/or questions on my submission.`;

const q3 = `There were no blockers this week. I was able to accomplish everything I set out to do.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');