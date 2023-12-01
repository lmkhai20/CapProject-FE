
import '../components/components.scss'
const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='right-header'>

                    <a href='/' className='header-a'><strong className='header-cap'>Capstone Project</strong></a>
                   
                    <a href='/document' className='header-task'>Document</a>
                    <a href='reader' className='header-task'>Reader</a>
                    {/* <a href='' className='header-task'>History</a> */}
                </div>
                
               
            </div>
            
        </div>
    )
}
export default Header