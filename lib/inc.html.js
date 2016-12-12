const plugin = (plugin, markserv) => includePath => markserv.helpers.readfile(includePath);

module.exports = {
	name: 'markserv-contrib-inc.html',
	plugin
};
