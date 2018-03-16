$(document).ready(function() {

	    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'LnStakeontheworld',
        clientId: '0386cd4fffd14d5296066d07c0fcde4f'
    });
    feed.run();
    console.log('test')

});


 