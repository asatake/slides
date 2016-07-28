/// <reference path="./typings/index.d.ts" />
// threejsの初期化
var drawing = (function () {
    // コンストラクタ
    function drawing() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.init();
        this.initCamera();
        this.initLight();
    }
    // threejsの初期化
    drawing.prototype.init = function () {
        this.canvasFrame = document.getElementById('canvas_frame');
        this.renderer = new THREE.WebGLRenderer();
        this.scene = new THREE.Scene();
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xffffff, 1.0);
        this.canvasFrame.appendChild(this.renderer.domElement);
    };
    // カメラの初期化
    drawing.prototype.initCamera = function () {
        this.camera = new THREE.PerspectiveCamera(30, this.width / this.height, 0.1, 5000);
        this.camera.position.set(0, 0, 1000);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    };
    // 光源の初期化
    drawing.prototype.initLight = function () {
        this.light = new THREE.AmbientLight(0x555555);
        this.dlight = new THREE.DirectionalLight(0xffffff);
        this.dlight.position.set(-1, 1, 1).normalize();
        this.scene.add(this.light);
        this.scene.add(this.dlight);
    };
    // リサイズの設定
    drawing.prototype.onWindowResize = function () {
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
    };
    // 球体の描画関数
    drawing.prototype.sphereMesh = function (x, y, z, size, color) {
        var geometry = new THREE.SphereGeometry(size, 20, 20);
        var material = new THREE.MeshLambertMaterial({ color: color });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.scene.add(mesh);
    };
    // 全体の描画
    drawing.prototype.render = function () {
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    };
    return drawing;
}());
var d = new drawing;
d.sphereMesh(0, 0, 0, 100, 0x990033);
d.render();
