import './App.css'
import Bottom from './header/bottom/Bottom'
import Header from './header/Header'


export const App = ()=>{
    return <div className="main__container">
        <Header/>
        <Bottom/>
    </div>
}