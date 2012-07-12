/**
 * @fileoverview Item hook handler
 */
define([], function () {
  /**
   * The module returns a factory that creates the handler
   * with the configuration options given as parameter
   */
  return function (config) {
    console.log('addon', 'helloeverybody', 'item', 'initialize', config);

    return {
      generate: function (options, callback) {
        console.log('addon', 'helloeverybody', 'item', 'generate', options);
        var msg = '';
        if (options.data) {
          msg = 'I ❤ u "' + options.data.name + '"';
        }
        else {
          msg = 'I ❤ me. Where are you?';
        }
        return callback(null, '<div>' +
          '<h4>Hello everybody</h4>' +
          '<p>' + msg + '</p>' +
          '</div>');
      },

      enhance: function (el, options) {
        console.log('addon', 'helloeverybody', 'item', 'enhance', el, options);
        if (el) {
          el.addEventListener('click', function () {
            alert('Thanks!');
          });
        }
      },

      actionCallback: function(options, callback) {
        console.log('addon', 'helloeverybody', 'item', 'actionCallback', options);
        return callback();
      }
    };
  };
});