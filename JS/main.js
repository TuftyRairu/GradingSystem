function buttonPress(){
    let average, sum;
    let c, p, r, t, m, u, a;

    c = Number(document.getElementById('comprog').value);
    p = Number(document.getElementById('purcom').value);
    r = Number(document.getElementById('rph').value);
    t = Number(document.getElementById('tcw').value);
    m = Number(document.getElementById('mmw').value);
    u = Number(document.getElementById('uts').value);
    a = Number(document.getElementById('artapp').value);

    sum = c + p + r + t + m + u + a;
    average =  sum / 7;

    document.getElementById('ave').innerHTML = 'Average - ' + parseFloat(average).toFixed(2);

    if (document.getElementById('comprog').value == '' || document.getElementById('purcom').value == '' || document.getElementById('rph').value == '' || document.getElementById('tcw').value == '' || document.getElementById('mmw').value == '' || document.getElementById('uts').value == '' || document.getElementById('artapp').value == ''){
        window.alert('ERROR!\nEMPTY TEXT FIELD');
        document.getElementById('comprog').value = 'ERROR!';
        document.getElementById('purcom').value = 'ERROR!';
        document.getElementById('rph').value = 'ERROR!';
        document.getElementById('tcw').value = 'ERROR!';
        document.getElementById('mmw').value = 'ERROR!';
        document.getElementById('uts').value = 'ERROR!';
        document.getElementById('artapp').value = 'ERROR!';
        document.getElementById('ave').innerHTML = 'Average - ERROR!';
        document.getElementById('rem').innerHTML = 'Remark - ERROR!';
        document.getElementById('desc').innerHTML = 'Descriptor - ERROR!';
    } else if (average > 89 && average < 101){
        document.getElementById('rem').innerHTML = 'Remark - PASSED';
        document.getElementById('desc').innerHTML = 'Descriptor - OUTSTANDING';
    } else if (average > 84 && average < 90){
        document.getElementById('rem').innerHTML = 'Remark - PASSED';
        document.getElementById('desc').innerHTML = 'Descriptor - VERY SATISFACTORY';
    } else if (average > 79 && average < 85){
        document.getElementById('rem').innerHTML = 'Remark - PASSED';
        document.getElementById('desc').innerHTML = 'Descriptor - SATISFACTORY';
    } else if (average > 74 && average < 80){
        document.getElementById('rem').innerHTML = 'Remark - PASSED';
        document.getElementById('desc').innerHTML = 'Descriptor - FAIRLY SATISFACTORY';
    } else if (average >= 0 && average < 75){
        document.getElementById('rem').innerHTML = 'Remark - FAILED';
        document.getElementById('desc').innerHTML = 'Descriptor - DID NOT MEET EXPECTATIONS';
    } else {
        window.alert('ERROR!\nDescriptor - DOES NOT EXIST');
        document.getElementById('rem').innerHTML = 'Remark - ERROR!';
        document.getElementById('desc').innerHTML = 'Descriptor - DOES NOT EXIST';
    }
}

function reset(){
    sum = 0;
    average = 0;
    document.getElementById('ave').innerHTML = 'Average - ';
    document.getElementById('rem').innerHTML = 'Remark - ';
    document.getElementById('desc').innerHTML = 'Descriptor - ';
    document.getElementById('comprog').value = '';
    document.getElementById('purcom').value = '';
    document.getElementById('rph').value = '';
    document.getElementById('tcw').value = '';
    document.getElementById('mmw').value = '';
    document.getElementById('uts').value = '';
    document.getElementById('artapp').value = '';
}