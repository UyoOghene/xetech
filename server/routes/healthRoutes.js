import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ 
    message: 'XETECH API is running!',
    timestamp: new Date().toISOString()
  });
});

export default router;