// import react from 'react'
import imgg from '../../assets/images/aaa.webp'
import './pages.scss'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-main'>
                <div className='home-main-right'>
                    <img className='main-img' src={imgg} alt='imgg' />
                    <div className='text-show'>
                        <p id='name-denoise'>IDENTITY CARD </p>
                        <p id='name-100'>100% Automatically and <span>Free</span> </p>
                    </div>

                </div>
                <div className='home-main-left'>

                    <div className='upload'><a href='/reader' className="btn-upload">
                        Upload Image
                    </a >
                    </div>
                    <div className='home-left-bot'>
                        <div className='left-bot-p'>
                            <p>No image?</p>
                            <p>Try one of these:</p>
                        </div>
                        <img className='left-bot-img' alt='Upload' src='https://static.remove.bg/uploader-examples/person/2_thumbnail.jpg'></img>
                        <img className='left-bot-img' alt='Upload' src='https://static.remove.bg/uploader-examples/animal/5_thumbnail.jpg'></img>
                        <img className='left-bot-img' alt='Upload' src='https://static.remove.bg/uploader-examples/car/3_thumbnail.jpg'></img>
                        <img className='left-bot-img' alt='Upload' src='https://static.remove.bg/uploader-examples/product/9_thumbnail.jpg'></img>
                    </div>
                    

                </div>
            </div>
            
            

        </div>
    )
}
export default Home