const images = ['https://images.pexels.com/photos/36928654/pexels-photo-36928654.jpeg?cs=srgb&dl=pexels-kienvirak-36928654.jpg&fm=jpg',
  'https://4kwallpapers.com/images/walls/thumbs_2t/25549.jpg',
  'https://external-preview.redd.it/heres-like-100-more-environment-screenshots-in-4k-to-use-as-v0-OdiurmQhB7HNiEZLKdDxwcU_F3qizHXF0Qun8S1RejQ.jpg?auto=webp&s=5469e972b0297a27e7071e86d39ccd48472681bc',
  'https://c4.wallpaperflare.com/wallpaper/827/65/320/firewatch-4k-best-wallpaper-preview.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQbgfPF1mOEzg5F9QG2BmCOdmw2MUJhMnEg&s',
  'https://static.vecteezy.com/system/resources/thumbnails/049/855/332/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg']

const left_btn = document.querySelector("#left-btn")
const right_btn = document.querySelector("#right-btn")

let currentIndex = 0;



function Slider() {
  document.querySelector(".img").setAttribute('src', images[currentIndex])

  if (currentIndex === 0) {
    left_btn.style.display = 'none'
    console.log('перший слайд')
  } else {
    left_btn.style.display = 'inline'

  }

  if (currentIndex === images.length - 1) {
    right_btn.style.display = 'none'
    console.log('останній слайд')

  } else {
    right_btn.style.display = 'block'

  }


}

left_btn.addEventListener("click", () => {
  currentIndex -= 1
  console.log(currentIndex)
  Slider()
})

right_btn.addEventListener("click", () => {
  currentIndex += 1
  console.log(currentIndex)
  Slider()

})

Slider()