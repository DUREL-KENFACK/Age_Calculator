function display_age(){
    let get_year=document.getElementById("birth_year")
    console.log(get_year.value)
    year=2023-get_year.value
    let actual_year=document.getElementById("years")
    actual_year.innerHTML=year
    console.log(actual_year)
    let get_month=document.getElementById("birth_month")
    console.log(get_month.value)
    let actual_month=document.getElementById("months")
    let get_day=document.getElementById("birth_day")
    let actual_day=document.getElementById("days")
    if (get_month > 5){
        month1=get_month.value-5
        month=12-month1.value
        actual_month.innerHTML=month
    }
    else{
        month2=5-get_month.value
        actual_month.innerHTML=month2
    }
    console.log(get_day.value)
    if (get_day>7){
        day1=get_day.value-7
        day=30-day1
        day.innerHTML=actual_day
    }
    else{
        day2=7-get_day.value
        actual_day.innerHTML=day2
    }
}

function change_name(){
const today_date = new Date()
actual_year = today_date.getFullYear()
actual_month = today_date.getUTCMonth()
actual_day = today_date.getDay()
console.log(`${actual_year} ${actual_month} ${actual_day}`)
}
