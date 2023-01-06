const options = {year: 'numeric'};
    document.getElementById('CurrentDate').textContent = new Date().toLocaleDateString('en-US', options);