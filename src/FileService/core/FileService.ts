import {
	IFileService,
	File,
	UploadedFile,
	IStorageRepository,
} from "./IFileService";

export class FileService implements IFileService {
	constructor(private readonly _storageRepository: IStorageRepository) {}

	async getFile(url: string): Promise<File> {
		const file = await this._storageRepository.getFileByUrl(url);

		return file as File;
	}

	async uploadFile(file: File): Promise<UploadedFile> {
		const url = await this._storageRepository.save(file);

		return {
			url,
		};
	}
}
