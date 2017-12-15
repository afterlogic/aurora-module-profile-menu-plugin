'use strict';

module.exports = function (oAppData) {
	var
		App = require('%PathToCoreWebclientModule%/js/App.js'),

		bNormalUser = App.getUserRole() === window.Enums.UserRole.NormalUser,
		HeaderItemView = null
	;
	
	if (bNormalUser)
	{
		return {
			getHeaderItem: function () {
				if (HeaderItemView === null)
				{
					HeaderItemView = require('modules/%ModuleName%/js/views/HeaderItemView.js');
				}

				return {
					item: HeaderItemView,
					name: 'cutom-tabsbar'
				};
			}
		};
	}
	
	return null;
};
