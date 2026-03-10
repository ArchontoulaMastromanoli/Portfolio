const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Manav Goyal',
        position: 'Future of Blockchain Hackathon Teammate',
        text: "Working with you was an absolute pleasure. The <span>frontend</span> you developed perfectly matched the design we discussed, and it turned out fantastic. Your <span>attention to detail</span> made the entire process <span>smooth</span> and <span>seamless</span>.",
    },

    {
        name: 'Sudhansu Wani',
        position: 'Future of Blockchain Hackathon Teammate',
        text: "I had the pleasure of collaborating with Lina during a hackathon, and her skills as a <span>frontend engineer</span> were truly impressive. She consistently brought <span>innovative ideas</span> to the table, wrote <span>clean</span> and <span>efficient code</span>, and remained <span>composed under tight deadlines</span>, making her an <span>invaluable team member</span>.",
    },
]

let idx = 1 

function updateTestimonial() {
    const { name, position, text } = testimonials[idx]

    testimonial.innerHTML = text
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length -1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)

/* ABOUT ME */
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})