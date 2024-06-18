window.addEventListener('load', () => {
    let columnClassTxt = '';
  
    for (const button of document.getElementsByClassName('button-collection')) {
      button.addEventListener('click', (e) => {
        for (let i = 0; i < e.target.value; i++) {
          columnClassTxt += 'auto ';
          const container = document.getElementById('box-items-collection');
          if (container !== null) {
            container.style.gridTemplateColumns = columnClassTxt;
          }
        }
        columnClassTxt = '';
      });
    }
  });