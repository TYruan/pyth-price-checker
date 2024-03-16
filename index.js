const axios = require('axios');

async function getPythPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=pyth-network&vs_currencies=usd');
    const pythPrice = response.data['pyth-network'].usd;
    return pythPrice;
  } catch (error) {
    console.error('Error retrieving PYTH price:', error);
    throw error;
  }
}

module.exports = {
  getPythPrice
};
