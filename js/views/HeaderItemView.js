'use strict';

var
	ko = require('knockout'),
	
	CAbstractHeaderItemView = require('%PathToCoreWebclientModule%/js/views/CHeaderItemView.js'),
	ModulesManager = require('%PathToCoreWebclientModule%/js/ModulesManager.js'),
	AccountList = ModulesManager.run('MailWebclient', 'getAccountList')
;

function CHeaderItemView()
{
	CAbstractHeaderItemView.call(this, '');
	
	this.linkText = ko.computed(function () {
		return AccountList.getDefaultFriendlyName();
	});
}

CHeaderItemView.prototype.ViewTemplate = '%ModuleName%_HeaderItemView';

var HeaderItemView = new CHeaderItemView();

HeaderItemView.allowChangeTitle(true);

module.exports = HeaderItemView;
