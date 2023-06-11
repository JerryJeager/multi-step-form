import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Plans = () => {

   const navigate = useNavigate()
   const [monthlyBilling, setMonthlyBilling] = useState(true)
   const [selectedPlan, setSelectedPlan] = useState({})
   const handleBillingOption = () =>{
    setMonthlyBilling(preValue => !preValue)
   }

   
    useEffect(() => {
        const selectedPlan = localStorage.getItem("selectedPlan")
        if(selectedPlan){
            setSelectedPlan(JSON.parse(selectedPlan))
        }
  }, []);


  return (
    <div className="mt-8 -translate-y-12 md:-translate-y-0 ">
        <div className=" w-[90%] mx-auto flex flex-col">
            <div className="bg-white rounded-md shadow-md md:shadow-none px-4 py-8">
              <h2 className="text-3xl font-bold text-marine-blue">Select your plan</h2>
              <p className="text-cool-gray">You have the option of monthly or yearly billing.</p>
                <div className="mt-4 flex flex-col md:flex-row md:justify-between gap-4">
                    <div className={`flex flex-row md:flex-col gap-4 border-cool-gray border rounded-md hover:border-marine-blue ${selectedPlan.planName === "Arcade(Monthly)" || selectedPlan.planName === "Arcade(Yearly)" ? "bg-light-gray" : "bg-transparent"} cursor-pointer p-4 w-[100%] md:w-[120px]`} 
                     onClick={() => {
                        monthlyBilling ? setSelectedPlan({
                            planName: "Arcade(Monthly)",
                            costPerTime: "$9/mo",
                            value: 9
                        }) : setSelectedPlan({
                            planName: "Arcade(Yearly)",
                            costPerTime: "$90/yr",
                            value: 90
                        })
                     }}
                    >
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
                    <div className={`flex flex-row md:flex-col gap-4 border-cool-gray border rounded-md hover:border-marine-blue  ${selectedPlan.planName === "Advanced(Monthly)" || selectedPlan.planName === "Advanced(Yearly)" ? "bg-light-gray" : "bg-transparent"} p-4 w-[100%] md:w-[120px]`}
                      onClick={() => {
                        monthlyBilling ? setSelectedPlan({
                            planName: "Advanced(Monthly)",
                            costPerTime: "$12/mo",
                            value: 12
                        }) : setSelectedPlan({
                            planName: "Advanced(Yearly)",
                            costPerTime: "$120/yr",
                            value: 120
                        })
                     }}
                    >
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
                    <div className={`flex flex-row md:flex-col gap-4 border-cool-gray border rounded-md hover:border-marine-blue  ${selectedPlan.planName === "Pro(Monthly)" || selectedPlan.planName === "Pro(Yearly)" ? "bg-light-gray" : "bg-transparent"} p-4 w-[100%] md:w-[120px]`}
                       onClick={() => {
                        monthlyBilling ? setSelectedPlan({
                            planName: "Pro(Monthly)",
                            costPerTime: "$15/mo",
                            value: 15
                        }) : setSelectedPlan({
                            planName: "Pro(Yearly)",
                            costPerTime: "$150/yr",
                            value: 150
                        })
                     }}
                    >
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
                <div className="flex justify-between w-[210px] mx-auto mt-4">
                    <div className={`${monthlyBilling ? "text-marine-blue" : "text-cool-gray"} font-bold`}>Monthly</div>
                    <div className="bg-marine-blue w-[50px] rounded-xl h-[25px] p-1 flex items-center cursor-pointer" onClick={() => {
                        handleBillingOption(monthlyBilling)
                        setSelectedPlan({})
                        console.log("after click", selectedPlan)
                    }}>
                        <div className={`${!monthlyBilling ? "translate-x-6" : ""} transition duration-300 h-[15px] w-[15px] rounded-full bg-white `}></div>
                    </div>
                    <div className={`${monthlyBilling ? "text-cool-gray" : "text-marine-blue"}font-bold` } >Yearly</div>
                </div>
              </div>
            <div className="self-end mt-8 md:mt-4 flex w-full justify-between items-center">
                <div className="text-cool-gray cursor-pointer" onClick={() => navigate(-1)}>Go Back</div>
                <button type="submit" className="rounded-md p-2 bg-marine-blue hover:opacity-95 text-white w-[120px] mt-3 self-end" onClick={
                    () => {
                        localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan))
                        Object.keys(selectedPlan).length !== 0 ? navigate(`/Add-ons?planName=${selectedPlan.planName}&costPerTime=${selectedPlan.costPerTime}&value=${selectedPlan.value}`) : alert("You have to select a Plan")

                    }
                }>Next Step</button>
            </div>
        </div>
        
    </div>
  )
}

export default Plans