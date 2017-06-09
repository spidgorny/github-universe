AFRAME.registerComponent('breathe', {
	schema: {
		speed: {type: 'number', default: 1}
	},
	init: function () {
		console.log(this.el);
		this.mesh = this.el.getObject3D('mesh');
		console.log(this.mesh);
		this.original = this.mesh.scale;

		// this.el.setAttribute('scale', {
		//	x: 1, y: 2, z: 3,
		// });
	},
	update: function (oldData) {
	},
	tick: function (time, timeDelta) {
		let pi = Math.PI;
		let subtime = (time / 1000);
		this.mesh.scale.x =
			this.original.x + Math.sin(subtime * 1 + 0.0 * pi) / 500;
		this.mesh.scale.y =
			this.original.y + Math.sin(subtime / 2 + 0.3 * pi) / 700;
		this.mesh.scale.z =
			this.original.z + Math.sin(subtime / 3 + 0.6 * pi) / 1000;
		//console.log(time, timeDelta);
	},
	remove: function () {
	}
});
