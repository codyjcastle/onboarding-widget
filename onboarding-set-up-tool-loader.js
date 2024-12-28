(function () {
  // Ensure the widget isn't already injected
  if (!document.getElementById('onboarding-widget-container')) {
    console.log('Injecting onboarding widget...');

    // Create the widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'onboarding-widget-container';
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.top = '50px';
    widgetContainer.style.right = '50px';
    widgetContainer.style.width = '500px';
    widgetContainer.style.height = '943px';
    widgetContainer.style.zIndex = '99999';
    widgetContainer.style.backgroundColor = 'white';
    widgetContainer.style.border = '1px solid #c8c5c5';
    widgetContainer.style.borderRadius = '15px';
    widgetContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    widgetContainer.style.overflow = 'hidden';

    // Inject the HTML structure for the widget
    widgetContainer.innerHTML = `
      <div id="onboarding-widget">
        <img src="https://storage.googleapis.com/msgsndr/GstSBkij3V0hBa0iAEmg/media/676c437086b2ed3a6069b55e.png" alt="Platform Icon" 
          style="position: absolute; top: 20px; left: 20px; width: 60px; height: 60px;">
        <h1 style="font-family: 'Roboto Condensed', sans-serif; font-weight: 700;">Welcome To Your Success Checklist!</h1>
        <h2 style="font-family: 'Belgrano', serif; font-size: 16px; color: #595959;">Get started quickly on your journey.</h2>
        <div class="progress-container" style="background-color: rgba(182, 187, 190, 0.48); border-radius: 20px; margin: 20px 0; overflow: hidden; width: 100%;">
          <div id="progress-bar" style="height: 20px; width: 0%; background: #225af8; line-height: 20px; border-radius: 20px 0 0 20px; transition: width 0.4s ease-in-out;"></div>
        </div>
        <ul id="task-list" style="list-style-type: none; padding: 0; margin: 0; max-height: 700px; overflow-y: auto;"></ul>
        <div id="bottom-button" style="display: none; margin-top: 20px;">
          <button id="complete-onboarding" 
              style="display: block; width: 100%; background-color: #225af8; color: white; text-align: center; padding: 10px 0; font-size: 16px; font-weight: bold; border-radius: 5px; border: none; cursor: pointer;">
              Complete Onboarding 🎉
          </button>
        </div>
      </div>
    `;

    // Append the container to the body
    document.body.appendChild(widgetContainer);

    // Add JavaScript functionality
    const progressBar = document.getElementById('progress-bar');
    const checklist = document.getElementById('task-list');
    const completeButton = document.getElementById('complete-onboarding');
    const bottomButton = document.getElementById('bottom-button');

    const tasks = [
      { title: "Welcome", description: "Quick Tour" },
      { title: "Add Team Members", description: "Quickly Add Staff" },
      { title: "Import Contacts", description: "Import existing customer list" },
    ];

    // Populate checklist
    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.style.marginBottom = '15px';
      listItem.innerHTML = `
        <div>
          <input type="checkbox" style="margin-right: 10px;"> ${task.title}: ${task.description}
        </div>
      `;
      checklist.appendChild(listItem);
    });

    // Update progress bar on checkbox interaction
    checklist.addEventListener('change', () => {
      const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
      const completed = checklist.querySelectorAll('input[type="checkbox"]:checked').length;
      const progress = (completed / tasks.length) * 100;

      progressBar.style.width = `${progress}%`;

      if (completed === tasks.length) {
        bottomButton.style.display = 'block';
      }
    });

    // Complete button functionality
    completeButton.addEventListener('click', () => {
      alert('Congratulations! You’ve completed onboarding! 🎉');
      widgetContainer.style.display = 'none';
    });

    console.log('Onboarding widget loaded successfully.');
  }
})();
