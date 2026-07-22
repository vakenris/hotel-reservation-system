import './chooser.css'
export function Chooser(){
    return(
        <div className="chooser">
            <form className='search'>
                <label className='field-location'>
                    <span>Куда</span>
                    <input/>
                </label>
                <div className='dates'>
                    <label className='field'>
                        <span>Заезд</span>
                        <input/>
                    </label>
                    <label className='field'>
                        <span>Выезд</span>
                        <input/>
                    </label>
                </div>
                <label className='guests'>
                    <span>Гости</span>
                    <input/>
                </label>
            </form>
            <button className='search-button'>Найти</button>
        </div>
    );
}