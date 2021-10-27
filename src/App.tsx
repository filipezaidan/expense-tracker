import {useState} from 'react'

import * as C from './App.styles';
import { Item } from './types/item';
import { Categorie } from './types/categories';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth } from './data/helpers/dateFilter';

const App = () => {
  const [list, setList] =  useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Área e informações */}
        {/* Área de inserção */}
        {/* Tabela de itens */}

      </C.Body>
    </C.Container>
  );
}


export default App;
 