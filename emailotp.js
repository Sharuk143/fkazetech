function sendOTP() {
	const email = document.getElementById('email');
	const otpverify = document.getElementsByClassName('otpverify')[0];
    let otp_val = Math.floor(Math.random() * 10000);
    let emailbody = `<h2>your otp is </h2>${otp_val}`;
    Email.send({
        SecureToken : "2322b7b7-ce24-4ca6-b879-0cd5739903b4",
        To : email.value,
        From : "ankisetti501@gmail.com",
        Subject : "Email OTP using javascript",
        Body : emailbody,
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP sent to your email " + email.value);
    
                otpverify.style.display = "flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp-btn');
    
                otp_btn.addEventListener('click', () => {
                    if (otp_inp.value == otp_val) {
                        alert("Email address verified...");
                    }
                    else {
                        alert("Invalid OTP");
                    }
                })
            }
        }
    );
    }