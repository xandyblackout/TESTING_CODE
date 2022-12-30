function sendGetRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.example.com/data.json", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Success!
        var data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        // Something went wrong (404 etc.)
        console.error(xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error(xhr.statusText);
    };
    xhr.send();
  }
  