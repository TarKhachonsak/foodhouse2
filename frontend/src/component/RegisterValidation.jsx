function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA=Z0-9]{8,}$/

    if(values.name === "") {
        error.name = "Name should not be empty"
    }else {
        error.name = ""
    }
    
    if(values.email === "") {
        error.email = "Name should not be empty"
    } else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    } else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    } else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }

    if (values.confirmPassword === "") {
        error.confirmPassword = "Confirm Password should not be empty";
    } else if (!password_pattern.test(values.confirmPassword)) {
        error.confirmPassword = "Passwords do not match";
    } else if (values.confirmPassword !== values.password) {
        error.confirmPassword = "Passwords do not match";
    } else {
        error.confirmPassword = "";
    }
    
    return error;
}

export default validation;