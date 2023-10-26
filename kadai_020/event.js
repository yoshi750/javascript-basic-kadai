const clickBtn =document.getElementById("btn");

clickBtn.addEventListener('click', () => {
    const textH2 = document.getElementById("text");
    textH2.innerHTML = "ボタンをクリックしました";
})
