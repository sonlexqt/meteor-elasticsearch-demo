Meteor.startup(function() {
    var first_names = ["Hung",
            "Ha",
            "Hoc",
            "Son",
            "Linh",
            "Hau",
            "Hao",
            "Cuong",
            "Hoan",
            "Khiem",
            "Phuong"
        ],
        last_names = ["Vo Hoang Manh",
            "Truong Viet",
            "Nguyen Viet",
            "Le Thai",
            "Duong Khoi",
            "Nguyen Le Trung",
            "Tang Cong",
            "Nguyen Huu",
            "Nguyen Vu",
            "Huynh Cong",
            "Trinh Vinh",
            "Nguyen Hai"
        ];
    var categories = [
        "Web Developer",
        "Mobile Developer",
        "Game Developer",
        "Designer",
        "Accountant",
        "Tester",
        "Football Player",
        "Karaoke Singer",
        "Dancer"
    ];
    if (Players.find().count() === 0) {
        for (var i = 0; i < 10 * 1000; i++) {
            console.log(i + ' doc created');
            Players.insert({
                name: Random.choice(last_names) + ' ' + Random.choice(first_names),
                score: Math.floor(Random.fraction() * 1000 / Random.fraction() / 100),
                category: Random.choice(categories)
            });
        }
        console.log('done!');
    }
});

