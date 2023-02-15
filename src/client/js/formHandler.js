function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    Client.getData()

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            document.getElementById('results').innerHTML = data.message
        })
}
/* Function to GET Web API Data*/
// const getData = async () => {
//     const api = 'https://api.openweathermap.org/data/2.5/weather?lat=24.774265&lon=46.738586&appid=27d123680d364c8ef049f2b54bb5206d'
//     // const apiKey = '27d123680d364c8ef049f2b54bb5206d';
//     // const zip = document.getElementById("zip").value
//     const res = await fetch(api)
//     try {

//         const data = await res.json();
//         console.log(data)
//         external_API_result = data
//         return data;
//     } catch (error) {
//         console.log("error", error);
//         // appropriately handle the error
//     }
// }

export { handleSubmit }
