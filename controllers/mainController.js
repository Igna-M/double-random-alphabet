const mainController = {

    index: function(req, res) {
        
        return res.render('index');    
    },

    alphabet: function(req, res) {
        
        return res.render('alphabet');    
    },

    cronometer: function(req, res) {
        
        return res.render('cronometer');    
    },

}


module.exports = mainController