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

const q1 = `In the time from my last report, I have completed the readings for the last week and 
compiled my notes on my GitHub page. I also began work on my final project. I built a starting 
database for my site and converted it to a JSON that will be used. The documentation for the APIs 
that I will be using was read so that I knew how best to access them. Also, when necessary, accounts 
were created for API use. Once I had a good idea of all the data info, the starting HTML and CSS 
were completed. The parts of the HTML that were redundant were converted into templates for JS 
rendering in the DOM. Some of the JS functionality was also built for the DOM rendering and API 
access. The current status of my project can be seen at this link...
<a href="https://lindsfund.github.io/finSub/index.html">Final Project</a>`;

const q2 = `In the coming week, I will fine tune the API access for the weather and begin on the 
other API access. I will also write the JS necessary to access the JSON that I have prepared. 
There are no readings for this week. However, there is an evaluation due so, I will complete 
that as well. If I am able to finish my goals for this week, I will start on what I have laid out 
for next week in an attempt to have more time to clean up the code at the end of the project.`;

const q3 = `My major blocker this week was the lack of a group to work with. I missed the alternative 
views they provided and the helpful instruction. I reached out, but it is proving difficult because we 
are all working on different projects. In addition, I am noticing that it is easier for me to get 
absorbed in the code and so other parts of life are falling behind. It will take a conscious effort 
to make/stick to an appropriate schedule that balances my responsibilities.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');