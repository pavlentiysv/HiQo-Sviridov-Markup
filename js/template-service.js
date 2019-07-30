const TemplateService = (function TemplateServiceModule() {
  const compileTemplate = function(templateId, content) {
    const rawTemplate = document.getElementById(templateId).innerHTML;
    const compiledTemplate = Handlebars.compile(rawTemplate);
    return compiledTemplate(content);
  };

  const drawHomeSlides = function(slidesData) {
    const slidesContainer = document.querySelector('.slider__slides');
    slidesContainer.innerHTML = compileTemplate(
      'home-slider-template',
      slidesData
    );
  };

  const drawPortfolios = function createCellbox(cellboxData) {
    const cellboxContainer = document.querySelector('.portfolios');
    cellboxContainer.innerHTML = compileTemplate(
      'porfolio-template',
      cellboxData
    );
  };

  return {
    compileTemplate: compileTemplate,
    drawHomeSlides: drawHomeSlides,
    drawPortfolios: drawPortfolios
  };
})();
