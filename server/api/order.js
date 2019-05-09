import React from 'react';
import express from 'express';
import mailer from '../services/mailer';

const router = express.Router();

router.post('/order', async (req, res, next) => {
  try {
    const { phone, site } = req.body;

    res.json({
      status: 'success',
    });

    mailer(
      'Заказ | clonesite.ru',
      `<span>${phone}</span> <span>${site}</span>`,
    );
  } catch (e) {
    next(e);
  }
});


export default router;
