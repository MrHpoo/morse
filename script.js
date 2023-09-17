// 在按钮点击事件中调用函数
document.getElementById("translateButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const morseCode = textToMorseCode(inputText);
    document.getElementById("outputArea").innerText = morseCode;
});

// 在解码按钮点击事件中调用函数
document.getElementById("decodeButton").addEventListener("click", function () {
    const morseCode = document.getElementById("inputText").value;
    const text = morseCodeToText(morseCode);
    document.getElementById("outputArea").innerText = text;
});
