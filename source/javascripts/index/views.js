document.addEventListener('DOMContentLoaded', function(){
  var client = new ZeroClipboard( $('.click-to-copy') );

  var messages = ["Good Job", "You Suck", "Holy Shit", "Oh Fuck", "No Way", "Dammn.."]

  client.on( "ready", function( readyEvent ) {
    client.on( "aftercopy", function( event ) {
      swal(messages[Math.floor(Math.random()*messages.length)]+"!", "You just copied "+ event.data['text/plain'], "success")
    } );
  } );


  client.on( 'error', function(event) {
    ZeroClipboard.destroy();
  } );


});