// Получение региона
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const country = data.country;
    const region = data.region;
    if (country === 'BY') {
      console.log(region);
    } else {
      console.log('Не удалось определить регион Беларуси');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
