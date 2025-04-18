async function runAllTasks() {
  const taskEntries = [...Deno.readDirSync("./tasks")];

  console.log(`Found ${taskEntries.length} tasks to run`);

  for (const entry of taskEntries) {
    if (entry.isFile && entry.name.endsWith(".ts")) {
      console.log(`Running task: ${entry.name}`);

      try {
        const taskModule = await import(`../tasks/${entry.name}`);
        await taskModule.default();

        console.log(`✅ Successfully completed task: ${entry.name}`);
      } catch (taskError) {
        const errorMessage = taskError instanceof Error
          ? taskError.message
          : String(taskError);
        console.error(`❌ Error in task ${entry.name}:\n`, errorMessage);
      }

      console.log("-".repeat(40));
    }
  }

  console.log("All tasks execution attempts completed!");
}

await runAllTasks();
