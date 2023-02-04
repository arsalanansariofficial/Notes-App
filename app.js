import yargs from "yargs";
import {addNote, listNotes, readNote, removeNote} from "./notes.js";

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.description);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title);
    }
});

yargs.parse();
