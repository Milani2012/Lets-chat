function addUser() {
    user_name = document.getElementById("user_name").ariaValueMax;

    localStorage.setItem("user_name", user_name);

      window.location = "Lets_chat.html";
}