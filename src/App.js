import './App.css';
import Content from './Content';
import {useContext} from 'react'
import {ThemeProvider, ThemeContext} from './ThemeContext';
import React from 'react';



function App() {

  const context = useContext(ThemeContext)

  console.log(context);
  return (
      <div>
          <button onClick={context.handleToggle}>Toggle</button>
          <Content/>
      </div>
  );
}

export default App;



//  Tóm tắt về useContext
// 
// 
// 1. Tạo 1 hàm ContextProvider có thể nhận các component chirldren
// 
// 2. Trong hàm ContextProvider này tạo context bằng createContext và truyền value cho children (value có thể là object, hàm, chuổi.....)
// 
//         <ThemeContext.Provider value={obValue}>
//            {children}
//         </ThemeContext.Provider>
// 
// 3. Trong các Component của children sử dụng useContext để nhận context của component cha và đem ra sử dụng
// 
// 
// 
// (Thường hàm ContextProvider ôm App trong Index.js)
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
