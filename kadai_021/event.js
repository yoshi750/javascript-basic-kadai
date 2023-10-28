const clickBtn =document.getElementById("btn");

clickBtn.addEventListener('click', () => {
    const textH2 = document.getElementById("text");
    setTimeout(() =>{ textH2.innerHTML = "ボタンをクリックしました";},2000);
})
