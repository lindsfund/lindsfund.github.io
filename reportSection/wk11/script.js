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

const q1 = `From the time of my last report, the code to access the APIs and return the data in an useable 
manner, is finished. This data is ready for import into the DOM. The code to access the JSON data 
is written, however the data is not yet useable in the DOM. This is consistent with my goals from 
the last report. `;

const q2 = `In the coming week, I will make the JSON data ready to input into the DOM. I am also hoping to 
get the code written so that the API and JSON data display on the desired locations of the site. If 
this is accomplished with enough time left over, I will also look at adding the input functionality to 
the HTML through JS.`;

const q3 = `My major blocker is time. Writing code and testing the functionality is proving to be more
 time intensive than I originally planned. As a result, I have reworked my goals so that I can still 
 complete the project in a manner that will meet the course objectives. I have also, increased the 
 scheduled time per day to work on the project. Between both of these adjustments, I believe I can 
 overcome this blocker.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');