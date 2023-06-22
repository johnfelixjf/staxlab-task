const moduleInstruction = {
  description:
    "Welcome to Clenergize! This guide will help you get started with using our software.",
  steps: [
    {
      name: "Installation",
      points: [
        "Download Clenergize from our website or the app store.",
        "Run the installation file and follow the prompts to install the software on your device.",
      ],
    },
    {
      name: "User Account Creation",
      points: [
        "Open Clenergize and click on the 'Sign Up' button.",
        "Fill out the required information to create your user account.",
        "Verify your email address by clicking on the verification link in the email sent to you.",
      ],
    },
    {
      name: "Using Clenergize",
      points: [
        "Once you're logged in, you'll see the dashboard.",
        "From here, you can navigate to different sections of the software, such as 'My Profile', 'Settings', or 'Support'.",
        "Use the menu on the left-hand side of the dashboard to access different features and functions of the software.",
      ],
    },
    {
      name: "Creating a Project",
      points: [
        "Click on the 'New Project' button on the dashboard.",
        "Fill out the project details such as project name, description, and due date.",
        "Click 'Save' to create the project.",
      ],
    },
    {
      name: "Adding Tasks to Your Project",
      points: [
        "Open the project you just created.",
        "Click on the 'Add Task' button.",
        "Fill out the task details such as task name, description, due date, and assignee.",
        "Click 'Save' to add the task to your project.",
      ],
    },
    {
      name: "Tracking Your Progress",
      points: [
        "On the dashboard, you can view your current projects and tasks.",
        "Use the progress bar to track your progress on each task.",
        "Click on the task to view and edit details as necessary.",
        "Congratulations, you're now ready to use [Software Product Name]! If you have any questions or need further assistance, please refer to the support section or contact our customer service team.",
      ],
    },
  ],
};

export default function Instruction() {
  return (
    <div className="w-full h-full flex flex-col gap-y-[10px]">
      <h3 className="text-[#1F2A37] text-[14px] font-bold">
        Module Instruction
      </h3>

      <div className="flex-1 overflow-y-auto text-[13px] text-[#4D5761]">
        <p>{moduleInstruction.description}</p>

        {moduleInstruction.steps.map((step, idx) => {
          return (
            <div key={step.name}>
              <h5 className="font-bold my-[10px]">
                Step {idx + 1}: {step.name}
              </h5>

              <ol className="list-decimal list-outside pl-[20px]">
                {step.points.map((point, idx2) => (
                  <li key={idx2}>{point}</li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
}
