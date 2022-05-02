import Image from 'next/image'

const Input = ({ placeholder }) => {
    return (
        <input
            className="bg-[#36373F] py-2 px-4 rounded-lg text-white"
            type="text"
            placeholder={placeholder}
        />
    )
}

const signup = () => {
    return (
        <div className="text-white w-full h-screen relative grid place-items-center">
            <main className="text-center -top-12 relative">
                <div className="flex justify-between items-center mb-10">
                    <div className="flex flex-col gap-3">
                        <Image
                            width={40}
                            height={40}
                            src="/images/signup.svg"
                            alt="sign up"
                        />
                        <p>Create Account</p>
                    </div>
                    <div className="w-20 h-[0.5px] bg-white"></div>
                    <div className="flex flex-col gap-3">
                        <Image
                            width={40}
                            height={40}
                            src="/images/interests.svg"
                            alt="sign up"
                        />
                        <p>Create Account</p>
                    </div>
                </div>
                <h1 className="my-5 text-5xl font-semibold">Sign Up</h1>
                <p className="text-lg mb-7 font-light">
                    Sign in and start managing your candidates!
                </p>

                <div className="flex flex-col gap-5 w-80 mx-auto">
                    <div className="flex flex-col gap-7">
                        <Input placeholder={'Email'} />
                        <Input placeholder={'Username'} />
                        <Input placeholder={'Password'} />
                        <Input placeholder={'Confirm Password'} />
                    </div>

                    <button className="bg-tertiary text-black py-2 rounded-md">
                        Sign Up
                    </button>
                </div>
            </main>
            <div className="h-36 fixed w-full -bottom-10 left-0 ">
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

export default signup
