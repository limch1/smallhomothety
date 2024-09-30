class scheduleDay {
    constructor(date, category, rando, randohard, il, runners){
        this.date = date;
        this.category = category;
        this.rando = rando;
        this.randohard = randohard;
        this.il = il;
        this.runners = runners
    }

    insertValues(table){
        let row = document.createElement("tr");

        let dateCell = document.createElement("td");
        dateCell.innerText = this.date;
        row.appendChild(dateCell);

        let catCell = document.createElement("td");
        catCell.innerText = this.category;
        row.appendChild(catCell);

        let ranCell = document.createElement("td");
        ranCell.innerText = this.rando;
        row.appendChild(ranCell);

        let hardCell = document.createElement("td");
        hardCell.innerText = this.randohard;
        row.appendChild(hardCell);

        let ilCell = document.createElement("td");
        ilCell.innerText = this.il;
        row.appendChild(ilCell);

        let runCell = document.createElement("td");
        runCell.innerText = this.runners;
        row.appendChild(runCell);

        table.appendChild(row);

    }

}

let tableWeek = 1;
const date = new Date()
let currDay = 9//date.getDate()
let currMonth = 10//date.getMonth()

function testing(){
    fetch('speedtober2024/categories.json')
        .then(res => res.json())
        .then(data =>{
            console.log(JSON.stringify(data["8"]["rando"]))
        });
}

function nextWeek(){

    let weekHeader = document.getElementById("weekName")

    currDate = currDay
    maxWeek = Math.floor(currDay/7) + 1

    if (tableWeek < maxWeek){
        document.getElementById("lastWeek").disabled = false
        tableWeek += 1
        start = 1 + ((7*tableWeek) - 7)
        if (tableWeek == 4 || tableWeek == maxWeek){
            end = currDate
            document.getElementById("nextWeek").disabled = true
        } else {
            end = (7*tableWeek)
        }
        populateTables(start, end)
        weekHeader.textContent = "Week " + tableWeek.toString()
    }
    
}

function lastWeek(){

    let weekHeader = document.getElementById("weekName")

    currDate = date.getDate()

    if (tableWeek > 1){
        document.getElementById("nextWeek").disabled = false
        tableWeek -= 1
        start = 1 + ((7*tableWeek) - 7)
        end = 7 * tableWeek
        weekHeader.textContent = "Week " + tableWeek.toString()
        if (tableWeek == 1){
            document.getElementById("lastWeek").disabled = true
        }
        populateTables(start, end)
    }


}


function populateTables(start, end){
    fetch('speedtober2024/categories.json')
        .then(res => res.json())
        .then(data =>{

            //TODO: implement case for alternate notes+splits

            let tBody = document.getElementById("stBody")

            tBody.innerHTML = " ";

            for (i=start-1; i<end; i++){
                let d = data[(i+1).toString()];
                if ([1, 8, 15, 22].includes(i+1)){
                    randoValue = d["rando"]["name"]
                    hardRandoValue = d["randohard"]["name"]
                } else {
                    randoValue = " "
                    hardRandoValue = " "
                }
                let newDate = new scheduleDay("Oct " + (i+1).toString(), d["category"]["name"], randoValue, hardRandoValue, d["IL"]["name"], d["runners"])
                console.log(newDate.category);
                newDate.insertValues(tBody);
            }
        });
}

window.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("lastWeek").disabled = true

    month = currMonth
    day = currDay
    if (month < 10){
        end = 2 
    } else if (day > 7){
        end = 7
    } else {
        end = day + 1
    }

    if (tableWeek == 1){
        if (day < 7 || month < 10){
            document.getElementById("nextWeek").disabled = true
        } else {
            document.getElementById("nextWeek").disabled = false
        }
    }

    tableWeek = 1;
    populateTables(1, end);
})