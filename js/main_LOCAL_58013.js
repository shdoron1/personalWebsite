$(".maintranslation").click(function(){
            $(this).next().slideToggle();	
    });

$(".form-control").change(function() {
			alert("Input value: " + $(".form-control").val());
});

function addNewBill()  {
	var billInfo = ""  //get bill info
	var legislator = 'Senator Cookie' //parse
	var billText = "cookies mandatory at every restaurant"
	var billLog = []
	var bill = "" // html bill skeleton
	$("footer").before("put it all together here")
}