'use strict';

var drawMe = SC.evt("dessine-moi");
var retireVie = SC.evt("retire 1 vie");


function ajouteFinBody(elt){
	document.body.appendChild(elt);
}

function includeScript(ps_url) {
	const lElt_script = document.createElement('script');
	lElt_script.src = ps_url;
	ajouteFinBody(lElt_script);
}
