let arc = require('@architect/functions')
let data = require('@begin/data')

async function route(req) {
  let result = await data.get({
    table: "shopping-cart"
  })

  console.log(result)
}

exports.handler = arc.http.async(route)