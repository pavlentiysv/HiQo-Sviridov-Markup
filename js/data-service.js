const DataService = (function() {
  const getSlides = function() {
    return fetch('../assets/content/home-slider-content.json')
      .then(response => response.json())
  };
  return {
    getSlides: getSlides
  };
})();
