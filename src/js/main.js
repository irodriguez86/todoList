import TodoStorage from './storage';

export default class Main {
    constructor() {
        this.taskElement = document.getElementById('task-name');

        this.addElement = this.addElement.bind(this);
    }

    init() {
        // Bind add element functionality
        document.getElementById('add-task-link').addEventListener('click', this.addElement);

        return true;
    }

    addElement() {
        TodoStorage.add(this.taskElement.value);

        return true;
    }

    removeElement() {

    }
}