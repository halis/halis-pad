'use strict';

module.exports = function m( padWith ) {
	const SPACE = ' ';
	const compose = require( 'halis-compose' );
	
	padWith = padWith || SPACE;

	if ( padWith.length > 1 ) throw 'only one character allowed to pad with';

	let right = x => ( x || '') + padWith;
	let left = x => padWith + ( x || '');
	let both = x => padWith + ( x || '') + padWith;

	let both2 = compose.foldl( both, both );
	let both3 = compose.foldl( both, both, both );
	let both4 = compose.foldl( both, both, both, both );

	let right2 = compose.foldl( right, right );
	let right3 = compose.foldl( right, right, right );
	let right4 = compose.foldl( right, right, right, right );

	let left2 = compose.foldl( left, left );
	let left3 = compose.foldl( left, left, left );
	let left4 = compose.foldl( left, left, left, left );

	let until = ( str, limit, position ) => {
		if ( str.length >= limit ) return str;

		while ( str.length < limit ) {
			if ( position === -1 ) {
				str = padWith + str;
			} else if ( position === 1 ) {
				str = str + padWith;
			} else {
				str = padWith + str;
				if ( str.length >= limit ) break;
				str = str + padWith;
			}
		}

		return str;
	};

	let leftUntil = ( str, limit ) => {
		return until( str, limit, -1 );
	};

	let rightUntil = ( str, limit ) => {
		return until( str, limit, 1 );
	};

	let bothUntil = ( str, limit ) => {
		return until( str, limit, 0 );
	};

	return {
		both,
		both2,
		both3,
		both4,
		bothUntil,
		left,
		left2,
		left3,
		left4,
		leftUntil,
		right,
		right2,
		right3,
		right4,
		rightUntil,
	};
};

