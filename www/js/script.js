myWorkingHours.innerHTML = localStorage.getItem("workTime")

function saveWorkTime() {
    let date = MyDate.value;
    let timeBegin = MyBeginTime.value;
    let timeEnd = MyEndTime.value;

    myWorkingHours.innerHTML += 
    `<div class="save-list"><img src="img/clock.png" class="small-img">
    ${date} ${timeBegin} - ${timeEnd}
    </div>`;
    
    localStorage.setItem("workTime", myWorkingHours.innerHTML);
}