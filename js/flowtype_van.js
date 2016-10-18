/*
* FlowType.js - Vanilla Version
* @author Kyle Foster (@hkfoster)
* @copyright 2013 Simple Focus (http://simplefocus.com)
* @thanks Giovanni Difeterici (http://gdifeterici.com)
* @license MIT
*/
;(function( window, document, undefined ) {
  
  'use strict';
  
  // Extend function
  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[ key ] = b[ key ];
      }
    }
    return a;
  }
  
  // Main function definition
  function flowtype( selector, options ) {
    this.selector = Array.prototype.slice.call( document.querySelectorAll( selector ) );
    this.options  = extend( this.defaults, options );
    this.init();
  };
  
  // Overridable defaults
  flowtype.prototype = {
    defaults : {
      maximum   : 9999,
      minimum   : 1,
      maxFont   : 9999,
      minFont   : 1,
      fontRatio : 35,
      lineRatio : 1.45
    },
    
    // Magic math stuffs
    init : function( selector ) {
      var self     = this,
          selector = self.selector,
          options  = self.options;
      
      // Our for each function
      for ( var i = 0; i < selector.length; i++ ) {
        var selectorWidth  = selector[i].offsetWidth,
            width          = selectorWidth > options.maximum ? options.maximum : 
                             selectorWidth < options.minimum ? options.minimum : selectorWidth,
            fontBase       = width / options.fontRatio,
            fontSize       = fontBase > options.maxFont ? options.maxFont : 
                             fontBase < options.minFont ? options.minFont : fontBase;
        
        // Apply our styles
        selector[i].style.fontSize   = fontSize + 'px';
        selector[i].style.lineHeight = fontSize * options.lineRatio + 'px';
      }
      
      // Fire resize function on ... well, resize
      window.addEventListener( 'resize', function() { self._resizeHandler(); } );
    },
    
    // Resize handler function
    _resizeHandler : function() {
      var self = this;
      function delayed() {
        self._resize();
        self._resizeTimeout = null;
      }
    
      if ( this._resizeTimeout ) {
        clearTimeout( this._resizeTimeout );
      }
    
      this._resizeTimeout = setTimeout( delayed, 50 );
    },
    
    // The actual resize function
    _resize : function() {
      this.init();
    }
  }
  
  window.flowtype = flowtype;

})( window, document );

// Instantiate Plugin
new flowtype( 'p', { 
  maxFont : 142,
  minFont : 14,
  fontRatio: 30,
  lineRatio: 1.375
});f