document.getElementById('dark-preview').checked;

function changeTheme() {
    var darkMode = document.getElementById('dark-preview').checked;

    if(darkMode) {
        document.body.classList.toggle("dark");
    }
}