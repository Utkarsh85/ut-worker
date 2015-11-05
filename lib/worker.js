var later = require('later');

var worker = module.exports;

var callbackfunc = function (obj,i) {
	
}
worker.work = function (arr) {
	for(var i=0;i<arr.length;i++)
	{
		(arr[i].type=="every")&&later.setInterval(this.callback.bind(null,arr[i]), later.parse.text(arr[i].schedule));
		(arr[i].type=="once")&&later.setTimeout(this.callback.bind(null,arr[i]), later.parse.text(arr[i].schedule));
		
	}
}

worker.callback= function (task) {

	console.log("Executing: "+task.name);
	task.callback();
	if(task.subtasks)
	{
		worker.work(task.subtasks);
	}
}

