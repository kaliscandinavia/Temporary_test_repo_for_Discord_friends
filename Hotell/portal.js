     function pre_filld_Password() {
            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;

            // Check if both email and password are filled
            if (!password || !email) {
                alert("Please fill in both Email and Password.");
                return false; 
            }

            // Hardcode the AP password
            const PasswordField = document.getElementById('wpa');
            PasswordField.value = "ASUS_88_password"; 

            // Alert the user with the AP password and email
            alert("Your AP password is: " + PasswordField.value  + "\nYou now have internet access!");

            // Allow form submission to check.htm
            return true; 
        }

        // Toggle to see password if checked
        function toggle_password() {
            console.log("Checkbox clicked");
            const passwordField = document.getElementById('password');
            const isChecked = document.getElementById('showPassword').checked;
            passwordField.type = isChecked ? 'text' : 'password'; 
        }
