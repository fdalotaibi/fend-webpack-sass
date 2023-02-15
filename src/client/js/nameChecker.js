function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Fatima"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}
function getData() {
    console.log("in getData")
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=24.774265&lon=46.738586&appid=27d123680d364c8ef049f2b54bb5206d')
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            document.getElementById('results').innerHTML += " my city is : " + data.name
        })
}
export { checkForName, getData }
