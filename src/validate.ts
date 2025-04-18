import z from 'zod';

// deno-lint-ignore no-explicit-any
export function validateString(str: any) {
	return z.string().parse(str);
}

export function validateMatch(match: RegExpMatchArray | null) {
	if (!match) {
		throw new Error('Unable to parse version');
	}
	return match;
}
