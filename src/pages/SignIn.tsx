import { useState } from 'react'
import NavBar from '../components/NavBar'
import { useAuthStore } from '../stores/useAuthStore'

const SignIn = () => {
    const showLogger = true
    const showNavMenu = false
    const [email, setEmail] = useState('')

    // Use the auth store
    const authStore = useAuthStore()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // Prevent page reload
        if (!email) {
            alert('Please enter your email.') // Show an alert if no email is entered
            return
        }
        authStore.setEmail(email)
        authStore.setLoggedIn(true)
    }

    // Redirect to the home page
    // history.push('/')

    return (
        <div className="starship-detail-container">
            <div className="stars"></div>
            <div className="twinkling"></div>
            {/* <div className="clouds"></div> */}
            <div className="content-ships">
                <NavBar showLogger={showLogger} showNavMenu={showNavMenu} />
                <div className="mt-8 flex justify-center">
                    <section className="h-auto w-[100%] rounded-[2rem] bg-white px-6 md:px-12 lg:px-18 xl:px-22 pb-4 text-stone-600 md:w-[50%]">
                        <div
                            id="header"
                            className="flex flex-col gap-4 pt-8 font-bold"
                        >
                            <h3 className="">Enter your email</h3>
                            <p className="text-left">
                                Log into your Star Wars account. If you don't
                                have one, you will be prompted to create one.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div id="form" className="mt-4 flex flex-col gap-4">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    className="rounded-lg bg-slate-300 py-2 pl-2 placeholder-slate-500"
                                />
                                <button
                                    type="submit"
                                    className="rounded-3xl bg-[var(--secondary)]"
                                >
                                    Continue
                                </button>
                            </div>
                        </form>
                        <hr className="mt-4" />
                        <div id="footer" className="mt-4 flex flex-col gap-6">
                            <h4>
                                <strong>
                                    Star Wars is part of The Walt Disney Family
                                    of Companies.
                                </strong>
                            </h4>
                            <div className="flex flex-col gap-4">
                                <small>
                                    This email and password lets you seamlessly
                                    log into services and experiences across The
                                    Walt Disney Family of Companies, such as
                                    ESPN, Walt Disney World, Marvel, and more.
                                </small>
                                <small>
                                    If you’ve used your email with one of our
                                    services, please use it here too.
                                </small>
                            </div>
                        </div>
                        <div id="logos" className="mt-4 flex justify-center">
                            <figure>
                                <img
                                    className="h-8 w-auto"
                                    src="/public/logo-parade.png"
                                    alt=""
                                />
                            </figure>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SignIn
