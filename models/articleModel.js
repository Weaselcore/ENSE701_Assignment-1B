const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    article_data: {
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
        keywords: {
            type: [String]
        }
        ,
        source: {
            type: String
        }
        ,
        year: {
            type: Number
        }
        ,
        industry_codes: {
            type: String
        },
        doi: {
            type: String
        },
        accession_number: {
            type: String
        },

        se_method: {
            type: String
        },
        rating: {
            type: String
        },
        claim: {
            type: String,
            required: true
        }
    }
});

// eslint-disable-next-line no-undef
module.exports = Article = mongoose.model('article', ArticleSchema);