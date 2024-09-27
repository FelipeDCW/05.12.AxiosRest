
const { Router} = require('express')
const { findAllProductosController, findById, insert, update, deleteById } = require('../controllers/productoController')


const router = Router()

router.get('/',findAllProductosController)

router.get('/:id',findById)

router.post('/', insert)

router.put('/', update)

router.delete('/',deleteById)

module.exports = router