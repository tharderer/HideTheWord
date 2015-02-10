var clicks = 0;
var cursorExample = function(e){
	var db = e.target.result,
		input = $("#reference").val(),
		objectStore = db.transaction("exampleVerse").objectStore("exampleVerse"),
		index = objectStore.index("reference"),
		singleKeyRange = IDBKeyRange.only(input);
		
	index.openCursor(singleKeyRange).onsuccess = function(e){
		var cursor = e.target.result;
		var primaryKey = cursor.primaryKey;
		var boundKeyRange = IDBKeyRange.bound(primaryKey-20,primaryKey+20);
		var output = '';
		console.time("logging");
		objectStore.openCursor(boundKeyRange).onsuccess = function(e) {

			  var cursor = e.target.result;
			  if (cursor) {
			  	output+='<div class = "wrapper"id = '+cursor.primaryKey+'>';
			  	output+='<div class = "reference" >';
			  	output+='<h4 class = "alignCenter"><b>'+cursor.value.book+" "+cursor.value.chapter_nr+":"+cursor.value.verse_nr+" "+'<span class = "glyphicon glyphicon-plus red"></span><b></h4><br/>';
				output+='<p class = "verse">'+cursor.value.verse+'</p>';
				output+='<p class = "verse">'+cursor.value.planName+'</p>';
			  	output+='</div reference>';
			  	output+='<div class = "slideDownContent hidden">'
			  	// output+=experiment(cursor);
			  	output+='<h3 onclick = "bibleDB.open(addToPlan)">Add to Plan</h3>';
			  	output+='<h3>'+cursor.value.plan+'</h3>';
			  	output+='</br>';
			  	output+='</div slideDownContent>';
			  	output+='</div wrapper>';
			     cursor.continue();
			  }else{

			  	$("#body").append(output);
			  	//showVerseInfo(objectStore);
			    var el = document.getElementById(primaryKey).scrollIntoView(true);
			    console.timeEnd("logging");
			  }
		};
		console.log(primaryKey);
		
	}
}
var primaryKey = 0;
var getPlan = function(e){
	var db = e.target.result,
	input = $("#reference").val(),
	output,
	objectStore = db.transaction("exampleVerse").objectStore("exampleVerse"),
	// index = objectStore.index("planName");
	keyRange = IDBKeyRange.bound(primaryKey,31102);
	objectStore.openCursor(keyRange).onsuccess = displayPlan = function(e){
		var cursor = e.target.result;
		    output = '<div class = "btn-group-vertical">';
		console.time("logging");
		  var cursor = e.target.result;
		  if (cursor) {
		  	if(cursor.value.planName.indexOf("Jesus")>=0){
		  		output+='<button type = "button" class = "btn btn-default pull-left"><span class = "pull-left">'+cursor.value.reference+'</span><span class = "glyphicon glyphicon-chevron-right pull-right"></span></button>';
		  	}
		  	primaryKey = cursor.primaryKey;	
		     cursor.continue();
		  }else{

		    console.timeEnd("logging");
		  }
		 // bibleDB.open(getPlan);
		 output+='</div>';
		 $("#body").append(output);
	} 
	console.log("no more verses in plan");
}
var key1;
var key2;
var addVersesToPlan = function(e){
	var db = e.target.result,
		input1= "Genesis 18:1",
		input2 = "Genesis 50:1",
		planName = "Salvation",
		objectStore = db.transaction("plan","readwrite").objectStore("plan");
		var plan = {
			planName:planName,
			verses:[[input1,input2]]
		};
		var request = objectStore.add(plan);

		request.onsuccess = function(e){
			console.log(e.target.result+" Added");
		}
	// 	index = objectStore.index("planName"),
	// 		getKey1 = index.getKey(input1);
		

	// 	getKey1.onsuccess = function(){
	// 		key1 = getKey1.result;
	// 		console.log(key1);
	// 		var getKey2 = index.getKey(input2);

	// 		getKey2.onsuccess = function(){
	// 		key2 = getKey2.result;
	// 		console.log(key2);
	// 		var multipleKeyRange = IDBKeyRange.bound(key1,key2);

	// 		objectStore.openCursor(multipleKeyRange).onsuccess = function(e){
	// 			var cursor = e.target.result;
	// 			if(cursor){
	// 				var verse = cursor.value;
	// 				var planArray = verse.planName;
	// 				planArray.push(planName);
	// 				verse.planName = planArray;
	// 				var updatePlanName = cursor.update(verse);
	// 				updatePlanName.onsuccess = function(){
	// 					cursor.continue();
	// 				}
					
	// 			}else{
	// 				console.log("no more verses");
	// 			}
	// 		}
	// 	}
		
	// }	

}
		

	// var requestUpdate = objectStore.put(verseObject,input);
	// console.log(verseObject);

	// 	requestUpdate.onerror = function(event){
	// 		alert("Oh no could not update the verse")
	// 	};
	// 	requestUpdate.onsuccess = function(event){
	// 		alert("Success the verse is updated");
	// 	}
	

