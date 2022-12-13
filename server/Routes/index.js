import express from 'express'
import router from './RoutesUpload.js'
import user from './userLogin.js'

const routes = (app) => {
    app.use(
        express.json(),
        router,
        user
    )
}

export default routes