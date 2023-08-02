
src="https://code.jquery.com/jquery-3.7.0.min.js"
integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
crossorigin="anonymous"
// progress line running code start --------------
const element = document.querySelector('.sauce-line1');
element.classList.add('new-class');

var updte = $('.counter1').attr("data-count").toString() + "%";
$('.new-class').css("width",updte);

//  two 
const elementwo = document.querySelector('.sauce-line2');
elementwo.classList.add('new-class-two');

var updte2 = $('.counter2').attr("data-count").toString() + "%";
$('.new-class-two').css("width",updte2);

//  three 
const elementhree = document.querySelector('.sauce-line3');
elementhree.classList.add('new-class-three');

var updte3 = $('.counter3').attr("data-count").toString() + "%";
$('.new-class-three').css("width",updte3);

//  Four 
const elementfour = document.querySelector('.sauce-line4');
elementfour.classList.add('new-class-four');

var updte4 = $('.counter4').attr("data-count").toString() + "%";
$('.new-class-four').css("width",updte4);

//  Five 
const elementfive = document.querySelector('.sauce-line5');
elementfive.classList.add('new-class-five');

var updte5 = $('.counter5').attr("data-count").toString() + "%";
$('.new-class-five').css("width",updte5);
// progress line running code end ------------------

// progress percentage code start >>
        $(".counter1").each(function() {
	var $this = $(this),
		countTo = $this.attr("data-count");

	$({ countNum: $this.text() }).animate(
		{
			countNum: countTo
		},
		{
			duration: 2000,
			easing: "linear",
			step: function() {
				$this.text("" + Math.floor(this.countNum) + "%");
			},
			complete: function() {
				$this.text("" + this.countNum + "%");
			}
		}
	);
});

$(".counter2").each(function() {
	var $this = $(this),
		countTo = $this.attr("data-count");

	$({ countNum: $this.text() }).animate(
		{
			countNum: countTo
		},
		{
			duration: 2000,
			easing: "linear",
			step: function() {
				$this.text("" + Math.floor(this.countNum) + "%");
			},
			complete: function() {
				$this.text("" + this.countNum + "%");
			}
		}
	);
});

$(".counter3").each(function() {
	var $this = $(this),
		countTo = $this.attr("data-count");

	$({ countNum: $this.text() }).animate(
		{
			countNum: countTo
		},
		{
			duration: 2000,
			easing: "linear",
			step: function() {
				$this.text("" + Math.floor(this.countNum) + "%");
			},
			complete: function() {
				$this.text("" + this.countNum + "%");
			}
		}
	);
});

$(".counter4").each(function() {
	var $this = $(this),
		countTo = $this.attr("data-count");

	$({ countNum: $this.text() }).animate(
		{
			countNum: countTo
		},
		{
			duration: 2000,
			easing: "linear",
			step: function() {
				$this.text("" + Math.floor(this.countNum) + "%");
			},
			complete: function() {
				$this.text("" + this.countNum + "%");
			}
		}
	);
});

$(".counter5").each(function() {
	var $this = $(this),
		countTo = $this.attr("data-count");

	$({ countNum: $this.text() }).animate(
		{
			countNum: countTo
		},
		{
			duration: 2000,
			easing: "linear",
			step: function() {
				$this.text("" + Math.floor(this.countNum) + "%");
			},
			complete: function() {
				$this.text("" + this.countNum + "%");
			}
		}
	);
});
// progress percentage code end >>

// animation dynamic code start ---------
// one 
const updte_half = $('.counter1').attr("data-count")/2
const x2 = updte_half.toString() + "vw"
const sauce_bottle = document.querySelector('.sauce_bottle');
const keyFrames = document.createElement("style");

keyFrames.innerHTML = `
  @keyframes bottle {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x2});
	}
}
.sauce_bottle {
    animation: bottle 2s linear forwards;
  }
`
sauce_bottle.appendChild(keyFrames);

// two 

const updte_half2 = $('.counter2').attr("data-count")/2
const x = updte_half2.toString() + "vw"
const sauce_bottletwo = document.querySelector('.sauce_bottletwo');
const keyFrames2 = document.createElement("style");

