function doThis(uniqueClass) {
    for (let i = 0; i < uniqueClass.length; i++) {
        uniqueClass[i].style.display = 'block';
    }
}

function refresh(allItems) {
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'none';
    }
}

function clearActiveButton() {
    buttons.forEach(button => {
      button.classList.remove('all-btn-bg','cpu-btn-bg','memory-btn-bg','mobo-btn-bg','os-btn-bg','soft-btn-bg','input-btn-bg','output-btn-bg','others-btn-bg');
    });
}