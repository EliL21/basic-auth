'use strict';

const express = require('express');
// const { userName } = require('../models/userName');
const userName = require('../models/userName');
const router = express.Router();

// router.get('/character', async (req, res, next) => {
//   const characters = await charcterModel.findAll();
//   res.status(200).send(characters);
// });

// router.get('/character/:id', async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const character = await charcterModel.findByPk(id);
//     res.status(200).send(character);
//   } catch (e) {
//     next(e);
//   }
// });


// router.delete('/character/:id', async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const character = await charcterModel.destroy({
//       where: {
//         id: id
//       }
//     });
//     res.status(200).send(character);
//   } catch (e) {
//     next(e);
//   }
// });

// router.put('/character/:id', async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const characterUpdate = req.body;
//     const character = await characterModel.update({
//       characterUpdate
//     },
//       {
//         where: {
//           id: id
//         }
//       }
//     );
//     res.status(200).send(character);
//   } catch (e) {
//     next(e);
//   }
// });

router.post('/signUp', async (req, res, next) => {
  try {
    const userName = await charcterModel.create(req.body);
    res.status(200).send(newCharacter);
  } catch (e) {
    next(e);
  }
});

module.exports = router;