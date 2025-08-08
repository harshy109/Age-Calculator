const displayButton = document.querySelector('.cal-btn');
const ans = document.querySelector(".ans");

let inputDate = document.querySelector('.date');
inputDate.max = new Date().toISOString().split("T")[0];



function calculateAge(){
    const birthDate = new Date(inputDate.value);

    const y1 = birthDate.getFullYear();
    const m1 = birthDate.getMonth()+1;
    const d1 = birthDate.getDate()

    const today = new Date();

    const y2 = today.getFullYear();
    const m2 =today.getMonth();
    const d2 = today.getDate();

    let y3, m3, d3;

    y3 = y2- y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 - m1 + m2;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1) - d1 + d2;
    }
    if(m3<=0){
        m3 = 11;
        y3--;
    }

    ans.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span>, and <span>${d3}</span> days old today!`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}



// displayButton.addEventListener('click', function(){
//     let p = document.createElement('p');
//     p.innerHTML = "You are "+<span>years</span>+" years, "+<span>months</span>+", and "+<span>days</span>+" days old today!";
//     p.className = "age-display";
//     ans.appendChild(p);
// })


// const currDay = new Date();
// console.log(currDay);

// const birthDateInput = document.querySelector('.date').value;

// const birthDate = new Date(birthDateInput);

// console.log(birthDate.getDay()," ",birthDate.getMonth(), " ", birthDate.getFullYear());