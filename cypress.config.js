const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vo6o9s',
  
  e2e: {
    baseUrl: "https://alura-fotos.herokuapp.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome", //quem vai fazer o relatório
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report", //o diretorio que o relatorio vai ser gerado
      overwrite: true, //se vai sobrescrever os teste a cada vez
      html: true, //qual o padrao
      json: false, //qual padrao
      timestamp: "mmddyyyy_HHMMss", // padrao ( mes dia ano - hora minuto seg)
    },
  },
});