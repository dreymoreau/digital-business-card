import Photo from'../images/Photo.png';
export default function Image(){
    return (
        <div>
           <img src={Photo} alt="profile" className='main--photo'/>
        </div>
    )
}