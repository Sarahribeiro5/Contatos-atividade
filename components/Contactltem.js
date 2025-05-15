 import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ContactItem({ contact, onEdit, onDelete }) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>
      <View style={styles.actions}>
        <Pressable onPress={onEdit} style={styles.editBtn}>
          <Text style={{ color: "#fff" }}>Editar</Text>
        </Pressable>
        <Pressable onPress={onDelete} style={styles.deleteBtn}>
          <Text style={{ color: "#fff" }}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  phone: {
    color: "#555",
  },
  actions: {
    flexDirection: "row",
    gap: 8,
  },
  editBtn: {
    backgroundColor: "#6200ee",
    padding: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  deleteBtn: {
    backgroundColor: "#d32f2f",
    padding: 6,
    borderRadius: 6,
  },
});