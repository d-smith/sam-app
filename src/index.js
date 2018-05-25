exports.handler = (event, context, callback) => {
    console.log('handler invoked')
    console.log(event);
    console.log('handler done - invoke callback');
    callback(null, null);
}