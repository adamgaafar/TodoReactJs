import { component$ } from "@builder.io/qwik";

const cards = [
  {
    title: "Task Creation",
    desc: "Add new tasks with titles, deadlines, and priorities.",
  },
  {
    title: "Task Categorization",
    desc: "Organize tasks by categories or projects for better management.",
  },
  {
    title: "Due Date Reminders",
    desc: "Receive alerts for upcoming task deadlines.",
  },
  {
    title: "Task Prioritization",
    desc: "Set task priorities to focus on what matters most.",
  },
  {
    title: "Progress Tracking",
    desc: "Monitor completion status of tasks with visual indicators.",
  },
  {
    title: "Collaborative Tasks:",
    desc: "Share tasks with others and collaborate in real-time.",
  },
];

export const Card = component$(() => {
  return (
    <div class="grid grid-cols-2 gap-4  p-4 md:grid-cols-3  justify-items-center ">
      {cards.map((card, index) => (
        <div
          key={index}
          class="block  w-5/6 rounded-lg border border-gray-200 bg-white p-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <h5 class="mb-1 border-b text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <p class="text-xs font-normal text-gray-700 dark:text-gray-400">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
});