var showExampleVerse = function(e){
	var input = Number($("#reference").val()),
		 db = e.target.result,
		 getVerse = db.transaction("exampleVerse").objectStore("exampleVerse"),
		 request = getVerse.get(input);

	request.onsuccess = function(e){
		console.log(request.result);
		$("#body").append('<br><p class = "alignCenter">'+request.result.book+" "+request.result.chapter_nr+":"+request.result.verse_nr+'</p><br>'+request.result.verse+'<br><h1>'+request.result.planName+'</h1>');
	}	
	request.onerror = function(e){
		console.log("sucks to be you");
	}

}

var bibleDB = function(){
var bDB = {};
var datastore = null;
/**
* Open a connection to the datastore
*/

bDB.open = function(callback,key){
	//Datastore version.
	var version = 62;

	//Open a connection to the datastore.
	var request = indexedDB.open('bible',version);
	//Handle datastore upgrades

	request.onupgradeneeded = function(e){
		var db = e.target.result;
		console.log("upgrading");
		e.target.transaction.onerror = bDB.onerror;
		if(db.objectStoreNames.contains("exampleVerse")){
			db.deleteObjectStore("exampleVerse");
		}
		var exampleVerse = db.createObjectStore("exampleVerse",{
			autoIncrement:true
		})
		exampleVerse.createIndex("reference","reference",{unique:true});
		exampleVerse.createIndex("verse","verse",{unique:false});
		exampleVerse.createIndex("book","book",{unique:false});
		exampleVerse.createIndex("chapter_nr","chapter_nr",{unique:false});
		exampleVerse.createIndex("verse_nr","verse_nr",{unique:false});
		exampleVerse.createIndex("planName","planName",{unique:false});
		exampleVerse.createIndex("timesReviewed","timesReviewed",{unique:false});
		exampleVerse.createIndex("timeTillNextReview","timeTillNextReview",{unique:false});
		exampleVerse.createIndex("timeOfNextReview","timeOfNextReview",{unique:false});

		if(db.objectStoreNames.contains("plan")){
			db.deleteObjectStore("plan");
		}
		var plan = db.createObjectStore("plan",{
			autoIncrement:true
		})

		plan.createIndex("planName","planName",{unique:true});
		plan.createIndex("verses","verses",{unique:false});

		exampleVerse.transaction.oncomplete = function(event){
			console.time("database creation time");
			var exStore = db.transaction("exampleVerse","readwrite").objectStore("exampleVerse");
			for(var i = 0; i<=bibleJson.length;i++){
				jQuery.each(bibleJson[i].book, function(index, value) {
				var book_name = bibleJson[i].book_name;
				console.log(book_name);	
				var chapter_nr = value.chapter_nr;
	            // output += '<center><b>'+genesis.book_name+' '+value.chapter_nr+'</b></center><br/><p>';
	            jQuery.each(value.chapter, function(index, value) {
	            	var exampleObject = {
				 verse:value.verse,
				 book:book_name,
				 chapter_nr:chapter_nr,
				 verse_nr:value.verse_nr,
				 planName:[],
				 reference:book_name+" "+chapter_nr+":"+value.verse_nr,
				 timesReviewed:"",
				 timeTillNextReview:"",
				 timeOfNextReview:""
				};
					exStore.add(exampleObject);
	            });				
			});
			}
			console.log("Done adding verses to database!");
			console.timeEnd("database creation time");
		}

	}

	request.onsuccess = function(e){
		//Get a reference to the DB.
		datastore = e.target.result;

		//Execute the callback.
		callback(e,key);
	};

	//Handle errors when opening the datastore

	request.onerror = bDB.onerror;

}

return bDB;
}();

