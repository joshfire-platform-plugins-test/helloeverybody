/**
 * @fileoverview List hook handler
 */
define([], function () {
  /**
   * The module returns a factory that creates the handler
   * with the configuration options given as parameter
   */
  return function (config) {
    console.log('addon', 'helloeverybody', 'list', 'initialize', config);

    return {
      generate: function (options, callback) {
        console.log('addon', 'helloeverybody', 'list', 'generate', options);
        var msg = '';
        if (options.data) {
          if (options.data.length > 1) {
            msg = 'I ❤ all ' + options.data.length + ' of u!';
          }
          else {
            msg = 'I ❤ u lonely item!';
          }
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
        console.log('addon', 'helloeverybody', 'list', 'enhance', el, options);
        if (el) {
          el.addEventListener('click', function () {
            alert('Thanks!');
          });
        }
      },

      actionCallback: function(options, callback) {
        console.log('addon', 'helloeverybody', 'list', 'actionCallback', options);
        return callback();
      }
    };
  };
});