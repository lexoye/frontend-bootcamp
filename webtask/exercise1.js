module.exports = function(cb) {
 console.log('This is a slack request');
 cb(null, {text: 'Hola Mundo'});
};
