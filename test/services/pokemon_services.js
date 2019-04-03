const request = require('supertest')
const assert = require('chai').assert
const expect = require('chai').expect

const url = 'https://pokeapi.co/api/v2'
const response = require('./pokemon_data')


describe('Service Test API PokeAPI', () => {
    describe('GET pokemon service test', () => {
        it('Ditto service validation', (done) => {
            request(url)
                .get('/pokemon/ditto')
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    expect(res.body).to.eql(response);
                    done(err)
                });
        });
    });

});