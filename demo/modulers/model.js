// require , exports ,module ,__dirname , __filename

//console.log(__dirname)
// console.log(__filename)
let names = ['name','name2','name3']
let mark =[100,54,62]

module.exports.names = names
module.exports.mark = mark
exports.data =[1,2,3]
// it overrides the above data 
module.exports.data = 'john'
// it overrides all the above 
  // module.exports ='APPlE'


//console.log(module)