import { defineConfig } from "allure";

export default defineConfig({
  name: "Automation Test Report",
  output: "/allure-report",
  historyPath: "./allure-history/history.jsonl",
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