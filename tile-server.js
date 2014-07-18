// Pass the path to the installed Windshaft library's directory:
var Windshaft = require('/opt/canadensys/Windshaft/lib/windshaft');
var _ = require('/opt/canadensys/Windshaft/node_modules/underscore')._;
var fs = require('fs');
// Set file with some external configurations:
var userConfig = require('./config.json');

// Set style sheet file:
var cartoCss = fs.readFileSync(__dirname + '/carto.css','utf-8');

var cacheFolder = __dirname + '/tile_cache/';

var config = {
        base_url: '/database/:dbname/table/:table',
        base_url_notable: '/database/:dbname',
        req2params: function(req, callback){
        	// no default interactivity. to enable specify the database column you'd like to interact with
                req.params.interactivity = null;

                // this is in case you want to test sql parameters eg ...png?sql=select * from my_table limit 10
                req.params =  _.extend({}, req.params);
                _.extend(req.params, req.query);

                // send the finished req object on
                callback(null,req);
                
		// To enable interactiviy log use:
                //console.log(req.params.interactivity);
        },
       grainstore: {
		datasource: {
			user:userConfig.database.user,
			password:userConfig.database.password, 
			host:'localhost', 
			port: 5432},
                styles: {point: cartoCss}, 
		mapnik_version:'2.1.0'},
 	//see grainstore npm for other options
        redis: {host: 'localhost', port: 6379},
        mapnik: {metatile: 4, bufferSize:64},
       	renderCache: {ttl: 60000} // Segundos
    };

// Start tile server on port 8088
var ws = new Windshaft.Server(config);
ws.listen(8088);
console.log("map tiles are now being served out of: http://localhost:8088" + config.base_url + '/:z/:x/:y.*');

