const shopMenuArr = [
  {
    id: 0,
    name: '6 吋墨西哥辣牛潛艇堡 6-Inch Taco Beef Sub',
    description: '內含墨西哥辣牛肉。套餐含 6 吋潛艇堡 1 份, 附餐選擇與飲料選擇。Includes a side and a drink.',
    cover: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iODJjY2ZiOS1lNjkwLTRiODEtYTVjYS1kOGE1NWJkMzJkYjQuanBlZw==',
    price: 168.00,
    selects: [
      {
        title: '加料',
        min: 1,
        max: 2,
        items: [
          {
            title: '起司',
            value: 0
          },
          {
            title: '蔬菜',
            value: 1
          },
          {
            title: '醬料',
            value: 2
          }
        ]
      }
    ],
    radios: [
      {
        title: '是否加熱麵包',
        min: 1,
        max: 1,
        items: [
          {
            title: '是',
            value: 1
          },
          {
            title: '否',
            value: 0
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: '6 吋百味俱樂部潛艇堡 6-Inch Subway Club™ Sub',
    description: '內含墨西哥辣牛肉。套餐含 6 吋潛艇堡 1 份, 附餐選擇與飲料選擇。Includes a side and a drink.',
    cover: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC85ZWVmZmE1Yi0yZWJjLTQ5ZDMtYTQ0YS0wMzJhZDg0MTJhYjguanBlZw==',
    price: 188.00,
  },
  {
    id: 2,
    name: '6 吋香烤雞肉潛艇堡 6-Inch Roasted Chicken Breast Sub',
    description: '內含墨西哥辣牛肉。套餐含 6 吋潛艇堡 1 份, 附餐選擇與飲料選擇。Includes a side and a drink.',
    cover: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iYzg1ZjhkMy1jNjA0LTQ0MWEtODdiZi1mNDJiNzcxMWMzZmUuanBlZw==',
    price: 178.00,
  },
  {
    id: 3,
    name: '6 吋鮪魚潛艇堡 6-Inch Tuna Sub',
    description: '內含墨西哥辣牛肉。套餐含 6 吋潛艇堡 1 份, 附餐選擇與飲料選擇。Includes a side and a drink.',
    cover: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC85MTJmNWY1NC1lYThiLTRlYTMtOTJlMC1hZTg2YjgwMjdlYTIuanBlZw==',
    price: 158.00,
  },
  {
    id: 4,
    name: '6 吋義大利經典潛艇堡 6-Inch Italian',
    description: '內含墨西哥辣牛肉。套餐含 6 吋潛艇堡 1 份, 附餐選擇與飲料選擇。Includes a side and a drink.',
    cover: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9jYmMyYTdmOS1lMTBiLTRiM2MtOWZhNi00MGY1NzdiOGEwZTkuanBlZw==',
    price: 198.00,
  },
  {
    id: 5,
    name: '超級美味薯條 Super pipi',
    description: '內含墨西哥辣牛肉。套餐含 6 吋潛艇堡 1 份, 附餐選擇與飲料選擇。Includes a side and a drink.',
    cover: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80NDczZTJiZC02YTljLTRiMmYtYTBlNC0xMjI2M2IwYjk1N2EuanBlZw==',
    price: 128.00,
  },
  {
    id: 6,
    name: '撒尿牛完 Pissing Beef Balls',
    description: '內含墨西哥辣牛肉。套餐含 6 吋潛艇堡 1 份, 附餐選擇與飲料選擇。Includes a side and a drink.',
    cover: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iMDA5ODRiOC1iZTA4LTQ0ZDAtODJjMi1hODc2N2EwN2UwNjkuanBlZw==',
    price: 40.00,
  },
  {
    id: 7,
    name: '大俠愛吃的漢堡包 you love burger',
    description: '內含墨西哥辣牛肉。套餐含 6 吋潛艇堡 1 份, 附餐選擇與飲料選擇。Includes a side and a drink.',
    cover: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iODc5NjYxYi05YjFiLTRmZjMtYmYwZS1jNzBmMWVkZGY5MGIuanBlZw==',
    price: 100.00,
  }
]

export default shopMenuArr