import { TaskProps } from "@/app/index";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./ui/button";

export default function Header({
  tasks,
  setTasks,
}: {
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
}) {
  const [date, setDate] = useState(new Date());
  const [inputTask, setInputTask] = useState<string>("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text>{date.toLocaleString()}</Text>
      </View>
      <View style={styles.subHeader}>
        <TextInput
          placeholder="New Task..."
          style={styles.input}
          onChangeText={setInputTask}
        />
        <Button
          onPress={() => {
            setTasks([
              ...tasks,
              {
                id: Date.now(),
                date: date.toLocaleString(),
                count: tasks.length + 1,
                text: inputTask,
              },
            ]);
            setInputTask("");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    height: 60,
    width: 300,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 4,
    display: "flex",
    flex: 1,
  },
});
