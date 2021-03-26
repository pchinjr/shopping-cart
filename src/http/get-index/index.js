let arc = require('@architect/functions')
let data = require('@begin/data')

async function http (req) {

  let result = await data.get({
    table: 'shopping-cart'
  })


  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
    <h1> Praise Cage </h1>
    <p> Welcome to the Store </p>
    <ul>
    <li>Item 1</li>
    <form action='cart' method='POST'>
    <input type="text" name="quantity"/>
    <input type="hidden" name="productId" value='001'>
    <button>Add to Cart</button>
    </form>
    <form action='cart/delete' method='POST'>
    <input type="hidden" name="productId" value='001'>
    <button>Remove from Cart</button>
    </form>
    <li>Item 2</li>
    <form action='cart' method='POST'>
    <input type="text" name="quantity"/>
    <input type="hidden" name="productId" value='002'>
    <button>Add to Cart</button>
    </form>
    <form action='cart/delete' method='POST'>
    <input type="hidden" name="productId" value='002'>
    <button>Remove from Cart</button>
    </form>
    <li>Item 3</li>
    <form action='cart' method='POST'>
    <input type="text" name="quantity"/>
    <input type="hidden" name="productId" value='003'>
    <button>Add to Cart</button>
    </form>
    <form action='cart/delete' method='POST'>
    <input type="hidden" name="productId" value='003'>
    <button>Remove from Cart</button>
    </form>
    </ul>
    <p>This is your order</p>
    <p>${JSON.stringify(result)}</p>

    <p>${result.map(item => `<li>${JSON.stringify(item.cartItem)}</li>`).join('')}</p>
    `
  }
}

exports.handler = arc.http.async(http)