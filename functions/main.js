function buttonPress(){
    let average, sum;
    let m, e, s, pe, f, p, j;

    m = Number(document.getElementById('math').value);
    e = Number(document.getElementById('english').value);
    s = Number(document.getElementById('math').value);
    pe = Number(document.getElementById('science').value);
    f = Number(document.getElementById('pe').value);
    p = Number(document.getElementById('psychology').value);
    j = Number(document.getElementById('japanese').value);

    sum = m + e + s + pe + f + p + j;
    average =  sum / 7;

    document.getElementById('ave').innerHTML = 'Average - ' + parseFloat(average).toFixed(2);

    if (document.getElementById('math').value == '' || document.getElementById('english').value == '' || document.getElementById('science').value == '' || document.getElementById('pe').value == '' || document.getElementById('filipino').value == '' || document.getElementById('psychology').value == '' || document.getElementById('japanese').value == ''){
        window.alert('ERROR!\nEMPTY TEXT FIELD');
        document.getElementById('math').value = 'ERROR!';
        document.getElementById('english').value = 'ERROR!';
        document.getElementById('science').value = 'ERROR!';
        document.getElementById('pe').value = 'ERROR!';
        document.getElementById('filipino').value = 'ERROR!';
        document.getElementById('psychology').value = 'ERROR!';
        document.getElementById('japanese').value = 'ERROR!';
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
    document.getElementById('math').value = '';
    document.getElementById('english').value = '';
    document.getElementById('science').value = '';
    document.getElementById('pe').value = '';
    document.getElementById('filipino').value = '';
    document.getElementById('psychology').value = '';
    document.getElementById('japanese').value = '';
}