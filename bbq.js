$(document).ready(function() {
	$("#scan").on('click', function() {
		$("code").html('scanning');
		$('#qr').html5_qrcode(function(data){
		         // do something when code is read
		         $(".feedback").html('<img src="yes.png" style="height: 20px"> Code scanned as: <strong>' +data +'</strong>');
		    },
		    function(error){
		        //show read errors 
		        $(".feedback").html('<img src="no.png" style="height: 20px"> Unable to scan the code! Error: ' +error)
		    }, function(videoError){
		        //the video stream could be opened
		        $(".feedback").html('<img src="no.png" style="height: 20px"> Video error');
		    }
		);

		$("#scan").addClass('disabled');
		$("#stop").removeClass('disabled');
		$("#change").removeClass('disabled');
	});

	$("#stop").on('click', function() {
		$("#qr").html5_qrcode_stop();
		$("code").html('Click "Start Scanning" to <b>start scanning QR Code</b>');

		$("#scan").removeClass('disabled');
		$("#stop").addClass('disabled');
		$("#change").addClass('disabled');
		$(".feedback").html("");
	});
	$("#change").on('click', function() {
		$("#qr").html5_qrcode_changeCamera();

		$("#scan").addClass('disabled');
		$("#stop").removeClass('disabled');
	});
});