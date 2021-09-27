function checkPasswordMatch() {
        var password = $("#txtNewPassword").val();
        var confirmPassword = $("#txtConfirmPassword").val();

        if (password != confirmPassword)
            $("#divCheckPasswordMatch").html("Passwords do not match!").addClass('text-danger').removeClass('text-success');

        else
            $("#divCheckPasswordMatch").html("Passwords match.").addClass('text-success').removeClass('text-danger');
    }
