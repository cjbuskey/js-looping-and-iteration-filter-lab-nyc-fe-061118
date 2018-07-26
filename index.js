// Code your solution in this file
function findMatching(driver, names) {
  return driver.filter(diff => driver.toLowerCase() === names.toLowerCase());
}