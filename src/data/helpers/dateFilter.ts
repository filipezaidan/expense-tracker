import { Item } from '../../types/item';

export const getCurrentMonth = () => {
    let now = new Date();

    return `${now.getFullYear()}-${now.getMonth()+1}`
}


// export const filterListByMonth = (list: Item[], date: string): Item[] => {
//     let newList: Item[] = [];
//     let [year, month] = date.split('-');

//     for(let i in list){
//         list[i].date.getFullYear() === parseInt(year) &&
//         list[i].data.getMonth() + 1 === parseJsonConfigFileContent(month)
//         }
//     return new newList;
// })