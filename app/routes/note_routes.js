module.exports = function(app,dbCollection){
    app.post('/notes',(request,response)=>{
        // You'll create your note here.    
        console.log(request.body)
        const item = request.body;
        dbCollection.insert(item, (error, result) => { // callback of insertOne
            if (error) throw error;
            // return updated list
            dbCollection.find().toArray((_error, _result) => { // callback of find
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });

    app.get('/notes/:id', (request, response) => {
        const itemId = request.params.id;
        console.log(itemId);
        dbCollection.findOne({ id: itemId }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

    // Get All Data
    app.get('/notes',(request,response)=>{
        dbCollection.find().toArray((error,result)=>{
            if(error) throw error;
            response.json(result);
        })
    });

    // Update Data
    app.put("/notes/:id", (request, response) => {
        const itemId = request.params.id;
        const item = request.body;
        console.log("Editing item: ", itemId, " to be ", item);
    
        dbCollection.update({ id: itemId }, { $set: item }, (error, result) => {
            if (error) throw error;
            // send back entire updated list, to make sure frontend data is up-to-date
            dbCollection.find().toArray(function(_error, _result) {
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });

    // Delete Data
    app.delete('/notes/:id',(request,response)=>{
        const itemId = request.params.id;
        console.log('Delete item with id: ',itemId);

        dbCollection.deleteOne({id:itemId},function(error,result){
            if(error) throw error;
            response.json(result);
        })
    });
};