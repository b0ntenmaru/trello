const Express = require('express');

const router = Express.Router();

router.get('/departments', function (request, response, next) {
  const departments = [
    {
      children: [
        {
          children: [
            {
              children: [],
              id: 3,
              name: 'エージェントG',
              parent_id: 2,
            },
            {
              children: [
                {
                  children: [
                    {
                      children: [],
                      id: 6,
                      name: 'リファクタリング部',
                      parent_id: 5,
                    },
                  ],
                  id: 5,
                  name: 'バックエンドG',
                  parent_id: 4,
                },
                {
                  children: [],
                  id: 7,
                  name: 'フロントエンドG',
                  parent_id: 4,
                },
              ],
              id: 4,
              name: 'プラットフォームG',
              parent_id: 2,
            },
          ],
          id: 2,
          name: 'プロダクトDiv',
          parent_id: 1,
        },
      ],
      id: 1,
      name: '社長室',
      parent_id: null,
    },
  ];
  response.send(departments);
});

module.exports = router;
