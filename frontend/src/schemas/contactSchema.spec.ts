import { contactSchema } from "./contactSchema";

describe("contactSchema", () => {
	const validData = {
		name: "Juan",
		email: "juan@test.com",
		phone: "+56912341234",
		message: "Hola mundo",
	};

	it("passes with valid data", () => {
		const result = contactSchema.safeParse(validData);

		expect(result.success).toBe(true);
	});

	it("fails if name is too short", () => {
		const result = contactSchema.safeParse({
			...validData,
			name: "J",
		});

		expect(result.success).toBe(false);
	});

	it("fails if email is empty", () => {
		const result = contactSchema.safeParse({
			...validData,
			email: "",
		});

		expect(result.success).toBe(false);
	});

	it("fails if email format is invalid", () => {
		const result = contactSchema.safeParse({
			...validData,
			email: "juan@bad",
		});

		expect(result.success).toBe(false);
	});

	it("passes if phone is omitted", () => {
		const result = contactSchema.safeParse({
			name: "Juan",
			email: "juan@test.com",
			message: "Hola mundo",
		});

		expect(result.success).toBe(true);
	});

	it("fails if phone format is invalid", () => {
		const result = contactSchema.safeParse({
			...validData,
			phone: "123456",
		});

		expect(result.success).toBe(false);
	});

	it("fails if message is too short", () => {
		const result = contactSchema.safeParse({
			...validData,
			message: "Hi",
		});

		expect(result.success).toBe(false);
	});
});
