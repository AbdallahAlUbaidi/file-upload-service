import { IStorageRepository } from "../core/IFileService";

export class FakeStorageRepository implements IStorageRepository {
	private readonly _files: File[];

	constructor() {
		this._files = [];
	}
	async getFileByUrl(url: string): Promise<File | null> {
		const urlParts = url.split("/");
		const fileName = urlParts[urlParts.length - 1];

		const file = this._files.find((f) => f.name === fileName);

		return file || null;
	}

	isEmpty(): boolean {
		return this._files.length === 0;
	}

	async save(file: File): Promise<string> {
		this._files.push(file);

		return `https://example.com/files/${file.name}`;
	}
}
