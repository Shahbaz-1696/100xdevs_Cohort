import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: []
});

export const titleAtom = atom({
    key: "titleAtom",
    default: "",
});

export const descriptionAtom = atom({
    key: "descriptionAtom",
    default: "",
});

export const filterAtom = atom({
    key: "filterAtom",
    default: "",
});

export const filteredSelector = selector({
    key: "filteredSelector",
    get: ({get}) => {
        const allTodos = get(todoAtom);
        const filterBy = get(filterAtom);
        if(!filterBy){
            return allTodos;
        } else {
            const filteredTodos = allTodos.filter(todo => todo.title.includes(filterBy) || todo.description.includes(filterBy));
            return filteredTodos;
        }
    }
})