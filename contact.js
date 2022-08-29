const submitbtn = document.getElementById('submit-button-contact');
const prevHTML = submitbtn.innerHTML;

submitbtn.addEventListener('click', function handleClick() {
    submitbtn.textContent = 'Successfully Submitted ';
    submitbtn.style.backgroundColor = "#5cb85c";
    submitbtn.disabled=true;
}
);




const closebtn = document.getElementById('close-button-contact');

closebtn.addEventListener('click', function handleClick() {
    submitbtn.textContent = prevHTML;
    submitbtn.style.backgroundColor = '#0275d8';
    submitbtn.disabled=false;

}
);


const crossbtn = document.getElementById('cross-button-contact');

crossbtn.addEventListener('click', function handleClick() {
    submitbtn.textContent = prevHTML;
    submitbtn.style.backgroundColor = '#0275d8';
    submitbtn.disabled=false;

}
);


closebtn.addEventListener('click', function handleClick(event) {
    // 👇️ if you are submitting a form (prevents page reload)
    event.preventDefault();
  
    const recipientName = document.getElementById('recipient-name');
    const recipientNumber = document.getElementById('recipient-number');
    const recipientMail = document.getElementById('recipient-mail');
    const JobDescription = document.getElementById('Job-Description');
    const companyaddress = document.getElementById('company-address');
    const InputCity = document.getElementById('inputCity');
    const InputState = document.getElementById('inputState');
    const InputZip = document.getElementById('inputZip');
  
    // Send value to server
  //   console.log(firstNameInput.value);
  
    recipientName.value = '';
    recipientNumber.value = '';
    recipientMail.value = '';
    JobDescription.value = '';
    companyaddress.value = '';
    InputCity.value = '';
    InputState.value = '';
    InputZip.value = '';
  }
  );


crossbtn.addEventListener('click', function handleClick(event) {
    // 👇️ if you are submitting a form (prevents page reload)
    event.preventDefault();
  
    const recipientName = document.getElementById('recipient-name');
    const recipientNumber = document.getElementById('recipient-number');
    const recipientMail = document.getElementById('recipient-mail');
    const JobDescription = document.getElementById('Job-Description');
    const companyaddress = document.getElementById('company-address');
    const InputCity = document.getElementById('inputCity');
    const InputState = document.getElementById('inputState');
    const InputZip = document.getElementById('inputZip');
  
    // Send value to server
  //   console.log(firstNameInput.value);
  
    recipientName.value = '';
    recipientNumber.value = '';
    recipientMail.value = '';
    JobDescription.value = '';
    companyaddress.value = '';
    InputCity.value = '';
    InputState.value = '';
    InputZip.value = '';
  }
  );
