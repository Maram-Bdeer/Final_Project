const schemaShot = require('schema-shot')

class snapSot{

constructor(){

}



static CreateSnapshot() {
    

it('returns most popular item', ()=>{
    const top = api.getMostPopularItem()
    schemaShot(top)
})


  const snapshot = require('snap-shot')
const schemaShot = require('schema-shot')
it('returns schema object', () => {
  const o = {name: 'my name'}
  const schema = schemaShot(o)
  snapshot(schema)
})
}
}