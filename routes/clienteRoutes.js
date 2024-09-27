const { Router } = require('express')
const { findAllClientesController, findById, insertController, updateController, deleteCliente } = require('../controllers/clienteController')

const router = Router()

router.get('/',findAllClientesController)

router.get('/:id', findById)

router.post('/', insertController)

router.put('/', updateController)

router.delete('/', deleteCliente)

module.exports = router
