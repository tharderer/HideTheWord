var frontPageHtml = '<div><h1 class = "text-center">Hide The Word</h1><h5 class = "text-center">Bible Memory System</h5></div>\
				      <div id = "main">\
				        <button id = "myPlans" class="btn btn-default">My Plans</button>\
				        <button id = "review" class="btn btn-default">Review</button>\
				      </div>\
				      <div id = "main">\
				        <button id = "read" class="btn btn-default">Read</button>\
				        <button id = "rankings" class="btn btn-default">Rankings</button>\
				      </div>';


var plans = function(){
	var plans = '<div class = "btn-group-vertical">';
	var titles = ["Salvation","Resurrection","Money","Obedience","Reasons to Read","Giving","Trinity","Prophecy: Israel","Prophecy: Soon Coming","Prophecy: Tribulation"];
	for (var i = 0; i < titles.length; i++) {
		plans+='<button type = "button" class = "btn btn-default pull-left"><span class = "pull-left">'+titles[i]+'</span><span class = "glyphicon glyphicon-chevron-right pull-right"></span></button>';
	};
	plans+='</div>';
	return plans;
}

var myPlansHtml = '<nav class = "navbar navbar-default">\
						<button id = "backToMainButton" class = "left-margin pull-left navbar-btn btn btn-default glyphicon glyphicon-chevron-left">Main</button>\
						<p class = "navbar-text text-center navText"><b id = "navTextMyPlans">My Plans<b></p>\
					</nav>\
					<div id = "container" class = "container horizontallyCentered">\
						<div class="btn-group-horizontal btn-group-justified">\
						  <div class="btn-group">\
						    <button id = "createPlan" type="button" class="buttonRightBorderRadiusNone btn btn-default">Create Plan</button>\
						  </div>\
						  <div class="btn-group">\
						    <button id = "selectPlan" type="button" class="buttonLeftBorderRadiusNone btn btn-default">Select Plan</button>\
						  </div>\
						</div>\
				  		<h1>Plans</h1>'+plans()+'\
				  	</div>';

var reviewVerses = function(){
	var verseToReview = '<div class = "btn-group-vertical">';
	for (var i = 0; i < 10; i++) {
		verseToReview+='<button type = "button" class = "btn btn-default pull-left"><span class = "pull-left">'+titles[i]+'</span><span class = "glyphicon glyphicon-chevron-right pull-right"></span></button>';
	};
	verseToReview +='</div>';
	return verseToReview;
}


var reviewHtml = '<nav class = "navbar navbar-default">\
						<button id = "backToMainButton" class = "left-margin pull-left navbar-btn btn btn-default glyphicon glyphicon-chevron-left">Main</button>\
						<p class = "navbar-text text-center navText"><b id = "navTextReview">Review<b></p>\
				  </nav>\
				  <div id = "container" class = "container horizontallyCentered">\
				<h1>Plans</h1>'+plans()+'\
				</div>';




var reviewVerseTypeItHtml = function(text){
	var verse = "For the wages of sin is death but the gift of god is eternal life through jesus christ our lord";
	verse = verse.split(" ");
	var verseHtml = '';
	
		for (var i = 0; i < verse.length; i++) {
			verseHtml+='<li class = "grey">'+verse[i]+" "+'</li>';
		};
		return '<div id = "reviewVerse">\
					<nav navbar-default>\
						<div class = container-fluid>\
							<button  id = "backToReviewButton" class = "navbar-left  navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Review</button>\
							<button id = "backToTypingModeScreen" class = "navbar-right" >Typing Mode</button>\
						</div>\
					</nav>\
					<ul>'+verseHtml+'</ul>\
				</div>';
}

var reviewVerseMemorizeItHtml = function(text){
	var verse = "For the wages of sin is death but the gift of god is eternal life through jesus christ our lord";
	verse = verse.split(" ");
	var verseHtml = '';
	
		for (var i = 0; i < verse.length; i++) {
			if(i%2==0){
				verseHtml+='<li class = "white">'+verse[i]+" "+'</li>';
			}else{
				verseHtml+='<li class = "grey">'+verse[i]+" "+'</li>';
			}
		};
		return '<div id = "reviewVerse">\
					<nav>\
						<div class = container-fluid>\
							<button id = "backToReviewButton" class = "navbar-left  navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Review</button>\
							<button class = "navbar-righta" id = "backToTypingModeScreen">Typing Mode</button>\
						</div>\
					</nav>\
				<ul>'+verseHtml+'</ul>\
				</div>';
}

