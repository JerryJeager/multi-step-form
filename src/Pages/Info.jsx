import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Info = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = data => {
    console.log(data)
  };


  return (
    <div className="mt-8 -translate-y-12 md:-translate-y-0 ">
      <div className=" w-[90%] mx-auto flex flex-col">
        <div className="bg-white rounded-md shadow-md md:shadow-none px-4 py-8">
          <h2 className="text-3xl font-bold text-marine-blue">Personal Info</h2>
          <p className="text-cool-gray">Please provide your name, email address and phone number.</p>
          <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-4">
            <div>
              <label htmlFor="name" className="text-marine-blue mt-3">Name</label>
              <input type="text" className="rounded-md border-cool-gray outline-purplish-blue border text-marine-blue w-[100%] p-2 font-bold"
                {...register("name")}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-marine-blue mt-3">Email Address</label>
              <input type="text" className="rounded-md border-cool-gray outline-purplish-blue border text-marine-blue w-[100%] p-2 font-bold"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="text-marine-blue mt-3b flex justify-between">
                <p>Phone number</p>
                {errors.phoneNumber && <p className="text-strawberry-red">This field is required</p>}
              </label>
              <input type="text" className="rounded-md border-cool-gray outline-purplish-blue border text-marine-blue w-[100%] p-2 font-bold"
                {...register("phoneNumber", { required: true })}
                placeholder="eg. +1 234 567 890"
              />
            </div>
          </form>
        </div>
        <div className="self-end mt-8 md:mt-4">
          <button type="submit" className="rounded-md p-2 bg-marine-blue hover:opacity-95 text-white w-[120px] mt-3 self-end" onClick={() => navigate('Plans')}>Next Step</button>
        </div>
      </div>

    </div>
  )
}

export default Info