// var planDB = function(){
// var pDB = {};
// var datastore = null;
// /**
// * Open a connection to the datastore
// */

// pDB.open = function(callback){
// 	//Datastore version.
// 	var version = 2;

// 	//Open a connection to the datastore.
// 	var request = indexedDB.open('plans',version);
// 	//Handle datastore upgrades

// 	request.onupgradeneeded = function(e){
// 		var db = e.target.result;
// 		console.log("upgrading");
// 		e.target.transaction.onerror = bDB.onerror;
// 		if(db.objectStoreNames.contains("plan")){
// 			db.deleteObjectStore("plan");
// 		}
// 		var plan = db.createObjectStore("plan",{
// 			autoIncrement:true
// 		})

// 		plan.createIndex("planName","planName",{unique:true});
// 		plan.createIndex("verses","verses",{unique:false});

// 	}

// 	request.onsuccess = function(e){
// 		//Get a reference to the DB.
// 		datastore = e.target.result;

// 		//Execute the callback.
// 		callback(e	);
// 	};


// 	//Handle errors when opening the datastore

// 	request.onerror = pDB.onerror;

// }

// return pDB;
// }();



var selectionScreenHtmlDB = function(){
var sDB = {};
var datastore = null;
/**
* Open a connection to the datastore
*/

sDB.open = function(callback){
	//Datastore version.
	var version = 8;

	//Open a connection to the datastore.
	var request = indexedDB.open('selectionScreenDB',version);
	//Handle datastore upgrades

	request.onupgradeneeded = function(e){
		var db = e.target.result;
		console.log("upgrading selectionScreenHtmlDB");
		e.target.transaction.onerror = sDB.onerror;
		if(db.objectStoreNames.contains("selectionScreenHtml")){
			db.deleteObjectStore("selectionScreenHtml");
		}
		var selectionScreenHtml = db.createObjectStore("selectionScreenHtml",{
			keyPath:"reference"
		})
		
		selectionScreenHtml.transaction.oncomplete = function(event){
			var numberOfChapters = 0,
				numberOfVerses = 0;
			console.time("selectionScreenHtmlDB creation time");
			var htmlStore = db.transaction("selectionScreenHtml","readwrite").objectStore("selectionScreenHtml");
			for(var i = 0; i<bibleJson.length;i++){
				var book_name = bibleJson[i].book_name;
				jQuery.each(bibleJson[i].book, function(index, value) {
					
					numberOfChapters+=1;

		            	jQuery.each(value.chapter, function(index, value) {
		            		numberOfVerses+=1;
		            	});

		            	var htmlObject = {
						book_name:book_name,
						reference:book_name+" "+numberOfChapters,
						numberOfVerses:numberOfVerses
					};
					htmlStore.add(htmlObject);
					numberOfVerses = 0;
				});
				numberOfChapters = 0;
				
			}
			console.log("Done creating selectionScreenHtmlDB");
			console.timeEnd("selectionScreenHtmlDB creation time");
		}
	}

	request.onsuccess = function(e){
		//Get a reference to the DB
		datastore = e.target.result;

		//Execute the callback.
		callback(e);
	};

	//Handle errors when opening the datastore

	request.onerror = sDB.onerror;

}

return sDB;
}();

var getNumVerses = function(e){
	var reference = bookSelected+" "+chapterSelected;
	var db = e.target.result;
	var objectStore = db.transaction("selectionScreenHtml").objectStore("selectionScreenHtml");
	var request = objectStore.get(reference);
     
	request.onsuccess =function(e){
		var numVerses = request.result.numberOfVerses;
		$("#body").append(versePickerHtml(numVerses));
	}
}
