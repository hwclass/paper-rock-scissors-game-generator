function loadJSON(callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', 'http://localhost:3333', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);  
}

loadJSON(function(response) {
  var data = JSON.parse(response);
  App.createGraph(data)
    .addEntitiesIntoGraph(data)
    .addConnections(data)
    .initDom(data)
 })