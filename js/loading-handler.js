(function loadingWrapper() {
  function compileLoadedData(someData) {
    someData.loadingContent.forEach(element => {
      const generatedHTMLContainer = document.createElement('div');
      generatedHTMLContainer.innerHTML = TemplateService.compileTemplate(
        'loading-template',
        element
      );
      const cellboxContainer = document.getElementById('cells-container');
      cellboxContainer.appendChild(generatedHTMLContainer.firstChild);
    });
  }

  function loadData() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
    DataService.getData('loading-content').then(data => {
      if (data) {
        loader.style.display = 'none';
      }
      compileLoadedData(data);
    });
  }

  loadData();
  document.getElementById('load-more-btn').addEventListener('click', loadData);
})();
