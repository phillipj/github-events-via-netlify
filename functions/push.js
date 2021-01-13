exports.handler = async (event) => {
  console.log(event)

  const author = event.sender.login

  return {
    statusCode: 200,
    body: `Changes from ${author} received`,
  }
}
