const { app } = require("../../index")
const request = require("supertest")

describe("GET /api/users", () => {
    it("should return all users", () => {
        request(app)
        .get('/api/users')
        .expect(200)
        .end(function(err, res) {
            expect(Array.isArray(res.body)).toBeTruthy()
        });
    })
})


describe("GET /api/users/{id}", () => {
    it("should get user based on a single ID", () => {
        request(app)
        .get('/api/users/1')
        .expect(200)
        .then(function(res) {
            expect(Array.isArray(res.body)).toBeTruthy()
            expect(res.body.length).toBe(1)
        });
    })
})

describe("POST /api/users", () => {
    it("should add user; the user name and email address should be included in the body of the request", (done) => {
        request(app)
        .post('/api/users')
        .send({
            name: "mike",
            email: "mike@gmail.com"
        })
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
    })
})

describe("DELETE /api/users/{id}", () => {
    it("should delete user based on single ID", () => {
        request(app)
        .delete('/api/users/1')
        .expect(200)
        .then(function(res) {
            expect(Array.isArray(res.body.users)).toBeTruthy()
        });
    })
})