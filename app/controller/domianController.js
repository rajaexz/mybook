function factoryDomain (){
     
   return {
    Domain:(req,res)=>{
    res.render('domains/index')
    }
}
}

module.exports= factoryDomain;