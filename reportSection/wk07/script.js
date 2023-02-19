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

const q1 = `Since the last meeting, I have met with my team and worked on the weekly team assignment 
with them. We went over the shopping cart and were able to get most of it done together. We spent some 
additional time going over classes and how object-oriented programming can help with JavaScript. 
I have also done the readings for this week and taken notes on them in my notes section. I have looked 
over the code I am using to input things into the DOM and made a few small improvements. I also some 
did some outside research on building carts with the local storage in an attempt to fix our groups 
cart page.`;

const q2 = `Over the next week, I will meet with my group and go over the assignment for next week. 
I will be leading the meeting this week, and so it will be necessary for me to prepare on Monday 
to make sure everything is ready for the meeting on Tuesday.  After that, I will also need to 
devote time to the readings and my notes page.  Finally, I would like to get the cart page in 
our sleepOutside site to a point where it is functional. I am concerned that we as a group have 
left that alone for too long. `;

const q3 = `My blockers this week have been of a more personal nature. I have had a number of 
family and church responsibilities that were not in my original plan for the week. This necessitated 
some last minute re-scheduling and quite a few late nights that were not ideal. I was unable to 
get the cart page completed as I had hoped, but I was able to make some progress.`;

function renderReportTemplate(selector) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML(
      "afterBegin",
      reportTemplate()
    );

}

renderReportTemplate('main');