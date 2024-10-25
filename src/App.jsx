import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import CounterButton from "./components/CounterButton";
import { useCallback, useState } from "react";

function App() {
  const [strState, setStrState] = useState("");
  const [counter, setCounter] = useState(0);

  const callbackFuncStr = useCallback((value) => {
    setStrState(value);
  }, []);

  const increaseCounter = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  const names = [
    "Alex",
    "Max",
    "Sasha",
    "Dima",
    "Olga",
    "Nina",
    "Igor",
    "Masha",
    "Ivan",
    "Anna",
    "Andrey",
    "Oksana",
    "Sergey",
    "Vera",
    "Elena",
    "Pavel",
    "Maria",
    "Vladimir",
    "Lena",
    "Natalia",
    "Artem",
    "Polina",
    "Viktor",
    "Galina",
    "Denis",
    "Irina",
    "Roman",
    "Svetlana",
    "Yulia",
    "Nikolay",
    "Kirill",
    "Ekaterina",
    "Boris",
    "Tatiana",
    "Valery",
    "Lyudmila",
    "Konstantin",
    "Oleg",
    "Marina",
    "Anton",
    "Yaroslav",
    "Inna",
    "Vasily",
    "Larisa",
    "Gleb",
    "Diana",
    "Alexander",
    "Viktoria",
    "Stanislav",
    "Nadezhda",
    "Timur",
    "Alina",
    "Evgeny",
    "Tamara",
    "Leonid",
    "Anastasia",
    "Daniil",
    "Margarita",
    "Valentina",
    "Mikhail",
    "Grigory",
    "Sofia",
    "Fedor",
    "Veronika",
    "Bogdan",
    "Angelina",
    "Stepan",
    "Lyubov",
    "Artur",
    "Lilia",
    "Ilya",
    "Milana",
    "Matvey",
    "Zhanna",
    "Ruslan",
    "Zoya",
    "Eduard",
    "Kristina",
    "Vadim",
    "Karina",
    "Vyacheslav",
    "Regina",
    "German",
    "Yana",
    "Semyon",
    "Violetta",
    "Nazar",
    "Kira",
    "Mark",
    "Elizaveta",
    "Rodion",
    "Alisa",
    "Vladislav",
    "Eva",
    "Seva",
    "Emilia",
    "Taras",
    "Snezana",
    "Egor",
    "Olena",
  ];

  return (
    <>
      <SearchInput strState={strState} callbackFuncStr={callbackFuncStr} />
      <CounterButton counter={counter} increaseCounter={increaseCounter} />
      <ItemList names={names} strState={strState} />
    </>
  );
}

export default App;
