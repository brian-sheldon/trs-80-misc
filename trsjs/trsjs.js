
function log( s, lf = '\n' ) {
  let c = $('#log').html();
  $('#log').html( s + lf + c );
}

function start() {

  log( 'starting ...' );

  trsEmu.screen('scrn').button('btn').perf('graph').focus();

  let term = new Terminal();
  term.open( document.getElementById( 'console' ) );
  term.write( 'Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ' );

}

