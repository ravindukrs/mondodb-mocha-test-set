const mocha = require('mocha');
const mongoose = require('mongoose');
const Author = require('../models/author');
const assert = require('assert');

//Describe the tests
describe('Nesting Records', function () {
    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    })
    //Create Tests
    it('Creates an aouthor with sub-documents', function (done) {
        var pat = new Author({
            name: 'Patric Reothurfield',
            books: [{ title: 'Name of the Wind', pages: 121 }]
        });

        pat.save().then(function () {
            Author.findOne({ name: 'Patric Reothurfield' }).then(function (record) {
                assert(record.books.length === 1);
                done();
            });

        });
    });

    it('Adds a book to an author', function (done) {
        var pat = new Author({
            name: 'Patric Reothurfield',
            books: [{ title: 'Name of the Wind', pages: 121 }]
        });

        pat.save().then(function () {
            Author.findOne({ name: 'Patric Reothurfield' }).then(function (record) {
                //Add a book to books array
                record.books.push({ title: 'Wise Man Fear', pages: 500 });
                record.save().then(function () {
                    Author.findOne({ name: 'Patric Reothurfield' }).then(function (result) {
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })
})