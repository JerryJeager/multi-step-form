import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="bg-blue-100 h-[100vh] p-[40px]">
        <div className="bg-white rounded-lg overflow-hidden h-[80vh] w-[70%] flex gap-16 mx-auto p-4 pr-8 ">
            <header className="w-[30%] h-[100%] bg-[url('/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-center bg-cover rounded-lg px-4">
                <nav className="flex flex-col mt-6 gap-6">
                    <div className="flex gap-4">
                        <div className="p-[20px] w-[10px] h-[10px] flex justify-center items-center rounded-full border-white border-2 text-white">1</div>
                        <div>
                            <p className="text-sm text-cool-gray">STEP 1</p>
                            <p className="text-white">YOUR INFO</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-[20px] w-[10px] h-[10px] flex justify-center items-center rounded-full border-white border-2 text-white">2</div>
                        <div>
                            <p className="text-sm text-cool-gray">STEP 2</p>
                            <p className="text-white">SELECT PLAN</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-[20px] w-[10px] h-[10px] flex justify-center items-center rounded-full border-white border-2 text-white">3</div>
                        <div>
                            <p className="text-sm text-cool-gray">STEP 3</p>
                            <p className="text-white">ADD-ONS</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-[20px] w-[10px] h-[10px] flex justify-center items-center rounded-full border-white border-2 text-white">4</div>
                        <div>
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