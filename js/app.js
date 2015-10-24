// MAIN APP DEFINITION


//non ASYNC

var request = new XMLHttpRequest();
request.open('GET', 'models/dummy_data.json', true);
request.setRequestHeader('Content-Type', 'application/json');
request.onreadystatechange = function() {
  console.log(request.readyState);
  
  if(request.readyState === 4) {
    console.log('data ready');
    
    var data = JSON.parse(request.responseText);
    
    populate_people(data)
  }
};

request.send();

//extra functions
function populate_people(data) {
  // add here 
  console.log(data);
}



