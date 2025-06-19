const inputField = document.getElementById('inputField');
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

    const inputValue = inputField.value;
  const alphanumericRegex = /^[a-zA-Z0-9]+$/; 

   if (alphanumericRegex.test(inputValue)) {
  
    alert('Form submitted successfully!');
    this.reset(); 
  } else {

  }
});