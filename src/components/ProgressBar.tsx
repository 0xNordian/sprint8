import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type SteppedProgressProps = {
    page: number
    handleClickedStep: (clickedPage: number) => void
}

type StepsProps = {
    numSteps: number
    stepsComplete: number
    handleClickedStep: (clickedPage: number) => void
}

type StepProps = {
    num: number
    isActive: boolean
    handleClickedStep: (clickedPage: number) => void
}

const SteppedProgress = ({ page, handleClickedStep }: SteppedProgressProps) => {
    const [stepsComplete, setStepsComplete] = useState(page)
    const numSteps = 4

    useEffect(() => {
        setStepsComplete(page)
    }, [page])

    return (
        <div className="px-4 py-4">
            <div className="mx-auto w-full max-w-2xl rounded-md p-8 shadow-lg">
                <Steps
                    numSteps={numSteps}
                    stepsComplete={stepsComplete}
                    handleClickedStep={handleClickedStep}
                />
            </div>
        </div>
    )
}

const Steps = ({ numSteps, stepsComplete, handleClickedStep }: StepsProps) => {
    const stepArray = Array.from(Array(numSteps).keys())

    return (
        <div className="flex items-center justify-between gap-3">
            {stepArray.map((num) => {
                const stepNum = num + 1
                const isActive = stepNum <= stepsComplete
                return (
                    <React.Fragment key={stepNum}>
                        <Step
                            num={stepNum}
                            isActive={isActive}
                            handleClickedStep={handleClickedStep}
                        />
                        {stepNum !== stepArray.length && (
                            <div className="relative h-1 w-full rounded-full bg-gray-200">
                                <motion.div
                                    className="absolute bottom-0 left-0 top-0 rounded-full bg-indigo-600"
                                    animate={{ width: isActive ? '100%' : 0 }}
                                    transition={{
                                        ease: 'easeIn',
                                        duration: 0.3,
                                    }}
                                />
                            </div>
                        )}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

const Step = ({ num, isActive, handleClickedStep }: StepProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative">
            <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                        ? 'border-indigo-600 bg-indigo-600 text-[#E5B848]'
                        : 'border-gray-300 text-gray-300'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence mode="wait">
                    {isActive ? (
                        isHovered ? (
                            <motion.div
                                key="icon-marker-num"
                                onClick={() => {
                                    console.log(`num clicked: ${num}`)
                                    handleClickedStep(num)
                                }}
                                className="cursor-pointer transition-all duration-300 hover:scale-[1.4] hover:transform"
                                title={`Click to select step ${num}`}
                            >
                                {num}
                            </motion.div>
                        ) : (
                            <motion.svg
                                key="icon-marker-check"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                height="1.6em"
                                width="1.6em"
                                xmlns="http://www.w3.org/2000/svg"
                                initial={{ rotate: 180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -180, opacity: 0 }}
                                transition={{ duration: 0.125 }}
                            >
                                <title>Click to select step {num}</title>
                                <path
                                    className="cursor-pointer"
                                    onClick={() => {
                                        console.log(`num clicked: ${num}`)
                                        handleClickedStep(num)
                                    }}
                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                                ></path>
                            </motion.svg>
                        )
                    ) : (
                        <motion.span
                            key="icon-marker-num"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -180, opacity: 0 }}
                            transition={{ duration: 0.125 }}
                        >
                            <div
                                onClick={() => {
                                    console.log(`num clicked: ${num}`)
                                    handleClickedStep(num)
                                }}
                                className={`cursor-pointer transition-all duration-300 ${
                                    isHovered
                                        ? 'hover:scale-[1.4] hover:transform'
                                        : ''
                                }`}
                                title={`Click to select step ${num}`}
                            >
                                {num}
                            </div>
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            {isActive && (
                <div className="absolute -inset-1.5 z-0 animate-pulse rounded-full bg-indigo-100" />
            )}
        </div>
    )
}

export default SteppedProgress
