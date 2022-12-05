let coronaArr=JSON.parse(localStorage.getItem('CoronaStatistics'))
console.log(coronaArr);
let input=document.querySelector('#input')
let searchbtn=document.querySelector('#search')
searchbtn.addEventListener('click',function(){




    for(let elements of coronaArr)

if(input.value.toUpperCase()==elements.country_name.toUpperCase()){
document.getElementById('outputname').innerHTML=elements.country_name
document.getElementById('casenumber').innerHTML=elements.cases
document.getElementById('activeCaseNumber').innerHTML=elements.active_cases
document.getElementById('death').innerHTML=elements.deaths
}

}

)
