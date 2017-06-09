AFRAME.registerComponent('orbit', {
    schema: {
        speed: { type: 'number', default: 1 },
        radius: { type: 'number', default: 1 }
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
        var subtime = (time / 1000);
        var omega = 1 / this.data.speed;
        var x = this.data.radius *
            Math.sin(subtime * 2 * Math.PI * omega);
        var z = this.data.radius *
            Math.cos(subtime * 2 * Math.PI * omega);
        this.el.setAttribute('position', {
            x: x, z: z,
        });
        var newSec = Math.round(subtime) != this.second;
        if (newSec) {
            console.log(this.data, x, z);
        }
        this.second = Math.round(subtime);
    },
    remove: function () {
        console.log('remove');
    }
});