var reviewVerseMasterItHtml = function(text){
	var verse = "For the wages of sin is death but the gift of god is eternal life through jesus christ our lord";
	verse = verse.split(" ");
	var verseHtml = '';
	
		for (var i = 0; i < verse.length; i++) {
			verseHtml+='<li class = "white">'+verse[i]+" "+'</li>';
		};
		return '<div id = "reviewVerse">\
					<nav>\
						<div class = container-fluid>\
							<button id = "backToReviewButton" class = "navbar-left navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Review</button>\
							<button class = "navbar-right" id = "backToTypingModeScreen">Typing Mode</button>\
						</div>\
					</nav>\
					<ul>'+verseHtml+'</ul>\
				</div>';
}

var readHtml = '<nav class = "navbar-fixed-top backgroundBlack">\
					<div class = "container-fluid">\
						<button id = "backToMainButton" class = "navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left">Main</button><input id = "reference">\
						<button id = "showVerse">Show Verse!</button>\
						<button id = "library">Library</button><button id = "goTo">Go To</button>\
					</div>\
				</nav>';

// 						<span id = "myStuff" class = "glyphicon glyphicon-briefcase"></span>\
// 						<span id = "searchBible" class = "glyphicon glyphicon-search"></span>\
var selectReviewTypeHtml = '<nav class = "text-center">\
								<div class = "container-fluid">\
									<button id = "typeIt">Type It</button>\
									<button id = "memorizeIt">Memorize It</button>\
									<button id = "masterIt">Master It</button>\
									<button id = "typeIt">Type It</button>\
									<button id = "memorizeIt">Memorize It</button>\
									<button id = "masterIt">Master It</button>\
									<button id = "typeIt">Type It</button>\
									<button id = "memorizeIt">Memorize It</button>\
									<button id = "masterIt">Master It</button>\
								</div>\
							</nav>';

var createPlanScreenHtml = '<nav class = "navbar navbar-default">\
								<button class = "backToMyPlansButton navbar-btn btn btn-default btn-large glyphicon glyphicon-chevron-left navbar-left">Back</button>\
								<p class = "navbar-text text-center navText"><b id = "navTextMyPlans">Create Plan<b></p>\
							</nav>\
							<div class = "container horizontallyCentered">\
								<label class = "centered">Plan Name</label>\
								<input id = "planTitle" class = "centered" value = "Enter Title Here"></br>\
								<button id = "addVerses">Add Verses</button>\
							</div>';

var booksOfBibleArray = [];
for(var i = 0; i<bibleJson.length;i++){
	var book_name = bibleJson[i].book_name;
	booksOfBibleArray.push(book_name);
}
console.log(booksOfBibleArray);
var createBookSelectionScreenHtml = function(){
	
	var table = '<table class = "table-bordered text-center table-striped tableSize">\
	<colgroup span="6"></colgroup>\
	<tr>';
	for (var i = 0; i < booksOfBibleArray.length; i++) {
		if((i)%6==0){
			table+='</tr>';
			table+='<tr>';
			table+='<td class = "bookPicker"><p id = "superSmall">'+booksOfBibleArray[i]+'</p></td>';
		}else{
			table+='<td class = "bookPicker"><p id = "superSmall">'+booksOfBibleArray[i]+'</p></td>';
		}
	}
	table +='</table>';
	return table;
}

	chaptersArray = [];
for(var i = 0; i<bibleJson.length;i++){
	var numberOfChapters=0;
	jQuery.each(bibleJson[i].book, function(index, value) {
		numberOfChapters++;
  	});
	chaptersArray.push(numberOfChapters);
	numberOfChapters=0;
}
console.log(chaptersArray);
var chapterPickerHtml = function(index){
	var numOfChapters = chaptersArray[index];
	var html = '<table class = "table-bordered text-center table-striped tableSize">\
	<colgroup span="6"></colgroup>\
	<tr>';
	for (var i = 0; i < numOfChapters; i++) {
		if((i)%6==0){
			html+='</tr>';
			html+='<tr>';
			html+='<td class = "chapterPicker">'+(i+1)+'</td>';
		}else{
			html+='<td class = "chapterPicker">'+(i+1)+'</td>';
		}
	}
	html +='</table>';
	return html;
}

var versePickerHtml = function(numVerses){
	var numVerses = numVerses;
	var html = '<table class = "table-bordered text-center table-striped tableSize">\
	<colgroup span="6"></colgroup>\
	<tr>';
	for (var i = 0; i < numVerses; i++) {
		if((i)%6==0){
			html+='</tr>';
			html+='<tr>';
			html+='<td class = "versePicker">'+(i+1)+'</td>';
		}else{
			html+='<td class = "versePicker">'+(i+1)+'</td>';
		}
	}
	html +='</table>';
	return html;
}