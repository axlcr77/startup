async function LoadEntries(){
  let Summaries = [];
  const v = await fetch('/api/Entry');
  // const v = await fetch('/api/Entry',{
  //   method: 'GET',
  //   headers: { 'content-type': 'application/json' },
  // });
  Summaries = await v.json();
  // const thing = localStorage.getItem('EntryList');
 // const SummText = document.getItem('Boxes');
  // if(v){
  //   Summaries = JSON.parse(v);
  // }
  displayEntries(Summaries);
}



  function displayEntries(Entry){
  const divBodyEl = document.querySelector('#Boxes');
  divBodyEl.className = 'Entries'
  if(Entry.length){
    for( const [i, Summary] of Entry.entries()){
      
      const SubjectdEl = document.createElement('p');
      const OnelinedEl = document.createElement('p');
      const SummdEl = document.createElement('p');

      SubjectdEl.className = 'h4';
      OnelinedEl.className = 'h5';
      

      SubjectdEl.textContent = Summary.Subject;
      OnelinedEl.textContent = Summary.One_liner;
      SummdEl.textContent = Summary.Summ;

      const EntrydEl = document.createElement('div');
      EntrydEl.appendChild(SubjectdEl);
      EntrydEl.appendChild(OnelinedEl);
      EntrydEl.appendChild(SummdEl);

      divBodyEl.appendChild(EntrydEl);

    }
  } else{
    divBodyEl.innerHTML = '<p>No entries yet!</p>';
  }
}

LoadEntries();


// function LoadEntries2(){
//     let fullEntry = [];
//     const Sub = localStorage.getItem('Subject');
//     const One = localStorage.getItem('OneLine');
//     const Sum= localStorage.getItem('SummaryEntry');
//     const output = document.getElementById('output1');

//     output.innerHTML = Sum;

//     if(!Sub.length || !One.length || !Sum.length){
//       output.innerHTML = 'No Entries yet!'
//     }
// }

// LoadEntries2();
