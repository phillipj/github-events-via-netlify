exports.handler = async (request) => {
  const eventType = request.headers['x-github-event'];

  if (eventType !== 'push') {
    console.log(`Ignoring GitHub event of type "${eventType}"`)
    return
  }

  const event = JSON.parse(request.body)
  const author = event.sender.login

  console.log(event)

  return {
    statusCode: 200,
    body: `Changes from ${author} received`,
  }
}
