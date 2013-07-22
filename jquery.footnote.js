(function($) {
	$.fn.footnote = function(options) {
		// default settings
		var settings = $.extend({
			// class for the footnotes ordered list
			footnoteListClass: "footnotes",
			// time for scroll animation in ms
			scrollTime: 300,
			// callback function for scroll animation. Receives the jQuery element of
			// corresponding footnote list item. Eventually highlight it. Default is
			// the empty function, i.e., do nothing.
			scrollCallback: function(footnote) {}
		}, options);

		// maintain chainability
		return this.each(function() {
			// get footnotes
			var container = $(this);
			var footnotes = $(".footnote", container);
			
			// append list to the end of the container
			var footnotesList = $('<ol class="' + settings.footnoteListClass + '"></ol>');
			container.append(footnotesList);

			// "iterate" over all footnotes
			footnotes.each(function(index, value) {
				// extract text and append to footnotes list
				var idx = index + 1;
				var footnoteHash = "footnote" + idx;
				var theFootnote = $('<li><a id="' + footnoteHash + '">' + $(this).text() + '</a></li>');
				footnotesList.append(theFootnote);

				// replace text with footnote number
				$(this).html("<sup>" + (idx) + "</sup>");

				// smooth scroll to footnote
				$(this).click(function() {
					$(document.body).animate(
						{'scrollTop': $('#' + footnoteHash).offset().top}, 
						settings.scrollTime, 
						function() { settings.scrollCallback(theFootnote); });
				});
			});
		});
	};
})(jQuery);