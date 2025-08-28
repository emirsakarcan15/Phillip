const enter = (photo) => {
    const section4 = document.querySelector("section:nth-child(4)")
    section4.style.background = `url(${photo})`
}

const leave = () => {
    const section4 = document.querySelector("section:nth-child(4)")
    section4.style.background = "#5c4e4e"
}

const enter2 = () => {
    const secureDiv = document.getElementById("secure-div")
    secureDiv.style.filter = "grayscale(0%)"
}

const leave2 = () => {
    const secureDiv = document.getElementById("secure-div")
    secureDiv.style.filter = "grayscale(100%)"
}

const enter3 = () => {
    const plantDiv = document.getElementById("plant-div")
    plantDiv.style.filter = "grayscale(0%)"
}

const leave3 = () => {
    const plantDiv = document.getElementById("plant-div")
    plantDiv.style.filter = "grayscale(100%)"
}

const enter4 = () => {
    const refundDiv = document.getElementById("refund-div")
    refundDiv.style.filter = "grayscale(0%)"
}

const leave4 = () => {
    const refundDiv = document.getElementById("refund-div")
    refundDiv.style.filter = "grayscale(100%)"
}

const enter5 = () => {
    const aiDiv = document.getElementById("ai-div")
    aiDiv.style.filter = "grayscale(0%)"
}

const leave5 = () => {
    const aiDiv = document.getElementById("ai-div")
    aiDiv.style.filter = "grayscale(100%)"
}

const enter6 = () => {
    const contactTurkey = document.getElementById("contact-turkey")
    contactTurkey.style.filter = "grayscale(0%)"
}

const leave6 = () => {
    const contactTurkey = document.getElementById("contact-turkey")
    contactTurkey.style.filter = "grayscale(100%)"
}

const enter7 = () => {
    const contactUk = document.getElementById("contact-uk")
    contactUk.style.filter = "grayscale(0%)"
}

const leave7 = () => {
    const contactUk = document.getElementById("contact-uk")
    contactUk.style.filter = "grayscale(100%)"
}

const enter8 = () => {
    const contactFrance = document.getElementById("contact-france")
    contactFrance.style.filter = "grayscale(0%)"
}

const leave8 = () => {
    const contactFrance = document.getElementById("contact-france")
    contactFrance.style.filter = "grayscale(100%)"
}


export default {
    enter,
    leave,
    enter2,
    leave2,
    enter3,
    leave3,
    enter4,
    leave4,
    enter5,
    leave5,
    enter6,
    leave6,
    enter7,
    leave7,
    enter8,
    leave8
}