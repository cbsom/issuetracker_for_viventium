import axios from "axios";

/**
 * Gets new item and set it with a unique id.
 * @param {[{id:Number, title:string, text:string, tags:[String]}]} itemList
 */
export function getNewItem(itemList) {
    //find the maximum id in the list
    const maxId = Math.max(...itemList.map((i) => i.id)) || 0;
    const newItem = { id: maxId + 1, title: "", text: "", tags: [] };
    return newItem;
}

/**
 * @returns {[id:number, title:string, text:string, tags:[string]]}
 */
export async function getInitialData() {
    try {
        //Sh... Don't tell anyone that we are using mock static data
        const response = await axios.get("/initialData.json");
        return response.data.items;
    } catch (err) {
        console.error(err);
    }
}
