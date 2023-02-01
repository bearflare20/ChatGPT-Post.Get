function sendGetRequest() {
  var xhrGet = new XMLHttpRequest();
  var getUrl = document.getElementById("getUrl").value;
  xhrGet.open("GET", getUrl, true);
  xhrGet.onreadystatechange = function() {
    if (xhrGet.readyState === XMLHttpRequest.DONE && xhrGet.status === 200) {
      var getResponse = xhrGet.responseText;
      alert("GET Response: " + getResponse);
    }
  };
  xhrGet.send();
}

function sendPostRequest() {
  var xhrPost = new XMLHttpRequest();
  var postUrl = document.getElementById("postUrl").value;
  xhrPost.open("POST", postUrl, true);
  xhrPost.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhrPost.onreadystatechange = function() {
    if (xhrPost.readyState === XMLHttpRequest.DONE && xhrPost.status === 200) {
      var postResponse = xhrPost.responseText;
      alert("POST Response: " + postResponse);
    }
  };
  var postData = document.getElementById("postData").value;
  xhrPost.send(postData);
}
