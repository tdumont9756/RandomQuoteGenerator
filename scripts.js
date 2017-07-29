// $(function(){
// 	$('#new-quote-btn').click(function(){

// 			$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
//   			$("#the-quote").append(a[0].content + "<p>— " + a[0].title + "</p>");
// 		});
// 	});
	
// });



jQuery( function( $ ) {
  $( '#new-quote-btn' ).on( 'click', function ( e ) {
    e.preventDefault();
    console.log("I know this part works");
    $.ajax( {
      url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function ( data ) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        //$( '#quote-title' ).text( post.title );
        $( '#the-quote' ).html( post.content );
        console.log("the ajax what sussessfull see   " + post.contents);
        // If the Source is available, use it. Otherwise hide it.
        if ( typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined' ) {
          $( '#quote-source' ).html( 'Source:' + post.custom_meta.Source );
        } else {
          $( '#quote-source' ).text( '' );
        }
      },
      cache: false
    } );
  } );
} );