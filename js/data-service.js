const DataService = (function DataServiceModule() {
  const fileURL = '../assets/content/';

  const getData = function getDataCommon(fileName) {
    return fetch(`${fileURL}${fileName}.json`)
      .then(response => response.json());
  };

  const getHomeSlides = function getHomeSlidesData() {
    return getData('home-slider-content');
  };

  const getPortfolios = function getPortfoliosData() {
    return getData('portfolio-content');
  };

  return {
    getData: getData,
    getHomeSlides: getHomeSlides,
    getPortfolios: getPortfolios
  };
})();
