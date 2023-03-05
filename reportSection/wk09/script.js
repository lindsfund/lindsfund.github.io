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

const q1 = `In the last week, I have met with my team twice, once on Tuesday and the other on Thursday. 
Together, we spent 6+ hours attempting to finalize our site. I have also done the required reading for 
the week and place my notes on my GitHub page. In addition to my regular schedule, I have completed a 
challenge proposal and turned it in.`;

const q2 = `This next week will be spent working on the project connected to my challenge proposal. 
Specifically, I will be setting up the necessary tools for production. I am using MySQL to build a 
data based that will be exported as the JSON for my project. I will also familiarize myself with the 
documentation for the APIs that I will be using. If there is still time, I will start the HTML and 
CSS for the site's pages as well. All of this is in addition to the required readings for the week 
with it's accompanied notes.`;

const q3 = `I'm not sure that I really had any blockers this week. I feel I was efficient and was 
able to complete my tasks. It was a little sad to have my last necessary team meeting, but I think 
we will keep communicating with each other in the future.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');