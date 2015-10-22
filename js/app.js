// MAIN APP

var request = new XMLHttpRequest();
request.open('GET', 'models/dummy_data.json', true);
request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function() {
  console.log(this.readyState);
  
  if(this.readyState == 4) {
    console.log('data ready');
    console.log(this);
    
    var data = JSON.parse(request.responseText);
    
    populate_people(data);
  }
};

request.send();

function populate_people(data) {
  console.log(data);
}