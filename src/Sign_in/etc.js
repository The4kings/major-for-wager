import $ from 'jquery';

const etc = () => {
	return( 
 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
})
)
}


export default etc;