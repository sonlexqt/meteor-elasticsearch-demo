Players = new Meteor.Collection('players');

Template.leaderboard.created = function () {
    var instance = EasySearch.getComponentInstance(
        { id : 'search', index : 'index-players' }
    );

    instance.on('searchingDone', function (searchingIsDone) {
        searchingIsDone && console.log('I am done!');
    });

    instance.on('currentValue', function (val) {
        console.log('The user searches for ' + val);
    });

    instance.on('searchResults', function (arr){
        Template.playersRes.results = arr;
    });
};


