// function store(){
//     const subject = document.querySelector('#Subject');
//     const One_line = document.querySelector('#Oneline');
//     const info = document.querySelector("#Summary");
//     localStorage.setItem('Subject',subject.value);
//     localStorage.setItem('OneLine',One_line.value);''
//     localStorage.setItem('SummaryEntry' , info.value);
//     window.location.href = "ThingsLearned.html";
//}


function store2(){
    let Entries = [];
    const subject = document.querySelector('#Subject');
    const One_line = document.querySelector('#Oneline');
    const info = document.querySelector("#Summary");
    let entry = {
        Subject: subject.value,
        One_liner: One_line.value,
        Summ: info.value
    }
    Entries.push(entry);
    localStorage.setItem('EntryList', JSON.stringify(Entries));
    window.location.href = "ThingsLearned.html";
}


// function getEntry(){
//     let entries =[];
//     const addEntry = (en) => {
//         en.preventDefault();
//       let entry ={
//         Subject: document.getElementById('#Subject').value,
//         One_line: document.getElementById('#Oneline').value,
//         Summ: document.getElementById('#Summary').value
//       }
//       entries.push(entry);
//       document.querySelector('form').reset();


//       console.warn('Entry added', {entries});
//       let pre= document.querySelector('#msg pre');
//       pre.textContent = '\n' + JSON.stringify(entries,'\t',2);


//       localStorage.setItem('EntryList',JSON.stringify(entries));
//     }
//     window.location.href="ThingsLearned.html";
//   }
  