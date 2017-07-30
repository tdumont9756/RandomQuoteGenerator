$(function(){

	//default state of page
	$("#the-quote").text(function(){
		var text = quoteRepo[0].quote;
		return text;
	});




	$("#new-quote-btn").click(function(){
		console.log("the button is clicked");   //for testing only
		var quoteRepoMax = quoteRepo.length -1; //dyncamicly update max size of the quoteRepo
		var quoteRepoMin = 0;					//declair magic number
		$("#the-quote").text(function(){
				var randomNum = Math.round(Math.random() *(quoteRepoMax - quoteRepoMin));
				console.log(randomNum);
				var text = quoteRepo[randomNum].quote;
				return text;
		});
	});
});