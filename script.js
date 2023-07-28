document.getElementById('medicineForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var dose = parseFloat(document.getElementById('dose').value);
    var frequency = parseFloat(document.getElementById('frequency').value);
    var packageContent = parseFloat(document.getElementById('packageContent').value);
    var treatmentDuration = parseFloat(document.getElementById('treatmentDuration').value);
    
    var totalUnitsNeeded = (24 / frequency) * dose * treatmentDuration;
    var packagesNeeded = Math.ceil(totalUnitsNeeded / packageContent);
    
    var resultText = 'Se necesitan ' + packagesNeeded + ' empaques.\n';
    resultText += 'Cálculo: (' + 24 / frequency + ' dosis por día) * ' + dose + ' unidades por dosis * ' + treatmentDuration + ' días = ' + totalUnitsNeeded.toFixed(2) + ' unidades en total.\n';
    resultText += 'Como cada empaque contiene ' + packageContent + ' unidades, necesitas ' + packagesNeeded + ' empaques para tener al menos ' + totalUnitsNeeded.toFixed(2) + ' unidades.';
    
    document.getElementById('result').innerText = resultText;

    // Show the modal
    var resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
});

// Reset the form when the "Cerrar" button is clicked
document.querySelector('.modal-footer .btn').addEventListener('click', function() {
    document.getElementById('medicineForm').reset();
});
