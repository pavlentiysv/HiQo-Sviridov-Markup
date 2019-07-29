(function loadingWrapper() {
  function compileLoadedData(someData) {
    const rawTemplate = document.getElementById('loading-template').innerHTML;
    const compiledTemplate = Handlebars.compile(rawTemplate);
    const ourGeneratedHTML = compiledTemplate(someData);
    const ourGeneratedHTMLContainer = document.createElement('div');
    ourGeneratedHTMLContainer.className = 'cells-container__inner';
    ourGeneratedHTMLContainer.innerHTML = ourGeneratedHTML;
    const cellboxContainer = document.getElementById('cells-container');
    cellboxContainer.appendChild(ourGeneratedHTMLContainer);
  }

  function loadData() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
    fetch('../assets/content/loading-content.json')
      .then(response => response.json())
      .then((data) => {
        if (data) {
          loader.style.display = 'none';
        }
        compileLoadedData(data);
      });
  }

  loadData();
  document.getElementById('load-more-btn').addEventListener('click', loadData);
})();
