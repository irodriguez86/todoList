export default class TodoStorage {
    static elementList = [];

    static add(elem) {
        TodoStorage.elementList.unshift(elem);
        console.log(TodoStorage.elementList);

        return true;
    }

    remove() {

    }
}