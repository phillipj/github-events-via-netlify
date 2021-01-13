exports.handler = async (event) => {
  const author = event.sender.login

  console.log(event)

  return {
    statusCode: 200,
    body: `Changes from ${author} received`,
  }
}
