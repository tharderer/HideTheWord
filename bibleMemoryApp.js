//Global variables
var navTextWidth,
windowWidth,
bookSelected,
verseSelected,
index,
chapterSelected;

var verses = [
{	
	versebody:"For the wages of sin is death but the gift of god is eternal life through jesus christ our lord",
	book:"Romans",
	chapter:6,
	verse:23
},
{	
	versebody:"For the wages of sin is death but the gift of god is eternal life through jesus christ our lord",
	book:"Joshua",
	chapter:6,
	verse:23
}
];
var verse = ["dsfagdhfjg","adsfdhjfklh","adsfgdhfjkglh","dsgfdhfjkgh","fdagdhjfkghlj"];


// var verseArray = verses.versebody.split(" ");

// // displayVerse =function(i){
// // 	console.log(verseArray[i]+" "+verses.book+" "+verses.chapter+":"+verses.verse);
// // }

// var interval = 60000/30;
// var setup = function(){
// 	$("#run").css("display","none");
// 	for(var i=0;i<verseArray.length;i++){
// 		$("#verseDisplay").append('<li id = "hidden">'+verseArray[i] +" "+'</li>');
// 	}
// }
// var i =-1;
// var displayVerse = function(){
// 	$("#verseDisplay li:nth-child("+i+")").css("visibility","visible");
// 	i++;
// }

// $("#input").keypress(function(event){
// 	if(event.which == 13){
// 		var inputText = $("#input").val().toLowerCase();
// 		var verseText = verseArray[i].toLowerCase();
// 		if(inputText == verseText){
// 			$("#verseDisplay li:nth-child("+i+")").css("color","green");
// 		}
// 		else{
// 			$("#verseDisplay li:nth-child("+i+")").css("color","red");
// 		}
// 		$("#input").val("");
// 	}
	
// })
// $("button").on("click",function(){
// 	document.getElementById("input").focus();
// 	setup();
// 	setInterval(displayVerse,interval);
// 	//  
// })
// document.getElementById("run").focus();

// var verseArray = verses.versebody.toLowerCase().split(" ");
// var verse = verses.versebody.toLowerCase().replace(/\s/g,"").split("");
// verse.sort();
// verse.join("");
// console.log(verse);

// //Html snippets
// var randomizedVerse = '<h1>'+verse+'</h1>',
// 	inputBox = '<input id = "input" type = "text">',
// 	submitButton = '<button id = "submit">Submit</button>',
// 	wrong = '<h1 id = "wrong">WRONG</h1>';

// $("#body").append(randomizedVerse);
// $("#body").append(inputBox);
// $("#body").append(submitButton);

// $("#input").keypress(function(){
// 	if(event.which == 13){
// 		var inputText = $("#input").val().toLowerCase().replace(/\s/g,"");
// 		if(verseArray.indexOf(inputText)>-1){
// 			var index = verseArray.indexOf(inputText);
// 			verseArray.splice(index,1,"");
// 			// console.log(verseArray);
// 			$("#body").empty();
// 			var verse = verseArray.join("").split(",").sort();
// 			var randomizedVerse = '<h1>'+verse+'</h1>';
// 			console.log(randomizederse);
// 			$("#body").append(randomizedVerse);
// 			$("#body").append(inputBox);
// 			$("#body").append(submitButton);
// 			$("#input").val("");
// 			$("#input").focus();
// 		}else{	
// 		}
// 		}
// })
var getWindowWidth = function(){
		$("#body").on("resize",function(){
			windowWidth = $(window).width();
			console.log(windowWidth);
		})
		windowWidth = $(window).width();
		console.log(windowWidth);
	}
/********************************************************************************************************************************************
				Function to center the text that appears at the top of each page in the nav bar by the navigation button
*********************************************************************************************************************************************/
var navTextCenterer = function(element){
			navTextWidth = $(element).width();
			console.log(navTextWidth);
			$(window).on("resize", function(){
				navTextWidth = $(element).width();
				console.log(navTextWidth);
			})
			var rightMargin = (windowWidth-navTextWidth)/2-navTextWidth;
			console.log(rightMargin);
		$(element).css("margin-right",rightMargin);
		}
