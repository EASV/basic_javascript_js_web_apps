$(document).ready(function() {
   $('#toogle-create').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
   
   $('#toogle-signin').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
   
   $('#logon').click(function(){
       var user = $('#name').val();
       var pw = $('#pw').val();
       console.log('user', user);
       console.log('pw', pw);
        if(user === 'ljb' && pw === 'ost'){
            alert('U the king');
        } else{
            alert('U not him! Please gief Lars!!')
        }
   });

   $('#forgot').click(function(){
       alert('u forgetttttted itte');
   });

   $('#create').click(function(){
       alert('u cannot create a user.. Muahhahahah');
   });
   
});