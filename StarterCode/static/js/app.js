// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

//
function displayData(data){ 
    tbody.text("")
    data.forEach(function(ufo_sighting){
    new_tr = tbody.append("tr")
    Object.entries(ufo_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)    
    })
})}
// display table
displayData(tableData)

//select the user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date from user input
function clickSelect(){
    // prevent refresh
    d3.event.preventDefault();
    //print the value input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var filter_Data = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //display the new table
    displayData(filter_Data);
}

// Event handler: click Select element and trigger onChange handler
dateInputText.on("change", clickSelect)
