$(document).ready(function(){

	var lastID = localStorage.getItem( 'lastID' );
	 
	// if the local storage comes up empty, reset count to zero
	function initializeID() {
	  var lastID = localStorage.getItem( 'lastID' );
	  if ( lastID == null ) {
	    location.reload(true);
	    localStorage.setItem( 'lastID',0 );
	  }
	}
	 
	initializeID();

	
	// before the function, create a uniqueID variable
	var uniqueID = lastID;
	 
	$("#save").validate({
	  // using the jQuery Validate plugin here
	  invalidHandler: function() {
	    alert("Please fill in all of the information.");
        console.log("fail");

	  },
	  // continue doing stuff if all fields validate
	  submitHandler: function(form) {
	    // get input field vars
	    
	    var currentTime = new Date();
            var monthNames = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                               "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC" ];
            var month = monthNames[(currentTime.getMonth())];
            var day = currentTime.getDate();
            var year = currentTime.getFullYear();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            if (minutes < 10){
            minutes = "0" + minutes;
            }
            var daynight
            if (hours>11){
            	daynight="PM"
            }
            else{
            	daynight="AM"
            }
            
            
	    var water = document.getElementById("water").value;
	        pouch = document.getElementById("pouch").value;
	        urine = document.getElementById("urine").value; 
	        time = month + "/" + day + "/" + year + " "+ hours+":"+minutes+daynight;
	        	        

	    // convert the ID to a string so it can be used as a key
	    var formSaveID = uniqueID.toString();
        console.log(formSaveID);

	    // assign everything to an object for local storage        
	    var newFormSave = {};
	        newFormSave.id = uniqueID;
	        newFormSave.water = water;
	        newFormSave.pouch = pouch;
	        newFormSave.urine = urine;
	        newFormSave.time = time;
	    // turn data into JSON string
	    localStorage.setItem( formSaveID, JSON.stringify( newFormSave ) );
	    // reload history with new entry; see below
	    loadHistory(uniqueID);
	    // increment the ID
	    uniqueID++;
	    // save next available ID (note: bugs/features in iOS demand
	    // the key be removed first, and then reset; a straight
	    // overwrite using the same key does not work)
	    localStorage.removeItem( 'lastID' );
	    localStorage.setItem( 'lastID', uniqueID );
	    // optional; this part clears all of the values in the form        
	    //$form.find('input[type="text"],input[type="email"]').val("");
	    // again optional; this is where you could actually post via Ajax
	   // $("#save").ajaxSubmit();
	    return false;
	  }
	});
	
	function loadHistory(uniqueID) {
		  // clear table and append table header row
		  $("table#history").html("").append('<thead><tr><th>Entry</th><th>Water</th><th>Pouch</th><th>Urine</th><th>Time Submit</th></tr></thead><tbody>');
		  // for the loop, start at the beginning
		  ID = uniqueID - 1;
		  // the loop count is the same as the last unique ID;
		  // if the last record saved had the ID of 57, then
		  // there are 57 records to display

		  while (ID>=0) {
		    ID.toString();
		    // pull the JSON string for the current ID in the loop 
		    // and extract data into variables
		    var history = localStorage.getItem(ID);
		        water = $.evalJSON(history).water;
		        pouch = $.evalJSON(history).pouch;
		        urine = $.evalJSON(history).urine;
		        time = $.evalJSON(history).time;
		        
		        console.log(time);
		      
		        
		    // render a row of data for each record
		    $("table#history").append('<tr><th>' + (ID +1) + '</th><td>' + water + '</td><td>' + pouch + '</td><td>' + urine + '</td><td>'+ time + '</td></tr>');
		    ID--;
		  } // ends loop
		  $("table#history").append("</tbody>")
		}
	loadHistory(uniqueID);
});