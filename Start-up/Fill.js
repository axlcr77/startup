function store(){
    const info = document.querySelector("#Summary");
    localStorage.setItem('SummaryEntry' , info.value);
    window.location.href = "ThingsLearned.html";
}