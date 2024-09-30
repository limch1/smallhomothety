function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const value = Object.fromEntries(data.entries())

    writeToJSON(value)

  }

document.addEventListener("DOMContentLoaded", e =>{
    const form = document.querySelector('form');

    const categoryQuery = window.location.search;
    const urlParams = new URLSearchParams(categoryQuery)

    form.addEventListener('submit', handleSubmit)
    loadJSON(urlParams)

})

function writeToJSON(value){
    fetch('categories.json')
    .then(res => res.json())
    .then(data =>{
        const FileSystem = require('fs')
        const categoryQuery = window.location.search;
        const urlParams = new URLSearchParams(categoryQuery)
        currLeaderboard = data[urlParams.get('date')]["category"][value["ruleset"]]["leaderboard"]
        currLeaderboard.push(value)
        console.log(currLeaderboard)
        FileSystem.writeFile('categories.json', JSON.stringify(currLeaderboard), function(err){
            if (err){
                console.log("FUCK")
            }
        })

        
    })
}

function loadJSON(urlParams){
    fetch('categories.json')
    .then(res => res.json())
    .then(data =>{
        stDate = urlParams.get('date')
        if (data.hasOwnProperty(stDate)){
            st = data[stDate]["category"]
            document.getElementById("categoryName").textContent = st["name"]
            createSubtitles(st["notes"], document.getElementById("route"))
            createSubtitles(st["splits"], document.getElementById("splits"))
            document.getElementById("description").textContent = st["description"]
            fillLeaderboards(st["1432"]["leaderboard"])
        } else {
            window.location.replace("/404.html")
        }
    })
}

function createSubtitles(data, parentNode){
    let tempDiv = document.createElement("div")
    for (const [key, value] of Object.entries(data)){
        let title = document.createElement("h4")
        let text = document.createTextNode(key + ": ") 
        let link = document.createElement("a")
        link.appendChild(document.createTextNode(value))
        link.href = value
        title.appendChild(text)
        title.appendChild(link)
        tempDiv.appendChild(title)
    }
    parentNode.appendChild(tempDiv)
}

function fillLeaderboards(stData){
    let tBody = document.getElementById("boardBody")

    tBody.innerHTML = " "

    stData.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    for (i=0; i<stData.length; i++){
        let row = document.createElement("tr")

        let index = document.createElement("td")
        index.innerText = i+1
        row.appendChild(index)

        let name = document.createElement("td")
        name.innerText = stData[i]["name"]
        row.appendChild(name)

        let time = document.createElement("td")
        time.innerText = stData[i]["time"]
        row.appendChild(time)
        tBody.appendChild(row)
    }
}

function changeRules(ruleset){
    fetch('categories.json')
    .then(res => res.json())
    .then(data =>{
        const categoryQuery = window.location.search;
        const urlParams = new URLSearchParams(categoryQuery)
        date = urlParams.get("date")
        fillLeaderboards(data[date]["category"][ruleset]["leaderboard"])
    })
}
