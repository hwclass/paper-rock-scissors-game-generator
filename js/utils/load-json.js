const loadJSON = callback => {
  const url = new URL('http://localhost:3333/data')
  const xhr = new XMLHttpRequest()
  xhr.overrideMimeType("application/json")
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      callback(xhr.responseText)
    }
  };
  xhr.send(null)
}