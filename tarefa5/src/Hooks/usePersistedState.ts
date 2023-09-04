export const ChangeTheme = (theme: string) => {
    if(theme === "dark") {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
        return "light"
    } else {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
        return "dark"
    }
}

export const SearchTheme = () => {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
        return "dark"
      } else {
        document.documentElement.classList.remove('dark')
        return "light"
      }
}