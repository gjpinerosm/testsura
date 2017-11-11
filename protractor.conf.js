// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  capabilities: {
      browserName:'chrome'
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  
  specs: [
    'features/*.feature'
  ],
  // Opciones de cucumber
  cucumberOpts: {
    require: ['steps/*_steps.js'],  // requerido para la definicion de archivos que se ejecutran despues de los .feature
    tags: [],                      // <string[]> (expresion) solo se ejecuta en los feature o escenarios con tags especificados, e este caso no hacemos uso
    strict: false,                  // <boolean> falla si hay cualquier 'undefined' o steps pendientes
    format: ["pretty"],            // <string[]> (type[:path]) especifica el formato de salida, opcionalmente suple el PATH para redireccionar el formato de salida (repeatable)
    'dry-run': false,              // <boolean> invoca los formatos sin ejecutar pasos
    compiler: []                   // <string[]> ("extension:module") requiere archivos con la EXTENSION dada después de requerir el MODULE (repeatable)
  },

 onPrepare: function () {
    browser.manage().window().maximize(); // maximizar todas las ventanas a ejecutar
    //browser.manage().timeouts().implicitlyWait(5000);
 }
};
