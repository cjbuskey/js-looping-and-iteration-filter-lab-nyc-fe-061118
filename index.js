// Code your solution in this file
function findMatching(driver, names) {
  return driver.filter(driver => driver.toLowerCase() == names.toLowerCase());
}

function fuzzyMatch(driver, names) {
  return driver.filter(driver => driver == names);
}