document.addEventListener('DOMContentLoaded', function(){
  var client = new ZeroClipboard( $('.click-to-copy') );

  var messages = ["Good Job", "You Suck", "Holy Shit", "Oh Fuck", "Hell Yeah", "Dammn.."]

  client.on( "ready", function( readyEvent ) {
    client.on( "aftercopy", function( event ) {
      var color = event.data['text/plain']

      swal({
        title: messages[Math.floor(Math.random()*messages.length)]+"!",
        text: "Go forth and design with "+ color,
        type: "success",
        confirmButtonText: "Cool",
        confirmButtonColor:  color,
        allowOutsideClick: true
      });
    });
  });

  client.on( 'error', function(event) {
    ZeroClipboard.destroy();
  } );
});
