//Need a was of resetting all the localStorage
$(document).on('click', '#resetSteps', {}, function(e) {

  resetSteps('openModal');

});

$(document).on('click', '#resetStepsConfirm', {}, function(e) {

  resetSteps('removeAllSteps');

});

//initialise when app frist loads
progressControlInit();


//Event
$(document).on('click', '.stepsBox', {}, function(e) {

  console.log("check box clicked for: " + currentStep);
  setTimeout(progressControlUpdate(currentStep), 1000);
});



function progressControlInit() {
  //controls the completion status of user stepsMenu
  //Will store data in local store

  //remove control from footer - initialise check box
  //$(".stepsCheckBoxPos").css("visibility", "hidden");
  //$(".stepsBox").removeAttr("checked");



  console.log("progress Init control called");

  //need a way of checking if these are not set already
  //A simple test - one is fine to test
  if (localStorage.getItem("step1Screen") === null) {

    console.log("no local storage set - let set all steps to false");
    localStorage.setItem('step1Screen', 'false');
    localStorage.setItem('step2Screen', 'false');
    localStorage.setItem('step3Screen', 'false');
    localStorage.setItem('step4Screen', 'false');
    localStorage.setItem('step5Screen', 'false');

    localStorage.setItem('step6Screen', 'false');
    localStorage.setItem('step7Screen', 'false');
    localStorage.setItem('step8Screen', 'false');
    localStorage.setItem('step9Screen', 'false');
    localStorage.setItem('step10Screen', 'false');
  } else {

    //We must be coming back to the app, so call the fucntion to get status
    //alert("yes local storage set - get status update");

    var step1Status = localStorage.getItem('step1Screen');
    var step2Status = localStorage.getItem('step2Screen');
    var step3Status = localStorage.getItem('step3Screen');
    var step4Status = localStorage.getItem('step4Screen');
    var step5Status = localStorage.getItem('step5Screen');

    var step6Status = localStorage.getItem('step6Screen');
    var step7Status = localStorage.getItem('step7Screen');
    var step8Status = localStorage.getItem('step8Screen');
    var step9Status = localStorage.getItem('step9Screen');
    var step10Status = localStorage.getItem('step10Screen');


    if (step1Status == "true") {
      $('.stepsCompleted .step1ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step1ScreenStatus').addClass("eptGreen");
    }

    if (step2Status == "true") {
      $('.stepsCompleted .step2ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step2ScreenStatus').addClass("eptGreen");
    }

    if (step3Status == "true") {
      $('.stepsCompleted .step3ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step3ScreenStatus').addClass("eptGreen");
    }

    if (step4Status == "true") {
      $('.stepsCompleted .step4ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step4ScreenStatus').addClass("eptGreen");
    }

    if (step5Status == "true") {
      $('.stepsCompleted .step5ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step5ScreenStatus').addClass("eptGreen");
    }

    if (step6Status == "true") {
      $('.stepsCompleted .step6ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step6ScreenStatus').addClass("eptGreen");
    }

    if (step7Status == "true") {
      $('.stepsCompleted .step7ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step7ScreenStatus').addClass("eptGreen");
    }


    if (step8Status == "true") {
      $('.stepsCompleted .step8ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step8ScreenStatus').addClass("eptGreen");
    }

    if (step9Status == "true") {
      $('.stepsCompleted .step9ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step9ScreenStatus').addClass("eptGreen");
    }

    if (step10Status == "true") {
      $('.stepsCompleted .step10ScreenStatus').removeClass("eptDark");
      $('.stepsCompleted .step10ScreenStatus').addClass("eptGreen");
    }

  }
} //end function


