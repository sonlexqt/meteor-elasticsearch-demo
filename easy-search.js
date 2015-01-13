EasySearch.createSearchIndex('index-players', {
    'collection': Players, // instanceof Meteor.Collection
    'field': ['name', 'score'], // array of fields to be searchable
    'limit': 10,
    'use' : 'mongo-db',
    'convertNumbers': true,
    'sort': function() {
        return { 'score': -1, 'name': -1 };
    }
});