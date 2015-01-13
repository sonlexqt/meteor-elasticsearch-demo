EasySearch.createSearchIndex('index-players', {
    'collection': Players, // instanceof Meteor.Collection
    'field': ['name', 'score', 'category'], // array of fields to be searchable
    'limit': 10,
    //'use' : 'mongo-db',
    //'convertNumbers': true,
    //'sort': function() {
    //    return { 'score': -1, 'name': -1 };
    //}
    'use': 'elastic-search',
    'query': function (searchString) {
        var query = {
            "fuzzy_like_this": {
                "fields": ["name", "category"],
                "like_text": searchString
            }
        };
        return query;
    },
    'sort': function () {
        return {
            "score": {"order": "desc"}
        };
    }
});
