const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");

const User = mongoose.model("user");

xdescribe("Users controller", () => {
  xit("Post to /users creates a new user", (done) => {
    User.count().then((count) => {
      request(app)
        .post("/users")
        .send({ email: "test1@test.com" })
        .end(() => {
          Driver.count().then((newCount) => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });

  xit("PUT to /api/drivers/:id edits an existing driver", (done) => {
    const driver = new Driver({ email: "t@t.com", driving: false });

    driver
      .save()
      .then(() => {
        request(app)
          .put(`/api/drivers/${driver._id}`)
          .send({ driving: true })
          .end(() => {
            Driver.findOne({ email: "t@t.com" })
              .then((driver) => {
                assert(driver.driving === true);
                done();
              })
              .catch((e) => console.log(e));
          });
      })
      .catch((e) => console.log(e));
  });

  xit("DELETE to /api/drivers/:id can delete a driver", (done) => {
    const driver = new Driver({ email: "test@test.com", driving: false });

    driver.save().then(() => {
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        .end(() => {
          Driver.findOne({ email: "test@test.com" }).then((driver) => {
            assert(driver === null);
            done();
          });
        });
    });
  });

  xit('GET to /api/drivers finds drivers in a location', done => {
    const seattleDriver = new Driver({
      email: 'seattle@test.com',
      geometry: { type: 'Point', coordinates: [-122.4759902, 47.6147628]}
    });
    const miamiDriver = new Driver({
      email: 'miami@test.com',
      geometry: { type: 'Point', coordinates: [-80.253, 25.791]}
    });

    Promise.all([seattleDriver.save(), miamiDriver.save()])
      .then(() => {
        request(app)
          .get('/api/drivers?lng=-80&lat=25')
          .end((err, response) => {
            // console.log(response);
            assert(response.body.length === 1)
            assert(response.body[0].email === "miami@test.com")
            done();
          })
      })
  })
});