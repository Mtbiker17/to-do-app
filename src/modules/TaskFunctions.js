const createTask = (title, description, dueDate, priority, notes) => {

    const setTitle = () => title;
    const setDescription = () => {
        if (description === '') {
            alert('Title cannot be empty');
            return;
        }
        if (description.length > 50) {
            alert('Max number of characters reached');
            return
        }
        return description;
    }
    const setDueDate = () => dueDate;
    const setPriority = () => priority;
    const setNotes = () => {
        if (notes.length > 250) {
            alert('Max number of characters reached')
            return;
        }
    }
    return { setTitle, setDescription, setDueDate, setPriority, setNotes }
}

export { createTask };
