/*!
 * pageset.js - Pages settings behaviors
 * Copyright © 2011 by Ingenesis Limited. All rights reserved.
 * Licensed under the GPLv3 {@see license.txt}
 */

jQuery(document).ready( function($) {
	$.template('editor',$('#editor'));
	var editing = false;

	$('#pages a.edit').click(function (e) {
		e.preventDefault();
		var $this = $(this),
			row = $this.parents('tr').hide(),
			name = row.attr('id').substr(5),
			setting = pages[name]?pages[name]:{},
			data = $.extend({id:'edit-'+name+'-page',name:name,classnames:row.attr('class')},setting),
			ui = $.tmpl('editor',data),
			cancel = ui.find('a.cancel');

		$this.cancel = function (e) {
			if (e) e.preventDefault();
			editing = false;
			ui.remove();
			row.fadeIn('fast');
		};
		cancel.click($this.cancel);

		if (editing) editing.cancel(false);
		ui.insertAfter(row);
		editing = $this;
	});

});