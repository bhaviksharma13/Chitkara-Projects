const currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const monthElement = document.getElementById("calendar-month");
        const datesElement = document.getElementById("calendar-dates");

        function generateCalendar() {
            monthElement.innerText = monthNames[currentMonth] + ' ' + currentYear;
            datesElement.innerHTML = '';

            const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

            for (let i = 0; i < firstDayOfMonth; i++) {
                const li = document.createElement('li');
                li.className = 'calendar-date inactive-date';
                li.innerText = '';
                datesElement.appendChild(li);
            }

            for (let i = 1; i <= daysInMonth; i++) {
                const li = document.createElement('li');
                li.className = 'calendar-date';
                if (currentDate > new Date(currentYear, currentMonth, i)) {
                    li.classList.add('inactive-date');
                }
                li.innerText = i;
                li.addEventListener('click', () => selectDate(i));
                datesElement.appendChild(li);
            }
        }
        function selectDate(day) {
            const selectedDate = new Date(currentYear, currentMonth, day);   
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
         const formattedDate = selectedDate.toLocaleDateString('en-US', options);
        //  alert(formattedDate);
         
            document.querySelector(".div1").style.display="none";
            document.querySelector(".div2").style.display="inline";

            document.querySelector(".d").textContent= formattedDate;
        }

        generateCalendar();

        document.getElementById('prev-month').addEventListener('click', () => {
            currentMonth -= 1;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear -= 1;
            }
            generateCalendar();
        });

        document.getElementById('next-month').addEventListener('click', () => {
            currentMonth += 1;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear += 1;
            }
            generateCalendar();
        });
        
        document.querySelector(".c").addEventListener("click",()=>{
            document.querySelector(".div1").style.display="inline";
            document.querySelector(".div2").style.display="none";
        })

		let boolvalue={
			namee:true,
			emai:true,
			phone:true,
			mess:true
		};
		for(let i=0;i<document.querySelectorAll(".form .inp").length;i++){
			document.querySelectorAll(".form input")[i].addEventListener("blur",()=>{
				if(document.querySelectorAll(".form input")[i].value==""){
					document.querySelectorAll(".reqd")[i].style.display="inline";
					document.querySelectorAll(".inp")[i].style.border="1px solid red";
					let classn=document.querySelectorAll(".reqd")[i].parentNode.className
					boolvalue[classn]=false;
				}
				
			})
		}
		
		for(let i=0;i<document.querySelectorAll(".form input").length;i++){
			document.querySelectorAll(".form input")[i].addEventListener("input",()=>{
				
					document.querySelectorAll(".reqd")[i].style.display="none";
					document.querySelectorAll(".inp")[i].style.border="1px solid black"
			})
		}

		let btn = document.querySelector(".bsub")
		
		btn.addEventListener("click",()=>{
			
		  if(boolvalue["namee"] && boolvalue["phone"] && boolvalue["emai"] && boolvalue["mess"] ){
			document.querySelector(".psub").style.display="none";
			
		  }
		  else{
			document.querySelector(".psub").style.display="inline";
			document.querySelector(".psub").style.color="red";
		  }
		})





        // to make div3 visible

        for(let i=0;i<document.querySelectorAll(".ti").length;i++){
			document.querySelectorAll(".ti")[i].addEventListener("click",()=>{
				
					document.querySelector(".div2").style.display="none";
					document.querySelector(".div3").style.display="inline";
			})
		}