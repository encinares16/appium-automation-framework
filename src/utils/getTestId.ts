export function getTestId(currentTest?: Mocha.Test): string {
  return currentTest?.title.match(/\[(.*?)\]/)?.[1] ?? 'UNKNOWN'
}