// Получение IP адреса
// fetch('https://api.ipify.org?format=json')
//   .then(response => response.json())
//   .then(data => {
//     const ipAddress = data.ip;
//     console.log(ipAddress);
//   })
//   .catch(error => {
//     console.error('Ошибка:', error);
//   });

// // Получение региона
// fetch('https://ipapi.co/json/')
//   .then(response => response.json())
//   .then(data => {
//     const region = data.region;
//     console.log(region);
//   })
//   .catch(error => {
//     console.error('Ошибка:', error);
//   });

// Получение кода региона Беларуси
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const country = data.country;
    const regionCode = data.region_code;

    if (country === 'BY') {
      console.log(regionCode);
    } else {
      console.log('Не удалось определить код региона Беларуси');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });