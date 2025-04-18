const pkg = Deno.args[0];

try {
	const taskModule = await import(`../tasks/${pkg}.ts`);
	await taskModule.default();

	console.log(`✅ Successfully completed task: ${pkg}`);
} catch (taskError) {
	const errorMessage = taskError instanceof Error
		? taskError.message
		: String(taskError);
	console.error(`❌ Error in task ${pkg}:\n`, errorMessage);
}
