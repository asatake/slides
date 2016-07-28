/// <reference path="./typings/index.d.ts" />
// threejsの初期化
class drawing{
    public scene: THREE.Scene;
    public renderer: THREE.WebGLRenderer;
    public camera: THREE.PerspectiveCamera;
    public light: THREE.AmbientLight;
    public dlight: THREE.DirectionalLight;
    public canvasFrame: any;
    public width = window.innerWidth;
    public height = window.innerHeight;

    // コンストラクタ
    constructor(){
        this.init();
        this.initCamera();
        this.initLight();
    }
    // threejsの初期化
    public init(): void{
        this.canvasFrame = document.getElementById('canvas_frame');
        this.renderer = new THREE.WebGLRenderer();
        this.scene = new THREE.Scene();

        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xffffff, 1.0);
        this.canvasFrame.appendChild(this.renderer.domElement);
    }

    // カメラの初期化
    public initCamera(): void{
        this.camera = new THREE.PerspectiveCamera(30, this.width / this.height, 0.1, 5000);
        this.camera.position.set(0, 0, 1000);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    }

    // 光源の初期化
    public initLight(): void{
        this.light= new THREE.AmbientLight(0x555555);
        this.dlight = new THREE.DirectionalLight(0xffffff);
        this.dlight.position.set(-1, 1, 1).normalize();
        this.scene.add(this.light);
        this.scene.add(this.dlight);
    }

    // リサイズの設定
    public onWindowResize(): void{
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
    }

    // 球体の描画関数
    public sphereMesh(x: number, y: number, z: number, size: number, color: any):void{
        var geometry = new THREE.SphereGeometry(size, 20, 20);
        var material = new THREE.MeshLambertMaterial({color: color});
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.scene.add(mesh);
    }

    // 全体の描画
    public render(): void{
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}

var d: any = new drawing;
d.sphereMesh(0, 0, 0, 100, 0x990033);
d.render();
