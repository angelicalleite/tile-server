// Set file with some external configurations: 
var userConfig = require('./config.json');

var Windshaft = require(userConfig.windshaft.libpath);
var _ = require(userConfig.windshaft.underscorepath)._;
var fs = require('fs');

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
			host:userConfig.database.host, 
			port:userConfig.database.port
		},
                styles: {
			point: cartoCss
		}, 
		mapnik_version:userConfig.mapnik.version
	},
 	//see grainstore npm for other options
        redis: {
		host: userConfig.redis.host,
		port: userConfig.redis.port
	},
        mapnik: {
		metatile: userConfig.mapnik.metatile,
		bufferSize: userConfig.mapnik.bufferSize
	},
       	renderCache: {
		ttl: 60000
	} // Segundos
    };

// Start tile server on port 8088
var ws = new Windshaft.Server(config);
ws.listen(userConfig.windshaft.port);
console.log("Map tiles are now being served out of:" + userConfig.windshaft.host + ":" + userConfig.windshaft.port + "/" + config.base_url + '/:z/:x/:y.*');

