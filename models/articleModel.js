const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    last_processed_datetime: {
        type: String,
        required: true
    },
    claim :{
        type : String ,
        required: true
    }
    ,
    
    state: {
        type: String,
        required: true
    }, 
    
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
        
        se_method: {
            type: String 
        },
        rating :{
            type :String
        }
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);