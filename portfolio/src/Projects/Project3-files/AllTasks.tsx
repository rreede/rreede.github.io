export default function AllTasks({ allAvailableTasks }: { allAvailableTasks: any[] }) {
  return (
    <div>
      {allAvailableTasks.map((task: any, index: number) => (
        <div key={index}>
          <div className="task-container">
          <h3><br/><strong>{task.name}</strong></h3>
          <p>{task.description}</p>
          {/* If the ID is a timestamp, create a Date object from it */}
          <p><strong>Task date:</strong> <br/>{new Date(task.id).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}