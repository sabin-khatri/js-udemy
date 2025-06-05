document.addEventListener('DOMContentLoaded', function () {

    const generateBtn = document.getElementById('generateBtn'); 
    const verifyBtn = document.getElementById('verifyBtn');
    const otpInput = document.getElementById('otpInput');
    const generatedOtpDisplay = document.getElementById('generatedOtpDisplay');
    const messageArea = document.getElementById('messageArea');

    let currentOtp = null;
    const OTP_LENGTH = 6;
    function generateOtp() {

        let otp = '';
        for (let i = 0; i < OTP_LENGTH; i++) {
            otp += Math.floor(Math.random() * 10);  
        }
        currentOtp = otp;
        generatedOtpDisplay.textContent = currentOtp;
        messageArea.textContent = "OTP generated! enter it to verify";
        messageArea.className ='';
        otpInput.value = '';
    }

    function verifyOtp() {

        const userInput = otpInput.value.trim();

        if(!userInput) {
            messageArea.textContent = 'Please enter OTP';
            messageArea.className = 'error';
            return;
        }

        if(userInput.length !== OTP_LENGTH) {
            messageArea.textContent = 'Invalid OTP';
            messageArea.className = 'error';
            return;
        }

        if(userInput === currentOtp) {
            messageArea.textContent = 'OTP verified!';
            messageArea.className = 'success';
        } else {
            messageArea.textContent = 'Invalid OTP';
            messageArea.className = 'error';
        }
    }
 

    generateBtn.addEventListener('click', generateOtp);
    verifyBtn.addEventListener('click', verifyOtp);

    if(currentOtp) {
        generateOtp();  
    }

});