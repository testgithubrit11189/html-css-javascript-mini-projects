const answer=document.getElementById('display');
function appendvalue(value) {
    answer.value += value;
}

function clearDisplay() {
    answer.value = "";
}

function calculateResult() {
    try {
        answer.value = eval(answer.value);
    } catch (error) {
        answer.value = "Error";
    }
}