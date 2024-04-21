const axios = require('axios');
const chalk = require('chalk');

// 查询BTC价格的函数
async function getBTCPrice() {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    const price = response.data.bpi.USD.rate;
    console.log(chalk.green(`当前BTC价格：${price} USD`));
  } catch (error) {
    console.log(chalk.red('获取BTC价格失败'));
    console.error(error);
  }
}

// 导出函数供其他文件使用
module.exports = {
  getBTCPrice
};
