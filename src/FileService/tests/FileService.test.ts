import { describe, expect, it, beforeEach } from "vitest";
import { IFileService } from "../core/IFileService";
import { FakeStorageRepository } from "../Infrastructure/FakeStorageRepository";

import { FileService } from "../core/FileService";

describe("File service", () => {
	let fakeStorage: FakeStorageRepository;
	let service: IFileService;
	beforeEach(() => {
		fakeStorage = new FakeStorageRepository();
		service = new FileService(fakeStorage);
	});

	it("should save the uploaded file in the storage", async () => {
		//Arrange
		const file = {
			name: "text.txt",
		};

		//Act
		service.uploadFile(file);

		//Assert
		expect(fakeStorage.isEmpty()).toBe(false);
	});

	it("should return the url of the file", async () => {
		//Arrange
		const file = {
			name: "text.txt",
		};

		//Act
		const result = await service.uploadFile(file);

		//Assert
		expect(result.url).toBeDefined();
	});

	it("should be able to get the file through the url", async () => {
		//Arrange
		const file = {
			name: "text.txt",
		};
		const uploadedFile = await service.uploadFile(file);

		//Act
		const result = await service.getFile(uploadedFile.url);

		//Assert
		expect(result).toStrictEqual(file);
	});
});
