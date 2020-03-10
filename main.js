(function () {
    'use strict'
    window.addEventListener('load', function () {
        const $frm = document.getElementById("frmSecurePass");
        $frm.addEventListener("submit", (e) => {
            e.preventDefault();
            try {
                const oSecurePassword = Object.create(SecurePassword);
                oSecurePassword.generate();
            } catch (err) {
                alert(err.message);
                console.warn(err.message);
            }
        });
    }, false)
}())