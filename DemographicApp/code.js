var states = getColumn("AP Computer Science Test Taker Demographics by State (2019)", "State");
var genderList = getColumn("AP Computer Science Test Taker Demographics by State (2019)", "Total % female");
var blackTestTakers = getColumn("AP Computer Science Test Taker Demographics by State (2019)", "Total % African American");
var hispanicTestTakers = getColumn("AP Computer Science Test Taker Demographics by State (2019)", "Total % Hispanic");
var americanTestTakers = getColumn("AP Computer Science Test Taker Demographics by State (2019)", "Total % American Indian/Native Alaskan");
var pacificTestTakers = getColumn("AP Computer Science Test Taker Demographics by State (2019)", "Total % Native Hawaiian/Other Pacific Islander");



var stateSelection = "Alabama";

onEvent("GenderBtn", "click", function( ) {
  setScreen("genderScreen");
});


onEvent("statesDropDown", "change", function( ) {
  stateSelection = getText("statesDropDown");
  for (var i = 0; i < states.length; i++) {
    if (stateSelection == states[i]) {
      setText("genderOutput", genderList[i] + "% of test takers were Female");
    }
  }
});


onEvent("RaceBtn", "click", function( ) {
  setScreen("raceScreen");
});


onEvent("raceStateDrop", "change", function( ) {
  stateSelection = getText("raceStateDrop");
  for (var i = 0; i < states.length; i++) {
    if (stateSelection == states[i]) {
      var output = "Students who took the exam. \n";
      output = (output + "\nBlack students: ")+ blackTestTakers[i];
      output = (output + "\nHispanic students: ")+ hispanicTestTakers[i];
      output = (output + "\nAmerican Indian students: ")+ americanTestTakers[i];
      output = (output + "\nPacific students: ")+ pacificTestTakers[i];
      setText("raceOutput", output);
    }
  }
});


onEvent("homeButton", "click", function( ) {
  setScreen("homeScreen");
});


