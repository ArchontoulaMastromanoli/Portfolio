const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error similique nihil odit velit cupiditate nesciunt sed maxime corporis dignissimos! Dolorem quibusdam aut cum explicabo esse doloremque perspiciatis at fuga hic saepe. Aspernatur iste officia asperiores, velit tempora est molestiae provident ullam, laborum aut sint. Ullam neque totam ipsa id voluptatibus.",
    },

    {
        name: 'Lida Nisk',
        position: 'Data Entry',
        photo: 'https://images.unsplash.com/photo-1611182061343-0ffdea7b90f4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "Lorem ipsum dolor, sit amet ct cupiditate nesciunt sed maxime corporis dignissimos! Dolorem quibusdam aut cum explicabo esse doloremque perspiciatis at fuga hic saepe. Aspernatur iste officia asperiores, velit tempora est molestiae provident ullam, laborum aut sint. Ullam neque totam ipsa id voluptatibus.",
    },

    {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error similiqiditate nesciunt sed maxime corporis dignissimos! Dolorem quibusdam aut cum explicabo esse doloremque perspiciatis at fuga hic saepe. Aspernatur iste it tempora est molestiae provident ullam, laborum aut sint. Ullam neque totam ipsaptatibus.",
    },
]

let idx = 1 

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length -1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)
