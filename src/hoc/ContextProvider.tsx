import React, {createContext, FC, PropsWithChildren, useState} from 'react';

interface IProps extends PropsWithChildren{

}


const Context = createContext(null)
const ContextProvider:FC<IProps> = ({children}) => {

    const [theme, setTheme] = useState<boolean>(false);

    return (
        <div>
            <Context.Provider value={{theme,setTheme:()=> setTheme(prevState => !prevState)}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
}