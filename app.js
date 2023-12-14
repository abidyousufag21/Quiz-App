let attempt = 3;

function loginBtn() {
  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  if (userName === "abidyousuf@gmail.com" && password === "123456") {
    alert("Login Successfully");
    window.location = "./quiz.html";
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt(s)");

    if (attempt === 0) {
      document.getElementById("userName").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("loginBtn").disabled = true;
      return false;
    }
  }
}
document.getElementById("loginBtn").addEventListener("click", loginBtn);
