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

const q1 = `I have met with my team as the leader this week. We went over the assignment and were able to do most of it together. 
          We decided to do the stretch part on our own, and so I worked on it myself and submitted it to them for review/pull. 
          I also completed the reading for this week and applied the material to my notes wk 05 section. I followed the advice you 
          gave in the announcement this week and put extra care into understanding the fetch API. Likewise, I also did some 
          re-writing of the code for my report section so that it is built dynamically.`;

const q2 = `I will finish the stretch assignment and review the readings for this week. 
            I will also rewrite my notes section index/JavaScript so that the page is built dynamically. Furthermore, 
           I will complete at least one outside tutorial in an effort to strengthen my JavaScript knowledge. 
           In addition, I will meet with my team on Tuesday to go over the  group assignment.`;

const q3 = `I feel like I am overcoming a number of my blockers. However, staying on task in our meetings is still a bit of a struggle.
             I also feel like the readings take me longer to do because I have to research terminology and relearn basic JavaScript.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');