const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-button');
const result = document.getElementById('result');
let reversedWord;
checkBtn.addEventListener('click', () => {
    if(textInput.value == ""){
        alert("Please input a value");
    }else{
        reversedWord = textInput.value.replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('').toLowerCase();
        if(textInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() == reversedWord){
            result.innerHTML = "Palindrom";
            result.style.display = "flex";
            result.style.backgroundColor = "#39e222";
        }else{
            result.innerHTML = "Bukan Palindrom";
            result.style.display = "flex";
            result.style.backgroundColor = "#f53d3d";
        }
    }
});