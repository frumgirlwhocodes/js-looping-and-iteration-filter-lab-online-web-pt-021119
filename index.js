// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (drivers) { return drivers.toLowerCase()=== name.toLowerCase()})
  
};

function fuzzyMatch(drivers, string){
	return drivers.filter(function (driver){return driver.startsWith(string)})
};

function matchName(drivers, string){
	return drivers.filter(function (driver){return driver.name === string})
}; 