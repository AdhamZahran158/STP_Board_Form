import logo from '../assets/logo.png'

export default function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="STP Logo" />
        <span className="header-title">Steps Towards Progress</span>
      </div>

      <div className="hero">
        <h1>welcome to</h1>
        <h2>board recruitment '27</h2>
      </div>
    </>
  )
}
