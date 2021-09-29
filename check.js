function checkPasswordMatch() {
        var password = $("#txtNewPassword").val();
        var confirmPassword = $("#txtConfirmPassword").val();

        if (password != confirmPassword)
            $("#divCheckPasswordMatch").html("Passwords do not match!").addClass('text-danger').removeClass('text-warning');

        else
            $("#divCheckPasswordMatch").html("Passwords match.").addClass('text-warning').removeClass('text-danger');
    }
