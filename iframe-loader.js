(function () {
  // Check if the iframe already exists to avoid duplicate widgets
  if (!document.getElementById('onboarding-iframe-container')) {
    console.log('Injecting onboarding iframe...');

    // Create a container for the iframe
    const iframeContainer = document.createElement('div');
    iframeContainer.id = 'onboarding-iframe-container';
    iframeContainer.style.position = 'fixed'; // Fixed position to float above everything
    iframeContainer.style.top = '50px';      // Position from the top of the viewport
    iframeContainer.style.right = '50px';    // Position from the right of the viewport
    iframeContainer.style.width = '500px';   // Set widget width
    iframeContainer.style.height = '943px';  // Set widget height
    iframeContainer.style.zIndex = '99999';  // Make sure it floats above all elements
    iframeContainer.style.border = '1px solid #c8c5c5';
    iframeContainer.style.borderRadius = '15px';
    iframeContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    iframeContainer.style.backgroundColor = 'white';
    iframeContainer.style.overflow = 'hidden';

    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://<your-hosted-url>/onboarding-widget.html'; // Replace with your hosted HTML file URL
    iframe.style.width = '100%';       // Make iframe fill its container
    iframe.style.height = '100%';      // Match the height of the container
    iframe.style.border = 'none';      // Remove iframe border
    iframe.style.borderRadius = '15px'; // Add rounded corners for the iframe

    // Append the iframe to the container
    iframeContainer.appendChild(iframe);

    // Append the container to the body
    document.body.appendChild(iframeContainer);

    console.log('Onboarding iframe injected successfully.');
  }
})();
