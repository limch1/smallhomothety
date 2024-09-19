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

function nextWeek(){

    let weekHeader = document.getElementById("weekName")

    if (tableWeek < 4){
        tableWeek += 1
        populateTables(1 + ((7*tableWeek) - 7), 7 + (tableWeek*7 - 7))
        console.log(1 + ((7*tableWeek) - 7), 7 + (tableWeek*7 - 7))
        weekName.textContent = "Week " + tableWeek.toString()
    } else if (tableWeek == 4) {
        tableWeek += 1
        populateTables(1 + ((7*tableWeek) - 7), 31)
        console.log(1 + ((7*tableWeek) - 7), 31)
        weekName.textContent = "Week " + tableWeek.toString()
    } else if (tableWeek === 5){
        tableWeek = 5
    }
    
    
}

function lastWeek(){
    if (tableWeek > 1){
        tableWeek -= 1
        populateTables(1 + ((7*tableWeek) - 7), 7 + (tableWeek*7 - 7))
        console.log(1 + ((7*tableWeek) - 7), 7 + (tableWeek*7 - 7))
        weekName.textContent = "Week " + tableWeek.toString()
    } else if (tableWeek === 1){
        tableWeek = 1
    }
}

let tableWeek = 1;

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
    tableWeek = 1;
    populateTables(1, 7);
})