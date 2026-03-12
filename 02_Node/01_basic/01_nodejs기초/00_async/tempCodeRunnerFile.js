login('user1')
//   .then((user) => {
//     //then을 이용해 성공시 반환된 데이터를 받아올 수 있음
//     console.log(user);
//     return getUserInfo(user);
//   })
//   .then((userInfo) => {
//     console.log(userInfo);
//     return getOrders(userInfo);
//   })
//   .then((orders) => {
//     console.log(orders);
//     return getDelivery(orders[0]);
//   })
//   .then((delivery) => {
//     console.log('최종 배송 상태:', delivery.status);
//   })
//   .catch((error) => {
//     console.error('에러 발생:', error);
//   });