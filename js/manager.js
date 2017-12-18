'use strict';

module.exports = function (oAppData) {
	var
		App = require('%PathToCoreWebclientModule%/js/App.js'),

		bNormalUser = App.getUserRole() === window.Enums.UserRole.NormalUser,
		bAdminUser = App.getUserRole() === Enums.UserRole.SuperAdmin,
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
	
	if (bAdminUser)
	{
		return {
			start: function () {
				App.subscribeEvent('AdminPanelWebclient::ShowView::after', function (oParams) {
					if (oParams.Name === 'CSettingsView')
					{
						var oLogout = $('.tabsbar .logout');
						oLogout.removeClass('logout');
						oLogout.css('float', 'right');
					}
				});
			}
		};
	}
	
	return null;
};
