// Toggle between GET and POST options
function toggleOptions(option) {
  if (option === "get") {
    document.getElementById("get-btn").classList.add("active");
    document.getElementById("post-btn").classList.remove("active");
    document.getElementById("post-options").style.display = "none";
  } else if (option === "post") {
    document.getElementById("post-btn").classList.add("active");
    document.getElementById("get-btn").classList.remove("active");
    document.getElementById("post-options").style.display = "block";
  }
}
