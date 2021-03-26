let arc = require('@architect/functions')
let data = require('@begin/data')

async function http (req) {

  await data.set({
    table: "shopping-cart",
    key: req.body.productId,
    cartItem: {
      quantity: req.body.quantity,
      prodId: req.body.productId
    }
  })

  return {
    statusCode: 302,
    location: '/'
  }
}

exports.handler = arc.http.async(http)