function progressControlUpdate(stepToUpdate) {
  //controls the completion status of user stepsMenu
  //Will store data in local store

  //map for sending to next screen on click of checkbox
  var nextStep = "tmp";
  if (currentStep == "step1Screen") {
    nextStep = "step2Screen";
  } else if (currentStep == "step2Screen") {
    nextStep = "step3Screen";
  } else if (currentStep == "step3Screen") {
    nextStep = "step4Screen";
  } else if (currentStep == "step4Screen") {
    nextStep = "step5Screen";
  } else if (currentStep == "step5Screen") {
    nextStep = "step6Screen";
  } else if (currentStep == "step6Screen") {
    nextStep = "step7Screen";
  } else if (currentStep == "step6Screen") {
    nextStep = "step7Screen";
  } else if (currentStep == "step7Screen") {
    nextStep = "step8Screen";
  } else if (currentStep == "step8Screen") {
    nextStep = "step9Screen";
  } else if (currentStep == "step9Screen") {
    nextStep = "step10Screen";
  }

  var stepToUpdate;

  if (stepToUpdate != "") {

    //alert(stepToUpdate);
    var stepStatusCheck = localStorage.getItem(stepToUpdate);

    //alert("stepStatusCheck: "+stepStatusCheck);
    //the switch
    if (stepStatusCheck == "false") {
      localStorage.setItem(stepToUpdate, 'true');
      progressControlGetStatus();

      //removed as unreliable
      //var tmp = setTimeout(changeAppPage(nextStep, 0), 5000);

    } else {
      localStorage.setItem(stepToUpdate, 'false');
      progressControlGetStatus();
    }

    //progressControlGetStatus();
    console.log('progress update called: ' + stepToUpdate + ' updated');
  } else {

    console.log('progress update called: nothing updated');
  }


} //close function




