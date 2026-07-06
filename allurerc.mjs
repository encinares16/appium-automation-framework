import { defineConfig } from "allure";

export default defineConfig({
  output: "./allure-report",
  historyPath: "./allure-history/history.jsonl",
  appendHistory: true,
  historyLimit: 20,
});