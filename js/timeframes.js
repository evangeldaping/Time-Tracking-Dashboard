fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

    function appendData(data) {
        for (var i = 0; i < data.length; i++) {
            const titles = document.querySelectorAll('.title');
            titles[i].innerHTML = `${data[i].title}`;

            const currentTime = document.querySelectorAll('.current-time');
            const previousTime = document.querySelectorAll('.previous-time');
            const displayDataCurrentPrevious = () => {
                fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    currentTime.forEach((e,i) => {
                        currentTime[i].innerHTML = `${data[i].timeframes[state].current}hrs`;
                        previousTime[i].innerHTML = `${[timeframe]} - ${data[i].timeframes[state].previous}hrs`;
                    })
                })
            }           

            const dailyMenu = document.getElementById("liDaily");
            const weeklyMenu = document.getElementById("liWeekly");
            const monthlyMenu = document.getElementById("liMonthly");
            
            dailyMenu.addEventListener('click', () => {
                timeframe = 'Yesterday';
                state = 'daily';
                dailyMenu.classList.add("selected");
                weeklyMenu.classList.remove("selected");
                monthlyMenu.classList.remove("selected");
                displayDataCurrentPrevious();
            })

            weeklyMenu.addEventListener('click', () => {
                timeframe = 'Last Week';
                state = 'weekly';
                dailyMenu.classList.remove("selected");
                weeklyMenu.classList.add("selected");
                monthlyMenu.classList.remove("selected");
                displayDataCurrentPrevious();
            })

            monthlyMenu.addEventListener('click', () => {
                timeframe = 'Last Month';
                state = 'monthly';
                dailyMenu.classList.remove("selected");
                weeklyMenu.classList.remove("selected");
                monthlyMenu.classList.add("selected");
                displayDataCurrentPrevious();
            })
        }
    }
