// use factry function 

function factory(){
    return {
        homeRoute:(req,res)=>{
        res.render('index')
        }
    }

}

module.exports =factory