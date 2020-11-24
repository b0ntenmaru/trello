const Express = require('express');

const router = Express.Router();

router.get('/boards', function (request, response, next) {
  const boards = [
    {
      id: '1',
      title: 'レーン１',
      items: [
        { id: '1', name: 'ほげほげ' },
        { id: '2', name: 'いいいい' },
      ],
    },
    {
      id: '2',
      title: 'レーン2',
      items: [
        { id: '3', name: 'うううう' },
        { id: '4', name: 'ええええ' },
      ],
    },
    {
      id: '3',
      title: 'レーン3',
      items: [{ id: '5', name: 'おおおお' }],
    },
  ];
  response.send(boards);
});

module.exports = router;
