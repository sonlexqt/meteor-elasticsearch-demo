Session.setDefault('doneSubscribing', false);

Players = new Meteor.Collection('players');

Meteor.subscribe('allPlayers', function(){
    Session.set('doneSubscribing', true);
});

Tracker.autorun(function(){
    if (Session.get('doneSubscribing') === true){
        var y = Players.find().fetch();
        console.log(y);
        Session.set('doneSubscribing', false);
    }
});

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


