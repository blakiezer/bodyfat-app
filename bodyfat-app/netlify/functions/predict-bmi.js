exports.handler = async (event) => {
    const { weight, height, age, gender } = JSON.parse(event.body);
    const bmi = weight / (height ** 2);
    const bodyFat = (1.20 * bmi) + (0.23 * age) - (gender === 'male' ? 16.2 : 5.4);
    return {
      statusCode: 200,
      body: JSON.stringify({ bodyFat: bodyFat.toFixed(1) })
    };
  };