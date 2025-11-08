import { TaskProps } from "@/app";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./ui/button";

export default function Task({
  id,
  date,
  count,
  text,
  tasks,
  setTasks,
}: {
  id: number;
  date: string;
  count: number;
  text: string;
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
}) {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [dateDone, setDateDone] = useState<Date | null>(null);

  const handleDone = () => {
    setIsDone(!isDone);
    if (!isDone) {
      setDateDone(new Date());
    } else {
      setDateDone(null);
    }
  };

  const deleteTask = () => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View key={id} style={styles.taskContainer}>
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginRight: 4, color: "grey" }}>
                {date.split(" ")[1] + " PM"}
              </Text>
              <Text style={{ color: "blue", textDecorationLine: "underline" }}>
                Task no {count}
              </Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "purple" }}>
              {text}
            </Text>
          </View>
          {isDone && (
            <Text style={{ color: "green" }}>
              Done at {dateDone!.toLocaleString()}
            </Text>
          )}
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Button text={isDone ? "Undone" : "Done"} onPress={handleDone} />
        <View style={{ height: 4 }} />
        <Button
          backgroundColor="red"
          text="Delete"
          onPress={() => deleteTask()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    height: 130,
    borderRadius: 10,
    justifyContent: "space-between",
  },
});