keyFrames2.innerHTML = `
  @keyframes bottletwo {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x});
	}
}
.sauce-bottle {
    animation: bottletwo 2s linear forwards;
  }
`
sauce_bottletwo.appendChild(keyFrames2);


// three

const updte_half3 = $('.counter3').attr("data-count")/2
const x3 = updte_half3.toString() + "vw"
const sauce_bottlethree = document.querySelector('.sauce_bottlethree');
const keyFrames3 = document.createElement("style");

keyFrames3.innerHTML = `
  @keyframes bottlethree {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x3});
	}
}
.sauce-bottle {
    animation: bottlethree 2s linear forwards;
  }
`
sauce_bottlethree.appendChild(keyFrames3);

// four

const updte_half4 = $('.counter4').attr("data-count")/2
const x4 = updte_half4.toString() + "vw"
const sauce_bottlefour = document.querySelector('.sauce_bottlefour');
const keyFrames4 = document.createElement("style");

keyFrames4.innerHTML = `
  @keyframes bottletfour {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x4});
	}
}
.sauce-bottle {
    animation: bottletfour 2s linear forwards;
  }
`
sauce_bottlefour.appendChild(keyFrames4);

// five

const updte_half5 = $('.counter5').attr("data-count")/2
const x5 = updte_half5.toString() + "vw"
const sauce_bottlefive = document.querySelector('.sauce_bottlefive');
const keyFrames5 = document.createElement("style");

keyFrames5.innerHTML = `
  @keyframes bottletfive {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x5});
	}
}
.sauce-bottle {
    animation: bottletfive 2s linear forwards;
  }
`
sauce_bottlefive.appendChild(keyFrames5);

// animation dynamic code end ------------

// percentage count moving code start -----------

// one ------------------ 

const updte_half_per1 = $('.counter1').attr("data-count")/2
const percent1 = document.querySelector('.percent1');
const keyFrames_per1 = document.createElement("style");
const x_per1 = updte_half_per1.toString() + "vw"

keyFrames_per1.innerHTML = `
  @keyframes percetone {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x_per1});
	}
}
.percent1 {
    animation: percetone 2s linear forwards;
  }
`
percent1.appendChild(keyFrames_per1);

// two ------------------ 

const updte_half_per2 = $('.counter2').attr("data-count")/2
const percent2 = document.querySelector('.percent2');
const keyFrames_per2 = document.createElement("style");
const x_per2 = updte_half_per2.toString() + "vw"

keyFrames_per2.innerHTML = `
  @keyframes percettwo {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x_per2});
	}
}
.percent2 {
    animation: percettwo 2s linear forwards;
  }
`
percent2.appendChild(keyFrames_per2);

// three ------------------ 

const updte_half_per3 = $('.counter3').attr("data-count")/2
const percent3 = document.querySelector('.percent3');
const keyFrames_per3 = document.createElement("style");
const x_per3 = updte_half_per3.toString() + "vw"

keyFrames_per3.innerHTML = `
  @keyframes percentthree {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x_per3});
	}
}
.percent3 {
    animation: percentthree 2s linear forwards;
  }
`
percent3.appendChild(keyFrames_per3);

// four ------------------ 

const updte_half_per4 = $('.counter4').attr("data-count")/2
const percent4 = document.querySelector('.percent4');
const keyFrames_per4 = document.createElement("style");
const x_per4 = updte_half_per4.toString() + "vw"

keyFrames_per4.innerHTML = `
  @keyframes percentfour {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x_per4});
	}
}
.percent4 {
    animation: percentfour 2s linear forwards;
  }
`
percent4.appendChild(keyFrames_per4);

// five ------------------ 

const updte_half_per5 = $('.counter5').attr("data-count")/2
const percent5 = document.querySelector('.percent5');
const keyFrames_per5 = document.createElement("style");
const x_per5 = updte_half_per5.toString() + "vw"

keyFrames_per5.innerHTML = `
  @keyframes percentfive {
	0% {
		transform: translateX(0vw);
	}
	100% {
		transform: translateX(${x_per5});
	}
}
.percent5 {
    animation: percentfive 2s linear forwards;
  }
`
percent5.appendChild(keyFrames_per5);

