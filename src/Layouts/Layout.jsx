import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="bg-blue-100 h-[100vh] md:p-[40px]">
        <div className="md:bg-white md:rounded-lg overflow-hidden h-[100vh] md:h-[100%] w-[100%] md:w-[70%] flex flex-col md:flex-row md:gap-16 mx-auto md:p-4 md:pr-8 ">
            <header className="w-[100%] md:w-[30%] h-[160px] md:h-[100%] bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-white bg-no-repeat bg-center bg-cover md:rounded-lg px-4 flex justify-center items-center md:items-start md:justify-start">
                <nav className="flex md:flex-col mt-6 gap-6">
                    <div className="flex gap-4">
                        <div className="p-[15px] w-[10px] h-[10px] flex justify-center items-center rounded-full border-white border-2 text-white">1</div>
                        <div className="hidden md:block">
                            <p className="text-sm text-cool-gray">STEP 1</p>
                            <p className="text-white">YOUR INFO</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-[15px] w-[10px] h-[10px] flex justify-center items-center rounded-full border-white border-2 text-white">2</div>
                        <div className="hidden md:block">
                            <p className="text-sm text-cool-gray">STEP 2</p>
                            <p className="text-white">SELECT PLAN</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-[15px] w-[10px] h-[10px] flex justify-center items-center rounded-full border-white border-2 text-white">3</div>
                        <div className="hidden md:block">
                            <p className="text-sm text-cool-gray">STEP 3</p>
                            <p className="text-white">ADD-ONS</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-[15px] w-[10px] h-[10px] flex justify-center items-center rounded-full border-white border-2 text-white">4</div>
                        <div className="hidden md:block">
                            <p className="text-sm text-cool-gray">STEP 4</p>
                            <p className="text-white">SUMMARY</p>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
               <Outlet />
            </main>
        </div>
    </div>
  )
}

export default Layout