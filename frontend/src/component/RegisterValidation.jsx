function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.name === "") {
        error.name = "กรุณากรอกชื่อ";
    }

    if (values.email === "") {
        error.email = "กรุณากรอกอีเมล";
    } else if (!email_pattern.test(values.email)) {
        error.email = "อีเมลไม่ถูกต้อง";
    }

    if (values.password === "") {
        error.password = "กรุณากรอกรหัสผ่าน";
    } else if (!password_pattern.test(values.password)) {
        error.password = "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร ประกอบด้วยตัวพิมพ์เล็ก ตัวพิมพ์ใหญ่ และตัวเลขอย่างน้อยหนึ่งตัว";
    }

    // Confirm Password Validation
    if (values.confirmPassword === "") {
        error.confirmPassword = "กรุณากรอกยืนยันรหัสผ่าน";
    } else if (values.confirmPassword !== values.password) {
        error.confirmPassword = "ยืนยันรหัสผ่านไม่ตรงกัน";
    }

    return error;
}

export default validation;
