import { useState } from "react"
import icon from "../images/icon-arrow-down.svg"
import woman from "../images/illustration-woman-online-mobile.svg"
import bgMobile from "../images/bg-pattern-mobile.svg"
import womanDesktop from "../images/illustration-woman-online-desktop.svg"

export default function Main() {

    const [selected, setSelected] = useState('')

    function handleSelected(item) {

        if (selected === item.question && selected !== '') {
            setSelected('')
        } else if (selected === '') {
            setSelected(item.question)
        } else {
            setSelected(item.question)
        }
    }

    const faqContent = [{
        question: "How many team members can I invite?",
        answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },

    {
        question: "What is the maximum file upload size?",
        answer: "No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
        question: "How do I reset my password?",
        answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
        question: "Do you provide additional support?",
        answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    }
    ]


    return (
        <div className="faq-container">

            <img className="woman-image" src={woman} alt="Woman on computer" />
            <img className="shadow-image" src={bgMobile} alt="Shadow" />


            <h1>FAQ</h1>
            <div className="main-content">
                {faqContent.map((item) => (

                    <div
                        key={item.question}
                        onClick={() => handleSelected(item)}
                        className="faq"
                    >

                        <h2 className={`${selected === item.question && "faq-question-selected"} faq-question`}>
                            {item.question} <img className={`${selected === item.question && "rotate"}`} src={icon} alt="icon arrow down" />
                        </h2>
                        <span className={`${selected !== item.question && "hidden"} faq-answer`}>
                            {item.answer}
                        </span>

                    </div>

                ))}
            </div>
        </div>
    )
}