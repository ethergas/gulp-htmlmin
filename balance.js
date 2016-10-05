var commandLineArgs = require('command-line-args');
var API = require('./api.js');
var balanceConfig = require('./balance_config.js');

var cli = commandLineArgs([
	{ name: 'help', alias: 'h', type: Boolean },
	{ name: 'address', type: String },
]);
var cliOptions = cli.parse()

if (cliOptions.help) {
	console.log(cli.getUsage());
} else if (cliOptions.address) {

  API.init(function(err,result){
    API.getUSDBalance(cliOptions.address, balanceConfig.tokenPrices, function(err, result){
      console.log(result);
    });
  });

}
