export default class Test {
    constructor() {
        this.logMessage = (new Date()).toString();
    }
    log(...messages) {
        for ( const message of messages ) {
            document.write(message);
        }
        document.write('<BR>');
    }

    mierdas(data, overrides) {
        const date = Date.now();

        const {
            omg: isra,
            } = data;

        // debugger;

        return {
            ...data,
            ...overrides,
            createdAt: date,
            updatedAt: date
        }
    }
}