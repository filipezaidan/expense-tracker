import { Item } from '../../types/item';
import { formatDate } from '../../data/helpers/dateFilter';
import { categories } from '../../data/categories';
import * as C from './styles';

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return(
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R$ {item.value}</C.TableColumn>

        </C.TableLine>
    );
}