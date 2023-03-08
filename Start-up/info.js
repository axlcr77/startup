function LoadEntries(){
    let Entries = [];
    const entryText = localStorage.getItem('Boxes');
    if(entryText){
        Entries = JSON.parse(entryText);
    }

    const BodyEl = document.querySelector("#Entrybox");

    if(Entries.length){
        for (const [i, Entries] of Entries.entries()) {
            const positionTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const scoreTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');
      
            positionTdEl.textContent = i + 1;
            nameTdEl.textContent = Entries.name;
            scoreTdEl.textContent = Entries.score;
            dateTdEl.textContent = Entries.date;
      
            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(scoreTdEl);
            rowEl.appendChild(dateTdEl);
      
            BodyEl.appendChild(rowEl);
          }
        } else {
          BodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
        }
}

LoadEntries();