/********************************************************************************************************************************************
		This function prevents all the non letter keypresses from even being checked by the review function that this function calls
*********************************************************************************************************************************************/
var checkForInvalidInput = function(verse){
	$("#body").on("keydown",function(event){
		if((event.which>=65)&&(event.which<=90)){
			console.log(event.which);
			review(event.which,verse);
			index++;
			// console.log(index);
		}
	})
}
/******************************************************************************************************************************************
*******************************************************************************************************************************************
This function is called every time a key is pressed in review mode

This function takes in a keycode and a verse

Goal of this function is to allow the user to get credit for pressing keys that 
are very close to the correct key thus avoiding user frustration over small keyboards and accidentally hitting nearby keys
*********************************************************************************************************************************************
********************************************************************************************************************************************/
var reviewMode;
var index = 0;
var correct = 0;
var review = function(input,reference){
	var verse = "For the wages of sin is death but the gift of god is eternal life through jesus christ our lord";
	verse = verse.toLowerCase().split(" ");
	var inputArray = [];
	switch(verse[index][0]){
		case 'a':
		inputArray = [81,83,87,65];
		break;
		case 'b':
		inputArray = [72,78,86,66];
		break;
		case 'c':
		inputArray = [70,86,88,67];
		break;
		case 'd':
		inputArray = [69,82,83,70,88,68];
		break;
		case 'e':
		inputArray = [87,82,83,68,69];
		break;
		case 'f':
		inputArray = [82,84,68,71,67,70];
		break;
		case 'g':
		inputArray = [71,84,89,70,72,86];
		break;
		case 'h':
		inputArray = [72,89,85,71,74,66];
		break;
		case 'i':
		inputArray = [73,85,79,74,76];
		break;
		case 'j':
		inputArray = [74,85,73,72,75,78];
		break;
		case 'k':
		inputArray = [75,73,79,74,76,77];
		break;
		case 'l':
		inputArray = [76,79,80,75];
		break;
		case 'm':
		inputArray = [77,75,78];
		break;
		case 'n':
		inputArray = [78,74,66,77];
		break;
		case 'o':
		inputArray = [79,73,80,75,76];
		break;
		case 'p':
		inputArray = [80,79,76];
		break;
		case 'q':
		inputArray = [81,87,65];
		break;
		case 'r':
		inputArray = [82,69,84,68,70];
		break;
		case 's':
		inputArray = [83,87,69,65,68,90];
		break;
		case 't':
		inputArray = [84,82,89,70,71];
		break;
		case 'u':
		inputArray = [85,89,73,72,74];
		break;
		case 'v':
		inputArray = [71,67,66,86];
		break;
		case 'w':
		inputArray = [81,69,87,83,65];
		break;
		case 'x':
		inputArray = [68,67,88,90];
		break;
		case 'y':
		inputArray = [84,85,71,72,89];
		break;
		case 'z':
		inputArray = [83,90,88];
		break;
		default:
		console.log("WHAT?????");
	}
		if(inputArray.indexOf(input)>=0){
			$("#reviewVerse li:nth-child("+(index+1)+")").removeClass("white grey");
			$("#reviewVerse li:nth-child("+(index+1)+")").addClass("black");
			correct++;
			console.log(correct);
		}else{
			$("#reviewVerse li:nth-child("+(index+1)+")").removeClass("white grey");
			$("#reviewVerse li:nth-child("+(index+1)+")").addClass("red");
		}
		if(index==verse.length-1){
			$("#body").empty();
			$("#body").append(reviewFinishedHtml(correct,verse.length));
		}
	
}
var reviewFinishedHtml = function(numCorrect,numPossible){
	var accuracy = numCorrect/numPossible*100;
	console.log(accuracy);
	var message = "";
	if(accuracy>=95){
		message = "Great job! You have successfully reviewed this verse";
	}else{
		message = "You know this one but it needs more review. Try getting it back up to 90% accuracy.";
	}
	var html = '<h1 class = "text-center">'+accuracy+"%"+" "+"Accuracy"+'</h1>\
				<p class = "text-center">'+message+'</p>\
				<nav class = "text-center">\
					<button id = "typeIt" >Type It</button>\
					<button id = "memorizeIt">Memorize It</button>\
					<button id = "masterIt">Master It</button>\
				</nav>\
				<h3>'+numberOfVersesCurrent()+' in this plan are current out of '+numberOfVersesMastered()+' verses that have been mastered</h3>\
				<nav class = "text-center">\
					<button id = "retry">Retry</button>\
					<button id = "exit">Exit</button>\
					<button id = "next">Next</button>\
				</nav>';
	return html;
}
var numberOfVersesCurrent = function(){

}

