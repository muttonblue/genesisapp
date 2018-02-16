var faker = require('faker');

module.exports = function () {
    var data = {
        users: []
    };
    for (var i = 1; i <= 10; i++) {
        data.users.push({
            id: i,
            name: faker.name.findName(),
            fname : faker.name.firstName(),
            lname : faker.name.lastName(),
            email : faker.internet.email(),
            picture: faker.image.animals()
        });
    }
    return data;
};