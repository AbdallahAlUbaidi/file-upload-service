export type File = {
	name: string;
};

export type UploadedFile = {
	url: string;
};

export interface IFileService {
	uploadFile(file: File): Promise<UploadedFile>;
	getFile(url: string): Promise<File>;
}

export interface IStorageRepository {
	save(file: File): Promise<string>;
	getFileByUrl(url: string): Promise<File | null>;
}
