
import './document.scss'
import imgCccd1 from '../../assets/images/cccdok.png'
import imgCccd2 from '../../assets/images/cccdok2.png'
import imgErr1 from '../../assets/images/anhmo2.jpg'
import imgErr2 from '../../assets/images/anhmo.jpg'

const Document = () => {
    return (
        <div className='document-container'>
            

            <div className='post'>
                <div className='post-header'>
                    <h1>Nhận diện Căn Cước Công Dân</h1>
                    <h2><a href='#quydinh' id='quydinh'>Quy định</a></h2>
                    <ul>
                        <li>Ảnh đầu vào phải đủ 4 góc rõ ràng hoặc đủ các bộ phận chính của một CMT như ảnh, quốc huy, tiêu đề.</li>
                        <li>Các trường thông tin phải rõ ràng, so sánh khi mắt người có thể đọc được dễ dàng, không tẩy xoá, hay bị nhoè nước</li>
                        <li>Ảnh đầu vào không vượt quá 5 MB và độ phân giải tối thiểu khoảng 640x480 để đảm bảo tỉ lệ đọc chính xác</li>
                        <li>Tỉ lệ diện tích Chứng minh thư hoặc Căn cước công dân phải chiếm tối thiểu ¼ tổng diện tích ảnh trở lên</li>
                    </ul>
                </div>

                <div className="post-image">
                    <h2><a href='#anhtieuchuan' id='anhtieuchuan'>Ảnh tiêu chuẩn</a></h2>
                    <p><img alt='cccd' src={imgCccd1} /></p>
                    <p><img alt='cccd' src={imgCccd2} /></p>

                    <h2><a href='#anhkemchatluong' id='anhkemchatluong' >Ảnh kém chất lượng</a></h2>
                    <ul>
                        <li>Ảnh chất lượng thấp và thiếu góc</li>
                    </ul>
                    <p><img alt='cccd' src={imgErr1} /></p>
                    <ul>
                        <li>Ảnh chất lượng thấp và thiếu thông tin</li>
                    </ul>
                    <p><img alt='cccd' src={imgErr2} /></p>
                </div>
                <div className='post-res'>
                <h2><a href='#response' id='response' >Response</a></h2>
                <p>
                Hệ thống có khả năng trích xuất thông tin trên CCCD của Việt Nam.
                Sau khi gửi request thành công, hệ thống sẽ trả về một file json bao gồm thông tin dạng text trên CCCD và hiển thị ra màn hình. Các thông tin bao gồm:
                </p>
                <ul>
                    <li>ID : Số CCCD</li>
                    <li>Name : Tên</li>
                    <li>Date of birth : Ngày sinh</li>
                    <li>Sex : Giới tính</li>
                    <li>National : Quốc tịch</li>
                    <li>Home : Quê quán</li>
                    <li>Address : Nơi thường trú</li>
                </ul>
                <h2>Error</h2>
                <p>
                    Nếu hệ thống không hiển thị kết quả hoặc hiển thị lỗi trên màn hình, bạn hãy kiểm tra lại hình ảnh của mình đã phù hợp hay chưa.
                    Có thể CCCD trong hình ảnh bị thiếu góc nên không thể crop về dạng chuẩn.
                    Bạn hãy đọc lại các quy định <a href='#quydinh'>ở đây</a>.
                </p>
                </div>
                <div className="bbottom"></div>

            </div>
           
            <div className='side-bar'>
                <ul>
                    <li><a href='#quydinh'>Quy định</a></li>
                    <li><a href='#anhtieuchuan'>Ảnh tiêu chuẩn</a></li>
                    <li><a href='#anhkemchatluong'>Ảnh kém chất lượng</a></li>
                    <li><a href='#response'>Response</a></li>
                </ul>
            </div>
            
        </div>
    );
}
export default Document;