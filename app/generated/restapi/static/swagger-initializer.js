window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">
  const HTTPSOnly = function() {
    return {
      components: {
        schemes: function() {
          return null
        }
      }
    }
  }

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://api.securityscorecards.dev/swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      HTTPSOnly
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
