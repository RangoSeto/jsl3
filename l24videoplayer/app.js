// Get UI

const getvideoscreen = document.getElementById('videoscreen');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

//// FOR RANGE
// const progress = document.getElementById('progress');

const getdisplaytime = document.getElementById('displaytime');
const getfullscreen = document.getElementById('fullscreen');

const getcontainer = document.querySelector('.container');
const getopnfullscreen = document.querySelector('.openfullscreen');
const getclsfullscreen = document.querySelector('.closefullscreen');

const gettitle = document.getElementById('title');

//// FOR PROGRESS CONTAINER
const getprogressctn = document.getElementById('progress-container');
const progress = document.getElementById('progress');


const videos = ['samplevideo1','samplevideo2'];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(vdo){
	getvideoscreen.src = `./source/${vdo}.mp4`;
	gettitle.innerText = vdo;
}

function playvdo(){
	playbtn.querySelector('i.fas').classList.remove('fa-play');
	playbtn.querySelector('i.fas').classList.add('fa-pause');

	// play() method came from video api(video tag နဲ့ဖန်တီးထားရမှာ)
	getvideoscreen.play();
}

function pausevdo(){
	playbtn.querySelector('i.fas').classList.remove('fa-pause');
	playbtn.querySelector('i.fas').classList.add('fa-play');

	// pause() method came from video api(video tag နဲ့ဖန်တီးထားရမှာ)
	getvideoscreen.pause();
}

function playpausevdo(){

	// paused keyword came from video api
	if(getvideoscreen.paused){
		// getvideoscreen.play();
		playvdo();
	}else{
		// getvideoscreen.pause();
		pausevdo();
	}

}

function nextvdo(){
	curridx++;

	if(curridx > videos.length-1){
		curridx = 0;
	}
	// console.log(curridx);

	loadvideo(videos[curridx]);
	playvdo();
}

function previousvdo(){
	curridx -= 1;

	if(curridx < 0){
		curridx = videos.length-1;
	}
	// console.log(curridx);

	loadvideo(videos[curridx]);
	playvdo();
}


function stopvideo(){
	getvideoscreen.currentTime = 0;
	pausevdo();
}



function updateprogress(e){

	// console.log(e.target); //video tagရ
	// console.log(e.srcElement); //video tag ရ
	// console.log(this); //video tag ရ

	// Method 2
	// const currenttime = e.target.cureentTime;
	// const duration = e.target.duration;
	// console.log(currenttime,duration);

	// Method 3
	// const {currentTime} = e.target;
	// const {duration} = e.target;   //same as => const duration = e.target.duration (object ထဲကname ကို key name ပေးမှရမယ်)
	// console.log(currentTime,duration);

	// Method 4
	// const {currentTime,duration} = e.target;
	// console.log(currentTime,duration);

	// Method 5
	const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration];
	// console.log(currentTime,duration);



	// Method1

	// currentTime came from video api
	// console.log(getvideoscreen.currentTime);

	// duration came from video api
	// console.log(getvideoscreen.duration);

	// console.log(getvideoscreen.currentTime/getvideoscreen.duration) *100; //100ပေါ်အခြေခံတွက်အောင်လုပ်လိုက်တာ


	// for RANGE
	// if(getvideoscreen.currentTime === 0){
	// 	progress.value = 0;
	// }else{
	// 	progress.value = (getvideoscreen.currentTime/getvideoscreen.duration) *100;
	// 	// progress.value = (currentTime/duration) *100; //အပေါ်မှာသတ်မှတ်ထား

	// }


	// for PROGRESS CONTAINER
	if(getvideoscreen.currentTime === 0){
		progress.style.width = '0%';
	}else{
		const progresspercent = (currentTime/duration) *100;
		progress.style.width = `${progresspercent}%`;
	}	



	let getmins = Math.floor(getvideoscreen.currentTime/60);
	// console.log(getmins);

	// if(getmins < 10){
	// 	// getmins = '0'+getmins;
	// 	getmins = '0'+String(getmins);
	// }

	let getsecs = Math.floor(getvideoscreen.currentTime%60);
	// console.log(getsecs);

	// if(getsecs < 10){
	// 	// getsecs = '0'+getsecs;
	// 	getsecs = '0'+String(getsecs);
	// }

	// getdisplaytime.innerText = `${getmins}:${getsecs}`;



	// Method 2 (0 နဲ့စစေချင်ရင်)
	// Noted : padStart(target length,pad String) must be String data type
	const minutevalue = getmins.toString().padStart(2,'0');
	const secondvalue = getsecs.toString().padStart(2,'0');

	// console.log(minutevalue,secondvalue);
	// console.log(typeof minutevalue,typeof secondvalue);

	getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;

}


// const getdoce = document.documentElement;

function openfullscreen(){

	if(getcontainer.requestFullscreen){ //Starndard w3c
		getcontainer.requestFullscreen();
	}else if(getcontainer.mozRequestFullscreen){ //firefox
		getcontainer.mozRequestFullscreen();
	}else if(getcontainer.webkitRequestFullscreen){
		getcontainer.webkitRequestFullscreen();
	}else if(getcontainer.msRequestFullscreen){
		getcontainer.msRequestFullscreen();
	}

	getopnfullscreen.style.display = 'none';
	getclsfullscreen.style.display = 'inline-block';


}


// getcontainer နေရာမှာ getvideoscreen နဲ့သူံးရင်အဲ့၁ခုထဲcontrolမပါတာမလို့ရပေမဲ့ ကိုယ်လုပ်ထားတဲ့controlမဟုတ်ဘဲ original ပါတဲ့ controlဖြစ်နေမယ်

function closefullscreen(){

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.mozCancelFullscreen){
		document.mozCancelFullscreen(); 
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}

	getopnfullscreen.style.display = 'inline-block';
	getclsfullscreen.style.display = 'none';

}

function setprogress(e){
	// console.log('hay');
	// console.log((progress.value*getvideoscreen.duration)/100);

	//// FOR RANGE
	// getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;

	//// FOR PROGRESS CONTAINER

	const getelewidth = this.clientWidth;
	// console.log(getelewidth);

	const getclickx = e.offsetX;
	// console.log(getclickx);

	const duration= getvideoscreen.duration;

	getvideoscreen.currentTime = (getclickx/getelewidth) * duration;
	// console.log(getvideoscreen.currentTime);
}


playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);
stopbtn.addEventListener('click',stopvideo);

// getfullscreen.addEventListener('click',openfullscreen);

getvideoscreen.addEventListener('timeupdate',updateprogress); //video tag ဖြစ်မှရvideo Play တိုင်း invoke လုပ်ပေးနေမှာ
getvideoscreen.addEventListener('ended',nextvdo); //video,audio tag ဖြစ်မှရvideo ပြီးသွားရင် invoke လုပ်ပေးမှာ
getvideoscreen.addEventListener('click',playpausevdo);


//// FOR RANGE
// progress.addEventListener('click',setprogress);

//// FOR PROGRESS CONTAINER
getprogressctn.addEventListener('click',setprogress);


getopnfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen);


