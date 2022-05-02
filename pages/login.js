import Image from 'next/image'

const Input = ({ placeholder }) => {
    return (
        <input
            className="bg-[#36373F] p-3 rounded-lg text-white"
            type="text"
            placeholder={placeholder}
        />
    )
}

const login = () => {
    return (
        <div className="text-white w-full h-screen relative grid place-items-center">
            <main className="text-center -top-12 relative">
                <h1 className="my-5 text-6xl font-semibold">Sign In</h1>
                <p className="text-lg mb-7 font-light">
                    Sign in and start managing your candidates!
                </p>

                <div className="flex flex-col gap-5 w-80 mx-auto">
                    <div className="flex flex-col gap-7">
                        <Input placeholder={'Email'} />
                        <Input placeholder={'Password'} />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <input
                                type="checkbox"
                                name="remember"
                                id="remeber"
                            />
                            <label htmlFor="remember" className="ml-2">
                                Remember Me
                            </label>
                        </div>
                        <p className="text-tertiary">Forget Password?</p>
                    </div>
                    <button className="bg-tertiary text-black py-2 rounded-md">
                        Login
                    </button>
                </div>
            </main>
            <div className="h-36 fixed w-full bottom-0 left-0 ">
                <Image
                    src="/images/waves.svg"
                    alt="waves"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default login
