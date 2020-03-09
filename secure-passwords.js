const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

const SecurePassword = {
    generate: function () {
        const ul = document.getElementById('ul_passwords');
        ul.innerHTML = '';
        const count = parseInt(document.getElementById("count_passwords").value);
        console.log(count);
        for (let i = 0; i < count; i++) {
            let li = document.createElement('li');
            li.className = "list-group-item d-flex justify-content-between lh-condensed";
            li.textContent = SecurePassword.getPassword();
            ul.appendChild(li);
        }
    },
    getPassword: function () {
        let allowed = '';
        if (document.getElementById("chk_uppercase").checked) {
            allowed += uppercase;
        }
        if (document.getElementById("chk_lowercase").checked) {
            allowed += lowercase;
        }
        if (document.getElementById("chk_numbers").checked) {
            allowed += numbers;
        }
        if (document.getElementById("chk_symbols").checked) {
            allowed += symbols;
        }

        let password = '';
        let strength = parseInt(document.getElementById("length_password").value);
        for (var i = 0; i < strength; i++) {
            let random = Math.floor(Math.random() * allowed.length);
            password += allowed[random];
        }

        return password;
    }
};