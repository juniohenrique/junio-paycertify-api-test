const request = require('supertest')
const assert = require('chai').assert
const expect = require('chai').expect
const Joi = require('joi')
const joiAssert = require('joi-assert')

const url = 'https://pokeapi.co/api/v2'
const pokemon = require('../schemas/pokemon_schema')
const resources = require('../schemas/resources_schema')
const berry = require('../schemas/berry_{code}_schema')

describe('Contract Test API PokeAPI', () => {
    describe('GET pokemon contract test', () => {
        it('Pokemon validation', (done) => {
            request(url)
                .get('/pokemon/')
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    joiAssert(res.body, pokemon, 'Erro no contrato da API Pokemon')
                    done(err)
                });
        });
    });

    describe('GET resource contract test', () => {
        it('Resources validation', (done) => {
            request(url)
                .get('/')
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    joiAssert(res.body, resources, 'Erro no contrato da API Resources')
                    done(err)
                });
        });
    });

    describe('GET Berry contract test', () => {
        it('Berry validation', (done) => {
            request(url)
                .get('/berry/1')
                .end((err, res) => {
                    assert.equal(res.status, 200)
                    joiAssert(res.body, berry, 'Erro no contrato da API Berry')
                    done(err)
                });
        });
    })
});