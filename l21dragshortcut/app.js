const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');
const getboxtitle = document.getElementById('boxtitle');

getbox.addEventListener('click',function(e){
	// getbtns.classList.toggle('show');
	getbtns.classList.add('show');

	console.log(e.target);

	smallmenu(e.target);

});

getbox.addEventListener('dblclick',function(){
	getbtns.classList.remove('show');
});

dragme(getbox);
// var getcx,getcy,setcx,setcy,btntop,btnleft;



function dragme(getele){
	// console.log(getele);

	var getcx,getcy,setcx,setcy;


	// design 1
	// getele.onmousedown = getmousedown;

	// design 2
	if(getele){
		getboxtitle.onmousedown = getmousedown;
	}


	function getmousedown(e){
		// console.log('i am working');
		// console.log(e.target);

		getcx = e.clientX;
		getcy = e.clientY;
		// console.log(getcx,getcy);


		document.onmousemove = dragme;

		document.onmouseup = stopdragme;

		// getbtns.classList.remove('show');

	}

	function dragme(e){
		// console.log(e.target);
		// console.log(getcx,getcy);

		// console.log('new position', e.clientX,e.clientY);

		setcx = getcx - e.clientX;
		setcy = getcy - e.clientY;

		// reset for new pin position 
		getcx = e.clientX;
		getcy = e.clientY;

		// console.log(getcx,setcx);
		// console.log(getcy,setcy);

		var btnleft = getele.offsetLeft;
		var btntop = getele.offsetTop;
		// console.log(btnleft,btntop);


		getele.style.left = (btnleft-setcx) + "px";
		getele.style.top = (btntop-setcy) + "px";

		getbtns.classList.remove('show');

	}

	function stopdragme(){
		document.onmousemove = null;
		document.onmouseup = null;
	}

}

function smallmenu(icobox){
	// console.log(icobox);

	if(icobox.classList.contains("btn-icon")){
		console.log('yes');
	}else{
		console.log('no');
	}
}


// function iconmove(e){

// 	let num = 40;

// 	for(var x = 0; x < getbtnicons.length; x++){

// 		getbtnicons[x].style.top = (btntop-setcy+num) + "px";
// 		getbtnicons[x].style.left = (btnleft-setcx+25) + "px";
// 		console.log(btntop);

// 		if(getbtns.classList.contains("show")){
// 			getbtnicons[x].style.top = (btntop+setcy)+(num+num*x) + "px";
// 		}

// 	};
// }
