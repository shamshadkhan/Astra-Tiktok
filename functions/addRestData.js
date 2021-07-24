const { getPostCollection } = require("./utils/astraClient");

exports.handler = async function () {
  const posts = await getPostCollection();
  const data = [
     {
      "avatar": "https://i.imgur.com/glt7Xdr.jpg",
      "button_visible": true,
      "caption": "【抖音】_Slow Motion_ Master Douyin China 2020 _ Tiến Quân Official",
      "comments": 0,
      "id": 0,
      "is_followed": false,
      "likes": 0,
      "name": "Shamshad Akther",
      "shares": 0,
      "timestamp": "2021-07-22T11:13:59.020Z",
      "username": "shamshad1990",
      "video": "https://i.imgur.com/JHCr0JY.mp4"
    },
     {
      "avatar": "https://i.imgur.com/glt7Xdr.jpg",
      "button_visible": true,
      "caption": "【抖音】\"Slow Motion\" Master Douyin China 2020 || Tiến Quân Official",
      "comments": 0,
      "id": 1,
      "is_followed": false,
      "likes": 0,
      "name": "Shamshad Akther",
      "shares": 0,
      "timestamp": "2021-07-22T03:51:07.397Z",
      "username": "shamshad1990",
      "video": "https://i.imgur.com/HOFPKjq.mp4"
    },
     {
      "avatar": "https://i.imgur.com/6auMnvh.jpg",
      "button_visible": true,
      "caption": "Kill Me Heal Me",
      "comments": 0,
      "id": 2,
      "is_followed": false,
      "likes": 1,
      "name": "Monjur Morshed",
      "shares": 1,
      "timestamp": "2021-07-19T11:46:10.853Z",
      "username": "monjur1988",
      "video": "https://i.imgur.com/eJMr5JF.mp4"
    },
    {
      "avatar": "https://i.imgur.com/eX3hkoc.png",
      "button_visible": true,
      "caption": "Happiest of Birthdays my Angel",
      "comments": 4,
      "id": 3,
      "is_followed": true,
      "likes": 2,
      "name": "Angela Lee",
      "timestamp": "2020-04-10T09:08:31.020Z",
      "username": "angiecakes",
      "video": "https://i.imgur.com/al6MLay.mp4"
    },
    {
      "avatar": "https://i.imgur.com/IigY4Hm.png",
      "button_visible": true,
      "caption": "The new normal",
      "comments": 2,
      "id": 4,
      "is_followed": false,
      "likes": 10,
      "name": "Nina Xen",
      "timestamp": "2020-05-10T09:08:31.020Z",
      "username": "nina_lina",
      "video": "https://i.imgur.com/Kzvbeup.mp4"
    },
    {
      "avatar": "https://i.imgur.com/glt7Xdr.jpg",
      "button_visible": true,
      "caption": "BTS - Pied Piper | V and Jin ( Taejin )",
      "comments": 0,
      "id": 5,
      "is_followed": false,
      "likes": 0,
      "name": "Shamshad Akther",
      "timestamp": "2021-07-17T13:07:19.571Z",
      "username": "shamshad1990",
      "video": "https://i.imgur.com/SW1b2aO.mp4"
    },
    {
      "avatar": "https://i.imgur.com/glt7Xdr.jpg",
      "button_visible": true,
      "caption": "Henry 헨리 'TRAP' MV (with Kyuhyun & Taemin)",
      "comments": 0,
      "id": 6,
      "is_followed": false,
      "likes": 0,
      "name": "Shamshad Akther",
      "timestamp": "2021-07-16T17:31:00.694Z",
      "username": "shamshad1990",
      "video": "https://i.imgur.com/n793aIL.mp4"
    },
    {
      "avatar": "https://i.imgur.com/rWYtZa6.png",
      "button_visible": true,
      "caption": "When your fries give you attitude #getInMyBelly",
      "comments": 2,
      "id": 7,
      "is_followed": false,
      "likes": 12,
      "name": "Tim Salowski",
      "timestamp": "2020-03-10T09:08:31.020Z",
      "username": "timmytam",
      "video": "https://i.imgur.com/1A7AKoF.mp4"
    },
    {
      "avatar": "https://i.imgur.com/6auMnvh.jpg",
      "button_visible": true,
      "caption": "Kill Me Heal Me",
      "comments": 0,
      "id": 8,
      "is_followed": false,
      "likes": 1,
      "name": "Monjur Morshed",
      "shares": 1,
      "timestamp": "2021-07-19T11:38:58.078Z",
      "username": "monjur1988",
      "video": "https://i.imgur.com/KKs6BwX.gif"
    },
    {
      "avatar": "https://i.imgur.com/jONHmE5.png",
      "button_visible": true,
      "caption": "Art is for everyone",
      "comments": 20,
      "id": 9,
      "is_followed": true,
      "likes": 231,
      "name": "Lana Del Mont",
      "timestamp": "2020-09-10T09:08:31.020Z",
      "username": "lana_del_away",
      "video": "https://i.imgur.com/H9UX0Jm.mp4"
    },
    {
      "avatar": "https://i.imgur.com/glt7Xdr.jpg",
      "button_visible": true,
      "caption": "Henry 헨리 'TRAP' MV (with Kyuhyun & Taemin)",
      "comments": 0,
      "id": 10,
      "is_followed": false,
      "likes": 0,
      "name": "Shamshad Akther",
      "timestamp": "2021-07-16T17:11:06.380Z",
      "username": "shamshad1990",
      "video": "https://youtu.be/IsXB5eRMRno"
    },
    {
      "avatar": "https://i.imgur.com/glt7Xdr.jpg",
      "button_visible": true,
      "caption": "Henry 헨리 'TRAP' MV (with Kyuhyun & Taemin)",
      "comments": 0,
      "id": 11,
      "is_followed": false,
      "likes": 0,
      "name": "Shamshad Akther",
      "timestamp": "2021-07-16T17:16:22.405Z",
      "username": "shamshad1990",
      "video": "https://www.youtube.com/embed/IsXB5eRMRno"
    }
 ];

  try {
    for (let i = 0; i < data.length; i++) {
      await posts.create(data[i].id.toString(), data[i]);
    }

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
