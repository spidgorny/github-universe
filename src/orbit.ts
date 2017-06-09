AFRAME.registerComponent('orbit', {
	schema: {
		speed: {type: 'number', default: 1},
		radius: {type: 'number', default: 1}
	},
	init: function () {
		console.log('init');
		this.mesh = this.el.getObject3D('mesh');
		this.original = this.mesh.position;
		this.second = null;
	},
	update: function (oldData) {
		console.log('update', this.data);
	},
	tick: function (time, timeDelta) {
		let subtime = (time / 1000);
		let omega = 1 / this.data.speed;
		let x = this.data.radius *
			Math.sin(subtime * 2 * Math.PI * omega);
		let z =	this.data.radius *
			Math.cos(subtime * 2 * Math.PI * omega);
		this.el.setAttribute('position', {
			x: x, z: z,
		});

		let newSec = Math.round(subtime) != this.second;
		if (newSec) {
			console.log(this.data, x, z);
		}
		this.second = Math.round(subtime);
	},
	remove: function () {
		console.log('remove');
	}
});
