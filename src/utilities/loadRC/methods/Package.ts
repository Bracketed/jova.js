class Method {
	private readonly path: string;

	constructor(path: string) {
		this.path = path;
	}

	public load() {
		console.log(this.path);
	}
}
