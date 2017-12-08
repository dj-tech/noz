$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: prompt("username"), private_point: [terreno,prodotti,soldi] }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
