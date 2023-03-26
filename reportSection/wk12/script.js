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

const q1 = `Last week I worked on the code of the input forms and the seed database. I styled 
the seed cards so that they look presentable and are built dynamically with JavaScript. The new 
seed input form submits to the Local Storage and, due to the lack of a working server, responds 
with a console log for now. Once I have learned the backend, I will push the data to the 
database that has been built.`;

const q2 = `Over the course of the next week, I will finish up the code for the garden plan 
page. This will include dynamically building a list of plants that the user wants to grow and when 
best to plant them. The timing will be based on the data that is stored about the plants in the 
internal JSON. I am also hoping to finish the styling so that I can turn the assignment 
in a little early.`;

const q3 = `I feel like my biggest blocker this week was the assignment I chose. As I am coding 
the pages I think of things that I want to add, and I end up going down a rabbit hole trying to 
learn new skills in JavaScript instead of using the assignment to demonstrate what I have already 
learned. While I love learning, and I know that the extra knowledge is good, it takes up time t
hat I should be using to completing the assignment for it's intended purpose.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');