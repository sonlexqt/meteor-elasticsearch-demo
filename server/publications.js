Meteor.publish('allPlayers', function(){
    var x = Players.find().fetch();
    return Players.find({}, {limit: 100});
});
