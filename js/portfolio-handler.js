function createCellbox(cellboxData) {
  const rawTemplate = document.getElementById('porfolio-template').innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const ourGeneratedHTML = compiledTemplate(cellboxData);
  const cellboxContainer = document.querySelector('.portfolios');
  cellboxContainer.innerHTML = ourGeneratedHTML;
}
const ourRequest = new XMLHttpRequest();
ourRequest.open('GET', '../assets/content/portfolio-content.json');
ourRequest.onload = function f1() {
  const data = JSON.parse(ourRequest.responseText);
  console.log(data);
  createCellbox(data);
};

ourRequest.send();
