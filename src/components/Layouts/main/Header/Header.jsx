import logo from "../../../../assets/image/logo.webp"

export function Header(){
    return(
        <div>
                <header className="flex justify-between px-10 items-center py-4 bg-sky-900">
                    
                       <img className="h-10" src={logo} alt="" />

                        <div className="flex items-center gap-2 text-white">
                            <box-icon name='user-circle' color='#fff'></box-icon>
                            <p>Olá Neto</p>
                        </div>
                </header>
                

          
        </div>
    )
}