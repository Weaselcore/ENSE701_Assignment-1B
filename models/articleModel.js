const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    last_processed_datetime: {
        type: Date,
        required: true
    },
    state: {
        type: String,
        required: true
    }, 
        {
        title: {
                type: String,
                required: true
                },
        authors: {
                type: [String],
                required: true
                },
        issn: {
                type: Number,
                },
        keywords:{
            type: [String]
            }
        ,
        source:{
            type: String
            }
                ,
        industry_codes:{
            type: String
                },
        doi: {
            type: String
        },
        accession_number: {
            type: String
        },
        published_date: {
            type: Date
        }
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);