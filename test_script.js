// test_script.js
var userInput = "<script>alert('XSS');</script>";
document.write("Hello, " + userInput);  // This should be detected by Semgrep
