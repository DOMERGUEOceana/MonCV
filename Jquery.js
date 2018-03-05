$(document).ready(function(){
    $('.Jquery h3').click(function(){
        $this = $(this).parent('.Jquery');
        $this.find('.Jquery2').slideToggle("slow");
        $this.toggleClass('hidden');
    });
});