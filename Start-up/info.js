function LoadEntries(){
  let Summaries = [];
  const thing = localStorage.getItem('EntryList');
 // const SummText = document.getItem('Boxes');
  if(thing){
    Summaries = JSON.parse(thing);
  }

  const divBodyEl = document.querySelector('#Entrybox');

  if(Summaries.length){
    for( const [i, Summary] of Summaries.entries()){
      const SubjectdEl = document.createElement('div');
      const OnelinedEl = document.createElement('div');
      const SummdEl = document.createElement('div');

      SubjectdEl.textContent = Summary.Subject;
      OnelinedEl.textContent = Summary.One_liner;
      SummdEl.textContent = Summary.Summ;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(SubjectdEl);
      rowEl.appendChild(OnelinedEl);
      rowEl.appendChild(SummdEl);

      divBodyEl.appendChild(rowEl);

    }
  } else{
    divBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
  }
}

LoadEntries();