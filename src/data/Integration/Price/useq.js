export default {
  description: [``, ``, ``],
  label: 'price',
  example: `Coming soon!`,
  contractName: 'TODO',
  dataFormat: {
    description: `The return value is a bytes32 that can be converted directly to uint256 . Note that to maintain arithmetic precision, the value is multiplied by 10^18 .`,
  },
  keyFormat: {
    crypto: {
      header: 'List of Available Pairs',
      description:
        'The following pairs are available for US Equity trading data.',
      keys: [
        ['AAPL/USD', '1 Apple Stock in USD (times by 10^18 )', ''],
        ['AMZN/USD', '1 Amazon Stock in USD (times by 10^18 )', ''],
        ['FB/USD', '1 Facebook Stock in USD (times by 10^18 )', ''],
        ['GOOG/USD', '1 Alphabet Stock in USD (times by 10^18 )', ''],
        ['INTC/USD', '1 Intel Stock in USD (times by 10^18 )', ''],
        ['MSFT/USD', '1 Microsoft Stock in USD (times by 10^18 )', ''],
        ['NFLX/USD', '1 Netflix Stock in USD (times by 10^18 )', ''],
        ['NVDA/USD', '1 Nvidia Stock in USD (times by 10^18 )', ''],
        ['ORCL/USD', '1 Oracle Stock in USD (times by 10^18 )', ''],
        ['SBUX/USD', '1 Starbucks Stock in USD (times by 10^18 )', ''],
      ],
    },
  },
  solidity: [``, ``, ``],
}
