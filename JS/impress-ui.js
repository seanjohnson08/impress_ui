(function()
{
	// This namespace is for any initializations or utility functions
	// - private functions could be listed in this namespace but 
	// - for organizational purposes should be inside the impressUi variable
	var output = $('<div id="impress" data-perspective="500" width="100"/>');
	var frame = $(window.frames['output']);
	$(frame[0].document.body).append(output);
	output.html($('#demo').html());
	$('#demo').remove();
	impress().init();

	var impressUi = window.impressUi = function(){
		// this namespace is all funcitons for impressUi
		// - regardless of public or private

		var newFile = function (){
			alert("Impress-UI is creating a new file. ");
		}

		var openFile = function(){
			alert("Impress-UI is opening a file.");
		}

		var saveFile = function(){
			alert("Imporess-UI is saving a file.");
		}

		// the functions returned here are public 
		// any function not returned is private to this class
		return {
			newFile: newFile,
			openFile: openFile,
			saveFile: saveFile
		};
	}();
})();



