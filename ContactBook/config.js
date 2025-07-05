

var rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
var apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.location.href = "enter-api-key.html";
        return null;
    }
    return localStorage.getItem("apiKey");
}

