'use strict';

const pad = require( '../src/pad' )( ' ' );
const expect = require( 'chai' ).expect;

describe( 'pad', () => {

	describe( 'require module', () => {

		it( 'should accept a parameter padWith that has length <= 1', () => {
			let error = false;
			try {
				let good = require( '../src/pad' )( '%' );
			} catch( e ) {
				error = true;
			}
			expect( error ).to.equal( false );
		});

		it( 'should fail on a padWith that has length > 1', () => {
			let error = false;
			try {
				let bad = require( '../src/pad' )( '  ' );
			} catch( e ) {
				error = true;
			}
			expect( error ).to.equal( true );
		});

		it( 'if empty, padWith should default to a space', () => {
			let error = false;
			let good;
			try {
				good = require( '../src/pad' )( '' );
			} catch( e ) {
				error = true;
			}
			expect( error ).to.equal( false );
			expect( good.left( 'Hello' ) ).to.equal( ' Hello' );
		});

	});

	describe( 'pad.both', () => {

		it( '#both() pads each side once', () => {
			expect( pad.both( 'Hello' ) ).to.equal( ' Hello ' );
		});

		it( '#both2() pads each side twice', () => {
			expect( pad.both2( 'Hello' ) ).to.equal( '  Hello  ' );
		});

		it( '#both3() pads each side three times', () => {
			expect( pad.both3( 'Hello' ) ).to.equal( '   Hello   ' );
		});

		it( '#both4() pads each side four times', () => {
			expect( pad.both4( 'Hello' ) ).to.equal( '    Hello    ' );
		});

		it( '#bothUntil() pads each side until length is reached', () => {
			expect( pad.bothUntil( 'Hi', 14 )).to.equal( '      Hi      ' );
		});

		

	});
	
	describe( 'pad.left', () => {

		it( '#left() pads the left side once', () => {
			expect( pad.left( 'Hello' ) ).to.equal( ' Hello' );
		});

		it( '#left2() pads the left side twice', () => {
			expect( pad.left2( 'Hello' ) ).to.equal( '  Hello' );
		});

		it( '#left3() pads the left side three times', () => {
			expect( pad.left3( 'Hello' ) ).to.equal( '   Hello' );
		});

		it( '#left4() pads the left side four times', () => {
			expect( pad.left4( 'Hello' ) ).to.equal( '    Hello' );
		});

		it( '#leftUntil() pads the left side until length is reached', () => {
			expect( pad.leftUntil( 'Hi', 14 )).to.equal( '            Hi' );
		});

	});

	describe( 'pad.right', () => {

		it( '#right() pads the right side once', () => {
			expect( pad.right( 'Hello' ) ).to.equal( 'Hello ' );
		});

		it( '#right2() pads the right side twice', () => {
			expect( pad.right2( 'Hello' ) ).to.equal( 'Hello  ' );
		});

		it( '#right3() pads the right side three times', () => {
			expect( pad.right3( 'Hello' ) ).to.equal( 'Hello   ' );
		});

		it( '#right4() pads the right side four times', () => {
			expect( pad.right4( 'Hello' ) ).to.equal( 'Hello    ' );
		});

		it( '#rightUntil() pads the right side until length is reached', () => {
			expect( pad.rightUntil( 'Hi', 14 )).to.equal( 'Hi            ' );
		});

	});

});
