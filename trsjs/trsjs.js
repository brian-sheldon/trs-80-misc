
function log( s, lf = '\n' ) {
  let c = $('#log').html();
 $('#log').html( s + lf + c );
}

function start() {

  log( 'starting ...' );

  trsEmu.screen('scrn').button('btn').perf('graph').focus();

}

