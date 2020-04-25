module.exports = function(application) {
    application.get('/api', function(req, res) {
    // console.log('application', application);
    let mongoImport = application.app.config.dbDataExports();
        
        mongoImport.pageList(req.params.page, req.params.qtd, (err, docs) => {

        if (err || !docs) 
        return res.send({
            code:500,msg:"Ops...Algo deu errado..."
            }); 
        return res.send({
            code:200,msg:docs
            })
        })
    })
}