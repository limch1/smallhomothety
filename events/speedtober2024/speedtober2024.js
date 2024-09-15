// function putData() {

// }


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
        console.log("insideInsertValues()")
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

window.addEventListener("DOMContentLoaded", () => {

    fetch('speedtober2024/categories.json')
        .then(res => res.json())
        .then(data =>{
            console.log();
            let table = document.getElementById("speedtoberNav");
            for (i=0; i<Object.keys(data).length; i++){
                let d = data[(i+1).toString()];
                let newDate = new scheduleDay("Oct " + (i+1).toString(), d["category"], d["rando"], d["randohard"], d["IL"], d["runners"])
                console.log(newDate.category);
                newDate.insertValues(table);
            }
        });

})