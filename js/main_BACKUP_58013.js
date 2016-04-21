$(".maintranslation").click(function(){
            $(this).next().slideToggle();	
    });

$(".form-control").change(function() {
			alert("Input value: " + $(".form-control").val());
});

<<<<<<< Updated upstream
function addNewBill()  {
	var billInfo = ""  //get bill info
	var legislator = 'Senator Cookie' //parse
	var billText = "cookies mandatory at every restaurant"
	var billLog = []
	var bill = "" // html bill skeleton
	$("footer").before("put it all together here")
}
=======
/*
function addNewBill(bill)  {
	var billInfo = "";  //get bill info
	var legislator = 'Senator Cookie'; //parse
	var billText = "cookies mandatory at every restaurant";
	var billLog = [];
	var bill = ""; // html bill skeleton
	$("#bill-container").append(bill)
}
*/

function addBills(json, billAmount)  {
	// billAmount is an int = number of bills to extract, json is all possible bills
	//var object = JSON && JSON.parse(json) || $.parseJSON(json);
	var data = eval(json);
	var billCount = 0;
	var i;

	for (i = 0; i < billAmount; i++) {
		//addNewBill(json[i]);
		$("#bill-container").append($("#eric"));
		billCount++;
	}

}

$("#bill-container").append($(".bill").clone(true, true));

$(".legImage").children("img").attr({
	"src": "http://www.sesamestreet.org/cms_services/services?action=download&uid=dbf13ec8-16cd-11dd-a1a2-3f408a4274b3",
	"alt": "elmo"
	});
$(".legImage").find("a").text("Senator Elmo").attr("href", "#");

$(".maintranslation").addClass("state").text("America Feeding Puppies");
$(."translations").append('<div class="row">');

var translatorImage = $("<div />", {
	"class":"col-md-3 translatorImage"
})

var translatorHeadshot = $("<img />");
img.attr({
	'src': "https://pbs.twimg.com/profile_images/456240049776902144/9FNdHosY_400x400.jpeg",
	'alt': "moms demand action"});
img.addClass("img-circle");
img.appendTo("#translatorImage");

var translatorName = $("<p />");






>>>>>>> Stashed changes
