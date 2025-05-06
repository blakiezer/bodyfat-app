exports.handler = async (event) => {
    const { waist, neck, height, gender } = JSON.parse(event.body);
    let bodyFat;
    if (gender === 'male') {
      bodyFat = 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
      bodyFat = 163.203 * Math.log10(waist + neck - height) - 97.684 * Math.log10(height) - 78.387;
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ bodyFat: bodyFat.toFixed(1) })
    };
  };