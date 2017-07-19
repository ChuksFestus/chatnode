import http from "http"
// import fs from "fs"

// const options = {
// 	pfx: fs.readFileSync("index.js"),
// 	passpharse: "sample"
// }

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) =>{
	res.statusCode = 200
	res.setHeader("Content-Type", "text/plain")
	res.end("hello world\n")
})

server.listen(port, hostname, () => console.log(`server is running at https://${hostname}:${port}`))