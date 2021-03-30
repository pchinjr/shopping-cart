@app
shopping

@http
get /
post /cart
post /cart/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL