import { collection, getFirestore } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

import base from "./config";

import type { IGame } from "./types";

// Firestore ref
const db = getFirestore(base);

// Games collection reference
const games = collection(db, "games");

// Creating a new game
const newGame = async (data: IGame) => {
  try {
    const res = await addDoc(games, data);
    return { success: true, id: res.id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Getting game
const getGame = async (data: IGame) => {
  try {
    const res = await addDoc(games, data);
    return { success: true, id: res.id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Updating game data
const updateGame = async (data: IGame) => {
  try {
    const res = await addDoc(games, data);
    return { success: true, id: res.id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Delete game
const deleteGame = async (data: IGame) => {
  try {
    const res = await addDoc(games, data);
    return { success: true, id: res.id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export {newGame}
