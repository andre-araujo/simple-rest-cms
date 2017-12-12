import LoginPanel from '../components/modules/LoginPanel'

function Home() {
    return(
        <div className="flex flex-column vh-100-ns justify-center">
            <h1 className="f1 tc b">SRCMS</h1>
            <LoginPanel onSubmit={values => console.log(values)}/>
        </div>
    )
}
export default Home
