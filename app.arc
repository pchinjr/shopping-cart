@app
shopping

@http
get /
get /cart
post /cart
post /cart/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL