const net = require('net')
let client = new net.Socket()
client.connect(800, 'localhost')

client.setEncoding('utf8')

client.on('data', (data) => {
  alert(data)
})

client.on('error', (e) => {
  alert(e)
})

function csend (mes) {
  client.write(mes)
}
export {csend}
