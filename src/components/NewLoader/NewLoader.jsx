import React from 'react'
import Sketch from 'react-p5'

class NewLoader extends React.Component {
	y = 0

	width = 400

	height = 400

	angle = 0

	grid = 24

	newGrid

	cols = 400 % 24

	rows = 400 % 24

	c1

	ma

	maxD

	// eslint-disable-next-line class-methods-use-this
	make2DArray(cols, rows) {
		const arr = new Array(cols)
		// eslint-disable-next-line no-plusplus
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(rows)
		}
		return arr
	}

	render() {
		return (
			<div>
				<Sketch
					setup={(p5, parentRef) => {
						p5.createCanvas(400, 400, p5.WEBGL).parent(parentRef)
						this.ma = p5.atan(1 / p5.sqrt(2))
						this.maxD = p5.dist(
							0,
							0,
							this.width / 2,
							this.height / 2
						)
						this.newGrid = this.make2DArray(this.cols, this.rows)
					}}
					draw={(p5) => {
						p5.colorMode(p5.RGB)
						p5.background(300)
						p5.colorMode(p5.HSB)

						p5.ortho(
							-this.width,
							this.width,
							this.height,
							-this.height,
							0,
							700
						)

						p5.rotateX(this.ma) // rotation about the horizontal axis
						p5.rotateY(p5.QUARTER_PI) // rotation about the vertical axis

						p5.pointLight(255, 255, 255, 0, 0, 525)
						p5.pointLight(100, 50, 100, -300, -300, this.height / 2)
						p5.directionalLight(150, 150, 150, -0.8, -0.8, 0)
						p5.directionalLight(150, 150, 150, -0.4, -0.4, 0)

						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						let offset = 0

						// calculate heights of all blocks in the grid
						// eslint-disable-next-line no-plusplus
						for (let z = 0; z < this.cols; z++) {
							// eslint-disable-next-line no-plusplus
							for (let x = 0; x < this.rows; x++) {
								const d = p5.dist(
									(x + 1) * this.grid,
									(z + 1) * this.grid,
									this.width / 2,
									this.height / 2
								)
								// eslint-disable-next-line no-shadow
								const offset = p5.map(
									d,
									0,
									this.maxD,
									-p5.PI,
									p5.PI
								)
								const a = this.angle + offset
								const h = p5.floor(
									p5.map(p5.sin(a), -1, 1, 100, 300)
								) // floor() makes the animation faster
								this.newGrid[x][z] = h
							}
							offset += 0.2
						}
						this.angle -= 0.1

						// eslint-disable-next-line no-plusplus
						for (let z = 0; z < this.cols; z++) {
							// eslint-disable-next-line no-plusplus
							for (let x = 0; x < this.rows; x++) {
								p5.push()
								p5.translate(
									x * this.grid - this.width / 2,
									0,
									z * this.grid - this.height / 2
								)
								// now using HSB colorMode - max values of 360, 100, 100, 1 for HSBA
								this.c1 = p5.map(
									this.newGrid[x][z],
									100,
									300,
									0,
									100
								)
								p5.ambientMaterial(210, this.c1, 100, 1)
								p5.box(this.grid, this.newGrid[x][z], this.grid)
								p5.pop()
							}
						}
					}}
				/>
			</div>
		)
	}
}
export default NewLoader
