router.post('/:cid/purchase', async (req, res) => {
    const cart = await cartRepository.getCart(req.params.cid);
    // Lógica para verificar el stock y actualizar
    // Crear el ticket con los productos comprados
});