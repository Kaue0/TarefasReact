import { useContext } from "react";
import Switch from "react-switch";
import ThemeContext from "../Contexts/ThemeContext";
import {BsFillSunFill} from 'react-icons/bs';
import {BsFillMoonFill} from 'react-icons/bs';


const PageContent = () => {

    const  {theme, ChangeTheme: SetTheme} = useContext(ThemeContext);

    return (
        <>
        <div className="h-screen">
            <header className=" h-[12%] bg-violet-400 text-white flex items-center py-0 px-8 dark:bg-zinc-950 transition-all delay-100 justify-between">
            

                <p className="font-sans pr-6">Para mudar o tema, clique no switch </p> 
                <Switch className="flex items-center justify-center self-center place-content-center"
                    checked={theme === 'dark' ? true : false}
                    onChange={() => SetTheme(theme === 'light' ? 'dark' : 'light')}
                    checkedIcon={true}
                    uncheckedIcon={true}
                    height={15}
                    width={60}
                    handleDiameter={30}
                    offColor="#7c3aed"
                    onColor="#444554"
                    onHandleColor="#a78bfa"
                    uncheckedHandleIcon={<BsFillSunFill className="text-black inline relative pl-1.5" size={24}/>}
                    checkedHandleIcon={<BsFillMoonFill className="text-black inline relative pl-1.5" size={26}/>}
                    activeBoxShadow="0 0 2px 3px #4f46e5"
                />
                
            </header>

            <main className="h-[88%] bg-violet-300 dark:bg-zinc-900 transition-all delay-100"> 
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-gray-100 transition-all delay-100"> 
                        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </h1>
                </div>
            </main>
        </div>
        </>
        )
    }

export { PageContent }