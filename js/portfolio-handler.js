function createCellbox(cellboxData) {
  const rawTemplate = document.getElementById('porfolio-template').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const ourGeneratedHTML = compiledTemplate(cellboxData);
  const cellboxContainer = document.querySelector('.portfolios');
  cellboxContainer.innerHTML = ourGeneratedHTML;
}

fetch('../assets/content/portfolio-content.json')
  .then(response => response.json())
  .then(data => createCellbox(data));
