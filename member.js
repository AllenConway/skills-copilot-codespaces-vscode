function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'];
    var member = {
        name: 'John Doe',
        age: 25,
        skills: skills,
        address: {
            street: '123 Main St',
            city: 'Boston',
            state: 'MA'
        },
        getBirthYear: function() {
            return 2017 - this.age;
        }
    }
    return member;
}