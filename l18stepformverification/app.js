var getdots = document.getElementsByClassName('dot');
var getpages = document.getElementsByClassName('page');
// console.log(getpages); //HTML Collection

var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');
const getrstcontainer = document.getElementById('result-container');

var objkeys = ["email","password","firstname","lastname","dob","phone","address"];
var datas = [];

var curridx = 0;

showpage(curridx);

function showpage(num){
	// console.log(num);

	getpages[num].style.display = "block";

	num === 0 ? getprevbtn.style.display="none" : getprevbtn.style.display="block";

	num === (getpages.length-1) ? getnextbtn.textContent = "Submit" : getnextbtn.textContent = "Next";

	dotindicator(num);
}

function dotindicator(num){
	// console.log(num);

	for(var x=0; x < getdots.length; x++){
		getdots[x].classList.remove("active");
	}

	getdots[num].className += " active";
}


function gonow(num){
	// // console.log(num);

	// console.log(curridx);
	// getpages[curridx].style.display = "none";

	// curridx = curridx + num;
	// // console.log(curridx);

	// if(curridx >= getpages.length){
	// 	getform.submit();
	// }

	// showpage(curridx);

	// formvalidation();

	// console.log(formvalidation());


	// method1
	// if(formvalidation()){

	// 	getpages[curridx].style.display = "none";

	// 	curridx = curridx + num;
	// 	// console.log(curridx);

	// 	if(curridx >= getpages.length){
	// 		getform.submit();
	// 	}

	// 	showpage(curridx);
	// }

	// method2
	// if(num ===1 && formvalidation()){

	// 	getpages[curridx].style.display = "none";

	// 	curridx = curridx + num;
	// 	// console.log(curridx);

	// 	if(curridx >= getpages.length){
	// 		getform.submit();
	// 	}

	// 	showpage(curridx);
	// }

	// method3
	// if(!formvalidation()){
	// 	return false;
	// }

	// getpages[curridx].style.display = "none";

	// curridx = curridx + num;
	// // console.log(curridx);

	// if(curridx >= getpages.length){
	// 	getform.submit();
	// }

	// showpage(curridx);


	// method4
	// if(num ===  1 && !formvalidation()){		//return false က break လုပ်လိုက်သလို return ပေးလိုက်တော့အောက်က code ကအလုပ်မလုပ်တော့ဘူး(ဒီတိုင်းဆို printout လုပ်ပေးတဲ့ fun, condition စစ်ပီးမှ return ပြန်တဲ့ fun ဖြစ်မှာ)
	// 	return false;
	// }
	// getpages[curridx].style.display = "none";

	// curridx = curridx + num;
	// // console.log(curridx);

	// if(curridx >= getpages.length){
	// 	getform.submit();
	// }

	// showpage(curridx);


	// method5
	// if(!formvalidation()) return false;
	// getpages[curridx].style.display = "none";

	// curridx = curridx + num;
	// // console.log(curridx);

	// if(curridx >= getpages.length){
	// 	getform.submit();
	// }

	// showpage(curridx);


	// method6
	if(num === 1 && !formvalidation()) return false;
	getpages[curridx].style.display = "none";

	curridx = curridx + num;
	// console.log(curridx);

	if(curridx >= getpages.length){
		// getform.submit();


		getform.style.display = "none";
		getrstcontainer.style.display = "block";

		result(datas);


		return false;
	}

	showpage(curridx);

}



function* genfun(){
	var index = 0;

	while(index < objkeys.length){

		yield index++;
	}
}

// console.log(genfun().next().value);


let gen = genfun();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);




function formvalidation(){

	var valid = true;

	var getcurrinput = getpages[curridx].getElementsByTagName("input");
	// console.log(getcurrinput);
	// console.log(getcurrinput[0].value);

	for(var x = 0; x < getcurrinput.length; x++){
		// console.log(getcurrinput[x].value);

		if(getcurrinput[x].value === ''){
			getcurrinput[x].classList.add('invalid');
			valid = false;
		}else{

			// console.log('x value is ' , x);
			// console.log(objkeys[x]);
			// console.log(getcurrinput[x].value);

			// console.log('gen value is = ',gen.next().value);


			// Method 1
			// const keys = objkeys[gen.next().value];
			// console.log(keys);
			// const values = getcurrinput[x].value;
			// const obj = {
			// 	[keys] : values
			// }
			// datas.push(obj);


			// Method 2
			// const keys = objkeys[gen.next().value];
			// const values = getcurrinput[x].value;
			// var obj = {};
			// obj[keys] = values;
			// datas.push(obj);



			// Method 3
			const keys = objkeys[gen.next().value];
			const values = getcurrinput[x].value;
			datas.push({[keys] : values});

		}
	}

	if(valid){
		getdots[curridx].className += " done";
	}

	return valid;
}


function result(data){
	// console.log(data);

	getrstcontainer.innerHTML = `
			<ul>
				<li>Name : ${data[2].firstname} ${data[3].lastname}</li>
				<li>Email : ${data[0].email}</li>
				<li>Date Of Birth : ${data[4].dob}</li>
				<li>Phone Number : ${data[5].phone}</li>
				<li>Address : ${data[6].address}</li>
			</ul>

			<button type="submit" class="submit-btn" onclick="submitbtn()">Apply Now</button>
	`;
}

function submitbtn(){
	getform.submit();
}
