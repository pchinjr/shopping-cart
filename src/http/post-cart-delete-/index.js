let arc = require('@architect/functions')
let data = require('@begin/data')

async function http(req) {
  console.log(req.body)

  let set = await data.destroy({
    table: "shopping-cart",
    key: req.body.productId
  })

  console.log(set)

  return {
    statusCode: 302,
    location: '/'
  }
}

exports.handler = arc.http.async(http)