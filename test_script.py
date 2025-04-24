# test_script.py
user_input = "<script>alert('XSS');</script>"
print("Hello, " + user_input)  # This should be detected by Semgrep
