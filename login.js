
        // Función para validar el formulario
        function validateForm() {
            // Resetear mensajes de error
            document.getElementById('emailError').innerHTML = '';
            document.getElementById('passwordError').innerHTML = '';

            // Obtener los valores de los campos
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // Expresión regular para validar el formato del correo electrónico
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validar el correo electrónico
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').innerHTML = 'Formato de correo electrónico no válido';
                return false;
            }

            // Validar la longitud de la contraseña
            if (password.length < 8) {
                document.getElementById('passwordError').innerHTML = 'La contraseña debe tener al menos 8 caracteres';
                return false;
            }

            // El formulario es válido
            return true;
        }
    
