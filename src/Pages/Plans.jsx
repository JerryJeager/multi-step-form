import { useState, useEffect } from 'react'


const Plans = () => {

   const [monthlyBilling, setMonthlyBilling] = useState(true)
   const handleBillingOption = () =>{
    setMonthlyBilling(preValue => !preValue)
   }

  return (
    <div className="mt-8 -translate-y-12 md:-translate-y-0 ">
        <div className=" w-[90%] mx-auto flex flex-col">
            <div className="bg-white rounded-md shadow-md md:shadow-none px-4 py-8">
              <h2 className="text-3xl font-bold text-marine-blue">Select your plan</h2>
              <p className="text-cool-gray">You have the option of monthly or yearly billing.</p>
                <div className="mt-4 flex flex-col md:flex-row md:justify-between gap-4">
                    <div className="flex flex-row md:flex-col gap-4 border-cool-gray border rounded-md hover:border-marine-blue hover:bg-light-gray p-4 w-[100%] md:w-[120px]">
                        <div>
                            <img src="images/icon-arcade.svg" alt="" />
                        </div>
                        <div className="md:mt-4">
                            <p className="text-marine-blue font-bold">Arcade</p>
                            {monthlyBilling && <p className="text-cool-gray mt-2">$9/mo</p>}
                            {!monthlyBilling && <p className="text-cool-gray">$90/yr</p>}
                            {!monthlyBilling && <p className="text-marine-blue">2 months free</p>}
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col gap-4 border-cool-gray border rounded-md hover:border-marine-blue hover:bg-light-gray p-4 w-[100%] md:w-[120px]">
                        <div>
                            <img src="images/icon-advanced.svg" alt="" />
                        </div>
                        <div className="md:mt-4">
                            <p className="text-marine-blue font-bold">Advanced</p>
                            {monthlyBilling && <p className="text-cool-gray mt-2">$12/mo</p>}
                            {!monthlyBilling && <p className="text-cool-gray">$120/yr</p>}
                            {!monthlyBilling && <p className="text-marine-blue">2 months free</p>}
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col gap-4 border-cool-gray border rounded-md hover:border-marine-blue hover:bg-light-gray p-4 w-[100%] md:w-[120px]">
                        <div>
                            <img src="images/icon-pro.svg" alt="" />
                        </div>
                        <div className="md:mt-4">
                            <p className="text-marine-blue font-bold">Pro</p>
                            {monthlyBilling && <p className="text-cool-gray mt-2">$15/mo</p>}
                            {!monthlyBilling && <p className="text-cool-gray">$150/yr</p>}
                            {!monthlyBilling && <p className="text-marine-blue">2 months free</p>}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-[400px] mx-auto mt-4">
                    <div className="hover:text-marine-blue font-bold" onClick={() => {handleBillingOption(monthlyBilling)}}>Monthly</div>
                    <div></div>
                    <div className="hover:text-marine-blue font-bold" onClick={() => {handleBillingOption(monthlyBilling)}}>Yearly</div>
                </div>
              </div>
            <div className="self-end mt-8 md:mt-4">
                <button type="submit" className="rounded-md p-2 bg-marine-blue hover:opacity-95 text-white w-[120px] mt-3 self-end">Next Step</button>
            </div>
        </div>
        
    </div>
  )
}

export default Plans