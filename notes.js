import fs from "fs";
import chalk from "chalk";

export const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch (exception) {
        return [];
    }
}

export const saveNotes = notes => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

export const addNote = (title, description) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if (!duplicateNote) {
        notes.push({title, description});
        saveNotes(notes);
        console.log(chalk.bold.green('Note added'));
    } else {
        console.log(chalk.bold.red('Note already taken'));
    }
}

export const removeNote = title => {
    const notes = loadNotes();
    const newNotes = notes.filter(note => note.title.toLowerCase() !== title.toLowerCase());
    if (newNotes.length !== notes.length) {
        saveNotes(newNotes);
        console.log(chalk.bold.green('Note removed'));
    } else {
        console.log(chalk.bold.red('No note found'));
    }
}

export const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.yellow('Your notes'));
    notes.forEach(note => console.log(note.title));
}

export const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find(note => note.title.toLowerCase() === title.toLowerCase());
    if (noteToRead) {
        console.log(chalk.bold.green(noteToRead.title));
        console.log(chalk.bold.blue(noteToRead.description));
    } else {
        console.log(chalk.bold.red('Note not found'));
    }
}
