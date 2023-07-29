import { Scene } from 'phaser';

export class PreloaderScene extends Scene {
    constructor() {
        super('preloader');
    }

    preload(): void {
        this.load.image('acho', 'assets/acho.png');
        this.load.image('ground', 'assets/ground.png');
    }

    create(): void {
        this.scene.start('initial');
    }
}