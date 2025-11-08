import Header from "@/components/header";
import Task from "@/components/task";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export interface TaskProps {
  id: number;
  date: string;
  count: number;
  text: string;
}
export default function HomeScreen() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <View style={styles.container}>
      <Header tasks={tasks} setTasks={setTasks} />
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            date={task.date}
            count={task.count}
            text={task.text}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: 300,
    alignSelf: "center",
  },
});
