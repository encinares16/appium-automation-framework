import { defineConfig } from "allure";

export default defineConfig({
  name: "Automation Test Report",
  output: "/allure-report",
  historyPath: "allure-results/history.jsonl",
  appendHistory: true,
  historyLimit: 50,

  plugins: {
    awesome: {
      options: {
        reportLanguage: "en",
        singleFile: false
      }
    }
  }
});