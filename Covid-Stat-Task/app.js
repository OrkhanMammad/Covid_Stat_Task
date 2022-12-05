const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c2c3300b6mshe8b981dabf33885p156177jsn9188f644d775',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};
let GetCoronaStat=function(){
    let coronaStatArr=JSON.parse(localStorage.getItem('CoronaStatistics'))
    
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then(response =>localStorage.setItem('CoronaStatistics',JSON.stringify(response.countries_stat)))
	.catch(err => console.error(err));
    let coronaArr=JSON.parse(localStorage.getItem('CoronaStatistics'))
for(let countries of coronaArr){
    let html=
    `
    <tr>
            <th scope="row">${countries.country_name}</th>
            <td>${countries.active_cases}</td>
            <td>${countries.cases}</td>
            <td>${countries.deaths}</td>
          </tr>


    `
    let StatBody=document.querySelector('#statBody').innerHTML+=html

}


}
GetCoronaStat();

