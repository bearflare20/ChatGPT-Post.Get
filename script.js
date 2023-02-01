function sendGetRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.example.com/data");
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.getElementById("getResponse").innerHTML = this.responseText;
    }
  };
  xhr.send();
}

function sendPostRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.example.com/data");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.getElementById("postResponse").innerHTML = this.responseText;
    }
  };
  xhr.send(JSON.stringify({ key: "value" }));
}

function clearGetResponse() {
  document.getElementById("getResponse").innerHTML = "";
}

function clearPostResponse() {
  document.getElementById("postResponse").innerHTML = "";
}
