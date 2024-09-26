function calculatelove(){
    const yourname=document.getElementById("yourname").value;
    const partnername=document.getElementById("partnername").value;
    if (yourname === '' || partnername === ''){
        document.getElementById('result').textContent='please enter both names';
        return;
    }
    const lovepercentage=Math.floor(Math.random()*51)+50;
    document.getElementById('result').textContent=`${yourname} and ${partnername} have a ${lovepercentage}% love compatibility`;

}