function progressControlGetStatus() {
  //controls the completion status of user stepsMenu
  //Will store data in local store
  //alert("call progressGetStatus");
  //$('.stepsCheckBox').empty();
  var customCheckCompleted = '<input type="checkbox" class="filled-in stepsBox" id="filled-in-box" checked="checked" /><label for="filled-in-box">Step Completed</label>';
  var customCheckNotCompleted = '<input type="checkbox" class="filled-in stepsBox" id="filled-in-box" /><label for="filled-in-box">Step Not Completed</label>';


  var step1Status = localStorage.getItem('step1Screen');
  var step2Status = localStorage.getItem('step2Screen');
  var step3Status = localStorage.getItem('step3Screen');
  var step4Status = localStorage.getItem('step4Screen');
  var step5Status = localStorage.getItem('step5Screen');

  var step6Status = localStorage.getItem('step6Screen');
  var step7Status = localStorage.getItem('step7Screen');
  var step8Status = localStorage.getItem('step8Screen');
  var step9Status = localStorage.getItem('step9Screen');
  var step10Status = localStorage.getItem('step10Screen');

  //alert("Step 3 Status: "+step3Status);
  //alert("Current Step: "+currentStep);

  if (step1Status === "true" && currentStep === "step1Screen") {
    //alert("step status"+step1Status);
    $('.stepsCheckBox').empty();
    $('body .step1ScreenStatus').removeClass("eptDark");
    $('body .step1ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);

  }

  if (step1Status == "false" && currentStep == "step1Screen") {
    //alert("step status"+step1Status);
    $('.stepsCheckBox').empty();
    $('body .step1ScreenStatus').addClass("eptDark");
    $('body .step1ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }

  if (step2Status == "true" && currentStep == "step2Screen") {
    $('.stepsCheckBox').empty();
    $('body .step2ScreenStatus').removeClass("eptDark");
    $('body .step2ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }

  if (step2Status == "false" && currentStep == "step2Screen") {
    $('.stepsCheckBox').empty();
    $('body .step2ScreenStatus').addClass("eptDark");
    $('body .step2ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }


  if (step3Status == "true" && currentStep == "step3Screen") {
    $('.stepsCheckBox').empty();
    $('body .step3ScreenStatus').removeClass("eptDark");
    $('body .step3ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }



  if (step3Status == "false" && currentStep == "step3Screen") {
    $('.stepsCheckBox').empty();
    $('body .step3ScreenStatus').addClass("eptDark");
    $('body .step3ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }


  if (step4Status == "true" && currentStep == "step4Screen") {
    $('.stepsCheckBox').empty();
    $('body .step4ScreenStatus').removeClass("eptDark");
    $('body .step4ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }

  if (step4Status == "false" && currentStep == "step4Screen") {
    $('.stepsCheckBox').empty();
    $('body .step4ScreenStatus').addClass("eptDark");
    $('body .step4ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }

  if (step5Status == "true" && currentStep == "step5Screen") {
    $('.stepsCheckBox').empty();
    $('body .step5ScreenStatus').removeClass("eptDark");
    $('body .step5ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }

  if (step5Status == "false" && currentStep == "step5Screen") {
    $('.stepsCheckBox').empty();
    $('body .step5ScreenStatus').addClass("eptDark");
    $('body .step5ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }


  if (step6Status == "true" && currentStep == "step6Screen") {
    $('.stepsCheckBox').empty();
    $('body .step6ScreenStatus').removeClass("eptDark");
    $('body .step6ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }

  if (step6Status == "false" && currentStep == "step6Screen") {
    $('.stepsCheckBox').empty();
    $('body .step6ScreenStatus').addClass("eptDark");
    $('body .step6ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }


  if (step7Status == "true" && currentStep == "step7Screen") {
    $('.stepsCheckBox').empty();
    $('body .step7ScreenStatus').removeClass("eptDark");
    $('body .step7ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }

  if (step7Status == "false" && currentStep == "step7Screen") {
    $('.stepsCheckBox').empty();
    $('body .step7ScreenStatus').addClass("eptDark");
    $('body .step7ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }


  if (step8Status == "true" && currentStep == "step8Screen") {
    $('.stepsCheckBox').empty();
    $('body .step8ScreenStatus').removeClass("eptDark");
    $('body .step8ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }

  if (step8Status == "false" && currentStep == "step8Screen") {
    $('.stepsCheckBox').empty();
    $('body .step8ScreenStatus').addClass("eptDark");
    $('body .step8ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }

  if (step9Status == "true" && currentStep == "step9Screen") {
    $('.stepsCheckBox').empty();
    $('body .step9ScreenStatus').removeClass("eptDark");
    $('body .step9ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }

  if (step9Status == "false" && currentStep == "step9Screen") {
    $('.stepsCheckBox').empty();
    $('body .step9ScreenStatus').addClass("eptDark");
    $('body .step9ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }


  if (step10Status == "true" && currentStep == "step10Screen") {
    $('.stepsCheckBox').empty();
    $('body .step10ScreenStatus').removeClass("eptDark");
    $('body .step10ScreenStatus').addClass("eptGreen");
    $('.stepsCheckBox').append(customCheckCompleted);
  }

  if (step10Status == "false" && currentStep == "step10Screen") {
    $('.stepsCheckBox').empty();
    $('body .step10ScreenStatus').addClass("eptDark");
    $('body .step10ScreenStatus').removeClass("eptGreen");
    $('.stepsCheckBox').append(customCheckNotCompleted);
  }


  /*need to add the other step controls here*/



} //close function



function resetSteps(action) {
  var action;

  if (action == "openModal") {
    $('#resetStepsConfirm').openModal();
  }

  if (action == "removeAllSteps") {


    //set local storage steps to false
    localStorage.setItem('step1Screen', 'false');
    localStorage.setItem('step2Screen', 'false');
    localStorage.setItem('step3Screen', 'false');
    localStorage.setItem('step4Screen', 'false');
    localStorage.setItem('step5Screen', 'false');

    localStorage.setItem('step6Screen', 'false');
    localStorage.setItem('step7Screen', 'false');
    localStorage.setItem('step8Screen', 'false');
    localStorage.setItem('step9Screen', 'false');
    localStorage.setItem('step10Screen', 'false');


    progressControlInit();
    progressControlGetStatus();

  }

}



//progressControlGetStatus();
