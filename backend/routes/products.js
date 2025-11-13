const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 'SKU001', name: 'T-shirt' }, { id: 'SKU002', name: 'Mug' }]);
});

module.exports = router;
