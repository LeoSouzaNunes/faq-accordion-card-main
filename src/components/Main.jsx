import { useState } from "react"
import icon from "../images/icon-arrow-down.svg"

export default function Main() {

    const [selected, setSelected] = useState(false)

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
            <h1>FAQ</h1>
            <div>
                {faqContent.map((item) => (

                    <div key={item.question} onClick={() => setSelected(true)} className={`${selected ? "faq-open" : "faq"}`}>
                        <h2 className="faq-question">{item.question} <img src={icon} alt="icon arrow down" /></h2>
                        <span className="faq-answer hidden">{item.answer}</span>
                    </div>

                ))}
            </div>
        </div>
    )
}