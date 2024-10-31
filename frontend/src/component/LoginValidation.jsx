function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email = "กรุณาใส่อีเมล"
    } else if(!email_pattern.test(values.email)) {
        error.password = "อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง"
    }

    if(values.password === "") {
        error.password = "กรุณาใส่รหัสผ่านของคุณ"
    } else if(!password_pattern.test(values.password)) {
        error.password = "อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง"
    }

    return error;
}

export default validation;