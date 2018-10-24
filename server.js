const express = require('express')

const opn = require('opn')

const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

const mobxReact = require('mobx-react')
mobxReact.useStaticRendering(true)


app.prepare().then(() => {
    const server = express()
    server.get('/google', (req, res) => {
        const actualPage = '/about'
        app.render(req, res, actualPage)
    })
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    server.listen(port, err => {
        if (err) throw err
        opn(`http://localhost:${port}`)
        console.log(`>Ready on http://localhost:${port}`)
    })

}).catch(err => {
    console.log(err.stack)
    process.exit(1)
})