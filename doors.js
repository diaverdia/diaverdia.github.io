function clicked(sender) {
	var connect = document.getElementById("boxTextInfoDoors");
	connect.style.display = "block";
	var climg = document.getElementById("img-x");
	climg.style.display = "block";
	var textNameBox = document.getElementById("text-name-box");
	var textDescriptionBox = document.getElementById("text-description-box");
	var shadow = document.getElementById("shadow");
	var cashMoney = document.getElementById("cash-money");
	switch (sender.id) {
  		case "door-1":
  			var name = "Специализированная для гостинной";
  			var discription = "Специализированная для гостинной";
  			var money = "20.000"
    		break;
  		case "door-2":
  			var name = "Темная древесина"
  			var discription = "темная";
  			var money = "14.000"
    		break;
  		case "door-3":
  			var name = "Светлая дверь"
  			var discription = "5";
  			var money = "26.000"
    		break;
    	case "door-4":
    		var name = "Светлая с вырезами под стеклянные панели"
    		var discription = "23";
    		var money = "12.000"
    		break;
    	case "door-5":
    		var name = "дверь5"
    		var discription = "124";
    		var money = "16.000"
    		break;
    	case "door-6":
    		var name = "дверь6"
    		var discription = "124";
    		var money = "25.000"
    		break;
    	case "door-7":
    		var name = "дверь7"
    		var discription = "124";
    		var money = "23.000"
    		break;
    	case "door-8":
    		var name = "дверь8"
    		var discription = "52235й";
    		var money = "27.000"
    		break;
    	case "door-9":
    		var name = "дверь9"
    		var discription = "234 234 32";
    		var money = "20.000"
    		break;
    	case "door-10":
    		var name = "дверь10"
    		var discription = "234 дл323я гос3тинной";
    		var money = "20.000"
    		break;
    	case "door-11":
    		var name = "дверь11"
    		var discription = "43";
    		var money = "20.000"
    		break;
    	case "door-12":
    		var name = "дверь12"
    		var discription = "34";
    		var money = "20.000"
    		break;
	}
	textNameBox.innerHTML = "Наименование: " +  name;
	textDescriptionBox.innerHTML = "Описание: " + discription;
	cashMoney.innerHTML = "Стоимость: " + money + " Рублей"; 
	shadow.style.display = "block";


	climg.onclick = function() {
		shadow.style.display = "none";
		connect.style.display = "none";
	}
}


	function clickBuy(){
		var sec1 = document.getElementById('sectionTab-1');
		var sec2 = document.getElementById('sectionTab-2');
		var sec3 = document.getElementById('sectionTab-3');
		var sec4 = document.getElementById('sectionTab-4');
		var sec5 = document.getElementById('sectionTab-5');
		var sec6 = document.getElementById('sectionTab-6');
		sec1.style.display = "none";
		sec2.style.display = "none";
		sec3.style.display = "none";
		sec4.style.display = "none";
		sec5.style.display = "none";
		sec6.style.display = "block";
	}

