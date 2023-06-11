import { useEffect, useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';

const AddOns = () => {

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const planName = queryParams.get("planName")
  const costPerTime = queryParams.get("costPerTime")
  const value = queryParams.get("value")
  const [summaryPlans, setSummaryPlans] = useState({})

  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = (e) => {
    setIsChecked(preValue => !preValue)
  }

  
  return (
    <div className="mt-8 -translate-y-12 md:-translate-y-0">
        <div className=" w-[90%] md:w-[100%] mx-auto flex flex-col">
            <div className="bg-white rounded-md  w-[100%] shadow-md md:shadow-none px-4 py-8">
              <h2 className="text-3xl font-bold text-marine-blue">Pick add-ons</h2>
              <p className="text-cool-gray">Add-ons help enhance your gaming experience.</p>
              <form className="mt-4">
                <div className="w-[100%] p-2 rounded-md border border-cool-gray hover:border-purplish-blue flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <input type="checkbox" name="Online Service" id="" value={planName.includes("Monthly") ? "1" : "10"} checked={isChecked} onChange={handleCheckboxChange} className="appearance-none h-5 w-5 border border-cool-gray rounded-sm checked:border-transparent checked:bg-purplish-blue cursor-pointer" />
                      <img src="images/icon-checkmark.svg" alt="" className="absolute left-1 top-1" />
                    </div>
                    <div>
                      <p className="font-bold text-marine-blue">Online service</p>
                      <p className="text-cool-gray">Access to multiplayer games</p>
                    </div>
                  </div>
                  <div className="text-purplish-blue font-semibold">
                    {planName.includes("Monthly") ? "+$1/mo" : "+$10/yr"}
                  </div>
                </div>
                <div className="w-[100%] p-2 rounded-md border border-cool-gray hover:border-purplish-blue flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <input type="checkbox" name="largerStorage" id="" value="2"  className="appearance-none h-5 w-5 border border-cool-gray rounded-sm checked:border-transparent checked:bg-purplish-blue cursor-pointer" />
                      <img src="images/icon-checkmark.svg" alt="" className="absolute left-1 top-1" />
                    </div>
                    <div>
                      <p className="font-bold text-marine-blue">Larger storage</p>
                      <p className="text-cool-gray">Extra 1TB of cloud save</p>
                    </div>
                  </div>
                  <div className="text-purplish-blue font-semibold">
                    {planName.includes("Monthly") ? "+$2/mo" : "+$20/yr"}
                  </div>
                </div>
                <div className="w-[100%] p-2 rounded-md border border-cool-gray hover:border-purplish-blue flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <input type="checkbox" name="customizableProfile" id="" value="3"  className="appearance-none h-5 w-5 border border-cool-gray rounded-sm checked:border-transparent checked:bg-purplish-blue cursor-pointer" />
                      <img src="images/icon-checkmark.svg" alt="" className="absolute left-1 top-1" />
                    </div>
                    <div>
                      <p className="font-bold text-marine-blue">Customizable Profile</p>
                      <p className="text-cool-gray">Custom theme on your profile</p>
                    </div>
                  </div>
                  <div className="text-purplish-blue font-semibold">
                    {planName.includes("Monthly") ? "+$2/mo" : "+$20/yr"}
                  </div>
                </div>
                    
              </form>
            </div>
            <div className="self-end mt-8 md:mt-4 flex w-full justify-between items-center">
                <div className="text-cool-gray cursor-pointer" onClick={() => navigate(-1)}>Go Back</div>
                <button type="submit" className="rounded-md p-2 bg-marine-blue hover:opacity-95 text-white w-[120px] mt-3 self-end" onClick={() => {
                  
                  }}>Next Step</button>
            </div>
            
        </div>
    </div>
  )
}

export default AddOns