var numberOfVersesMastered = function(){

}

//If input is in the array of nearby keys assigned by the switch statement above make word black for correct else red for incorrect
	
/*********************************************************************************************************************************************
click handlers for all the buttons in the app are initiated below
This is where it all begins
**********************************************************************************************************************************************/
$(document).ready(function(){
	getWindowWidth();
	bibleDB.open(addVersesToPlan);
	//planDB.open(addVersesToPlan);
	//bibleDB.open(getPlan);
	$("#body").append(frontPageHtml);
/*******************************************************************************************************************************************
													click handlers for the 4 home screen buttons
********************************************************************************************************************************************/
	$("#body").on("click","#myPlans",function(){
		$("#body").empty();
		$("#body").append(myPlansHtml);
		
		navTextCenterer("#navTextMyPlans");
	});
	$("#body").on("click","#review",function(){
			$("#body").empty();
			$("#body").append(reviewHtml);
			$("#navTextReview").css("width","79px");
			navTextCenterer("#navTextReview");
		});
	$("#body").on("click","#read",function(){
			$("#body").empty();
			$("#body").append(readHtml);
		});
	$("#body").on("click","#rankings",function(){
			$("#body").empty();
			$("#body").append('<button id = "backToMainButton" class = "navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Main</button>');
			$("#body").append('<h1>Under Construction<h1>');
		});
/********************************************************************************************************************************************
														End of home screen click handlers
********************************************************************************************************************************************/

/********************************************************************************************************************************************
														Navigation click handlers
********************************************************************************************************************************************/

	$("#body").on("click","#backToMainButton",function(){
		$("#body").empty();
		$("#body").append(frontPageHtml);
	});
	$("#body").on("click","#backToReadButton",function(){
			$("#body").empty();
			$("#body").addClass("padded");
			$("#body").append(readHtml);
		});
	$("#body").on("click","#backToReviewButton",function(){
			index = 0;
			correct = 0;
			$("#body").off("keydown");
			$("#body").empty();
			$("#body").append(reviewNavbarHtml);
			$("#body").append(reviewHtml);
		});
	$("#body").on("click",".backToMyPlansButton",function(){
		$("#body").empty();
		$("#body").append(myPlansHtml);
	});
	$("#body").on("click","#backToTypingModeScreenButton",function(){
		$("#body").empty();
		$("#body").append(selectReviewTypeHtml);
	});
	$("#body").on("click","#backToBookPickerButton",function(){
			$("#body").empty();
			$("#body").append('<button id = "backToReadButton" class = " navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Back</button>');
			$("#body").append(createBookSelectionScreenHtml());
		});

	$("#body").on("click","#backToChapterPickerButton",function(){
			index = booksOfBibleArray.indexOf(bookSelected);
			$("#body").empty();
			$("#body").append('<button id = "backToBookPickerButton" class = " navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Back</button>');
			$("#body").append(chapterPickerHtml(index));
		});
/********************************************************************************************************************************************
														End Navigation click handlers
********************************************************************************************************************************************/
	
	$("#body").on("click","#reviewVerses",function(){
//This function 
		$("#body").empty();
		$("body").append(selectReviewTypeHtml);
		checkForInvalidInput();
		// appendVerse(text)	
	});
/******************************************************************************************************************************************
														Read screen click handlers
*******************************************************************************************************************************************/
//Replace this with go to soon!!!
$("#body").on("click","#showVerse",function(){
		$(".wrapper").empty();
			bibleDB.open(cursorExample);	
	});

// $("#body").on("click","#library",function(){
// 			$("#body").empty();
// 			$("#body").append('<button class = "backToReadButton navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Back</button>');
// 			$("#body").append('<h1>Under Construction<h1>');
// 		});
$("#body").on("click","#goTo",function(){
			$("#body").empty();
			$("#body").append('<button id = "backToReadButton" class = " navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Back</button>');
			$("#body").append(createBookSelectionScreenHtml());
		});
$("#body").on("click","#myStuff",function(){
			$("#body").empty();
			$("#body").append('<button class = "backToReadButton navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Back</button>');
			$("#body").append('<h1>Under Construction<h1>');
		});
$("#body").on("click","#searchBible",function(){
			$("#body").empty();
			$("#body").append('<button class = "backToReadButton navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Back</button>');
			$("#body").append('<h1>Under Construction<h1>');
		});
/********************************************************************************************************************************************
														End of read screen click handlers
********************************************************************************************************************************************/

/******************************************************************************************************************************************
														My plans screen click handlers
*******************************************************************************************************************************************/
$("#body").on("click","#createPlan",function(){
			$("#body").empty();
			$("#body").append(createPlanScreenHtml);
		});
$("#body").on("click","#selectPlan",function(){
			$("#body").empty();
			$("#body").append('<button class = "backToMyPlansButton navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left navbar-left">Back</button>');
			$("#body").append('<h1>Under Construction<h1>');
		});


/******************************************************************************************************************************************
														 End My plans screen click handlers
*******************************************************************************************************************************************/

/******************************************************************************************************************************************
									click handlers for screen that pops up after you finish reviewing a verse
*******************************************************************************************************************************************/
$("#body").on("click","#typeIt",function(){
			reviewMode = reviewVerseTypeItHtml;
			index = 0;
			correct = 0;
			$("#body").empty();
			$("body").append(reviewVerseTypeItHtml);
		});
$("#body").on("click","#memorizeIt",function(){
			reviewMode = reviewVerseMemorizeItHtml;
			index = 0;
			correct = 0;
			$("#body").empty();
			$("body").append(reviewVerseMemorizeItHtml);
		});
$("#body").on("click","#masterIt",function(){
			reviewMode = reviewVerseMasterItHtml;
			index = 0;
			correct = 0;
			$("#body").empty();
			$("body").append(reviewVerseMasterItHtml);
		});
$("#body").on("click","#retry",function(){
			index = 0;
			correct = 0;
			$("#body").empty();
			$("body").append(reviewMode);
		});
$("#body").on("click","#exit",function(){
			index = 0;
			correct = 0;
			$("#body").empty();
			$("#body").append(reviewNavbarHtml);
			$("#body").append(reviewHtml);
		});
$("#body").on("click","#next",function(){
			index = 0;
			correct = 0;
			$("#body").empty();
			$("body").append(reviewMode);
		});
	/******************************************************************************************************************************************
															Begin Create Plan click handlers
	*******************************************************************************************************************************************/	
$("#body").on("click","#addVerses",function(){
			$("#body").empty();
			$("#body").append('<button class = "backToMyPlansButton navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left navbar-left">Back</button>');
			bibleDB.open(addVerse);
		});

$("#body").on("click",".bookPicker",function(){
			bookSelected = $(this).text();
			console.log(bookSelected);
			index = booksOfBibleArray.indexOf(bookSelected);
			$("#body").empty();
			$("#body").append('<button id = "backToBookPickerButton" class = "navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Back</button>');
			$("#body").append(chapterPickerHtml(index));
		});

$("#body").on("click",".chapterPicker",function(){
			chapterSelected = $(this).text();
			selectionScreenHtmlDB.open(getNumVerses);
			$("#body").empty();
			$("#body").append('<button class = "backToChapterPickerButton navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left navbar-left">Back</button>');
		});
});


	