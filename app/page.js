export default function Home() {
  return (
    <div className="container">
      <div className="container-box">
        <div className="email-box">
          <input
            type="text"
            id="a"
            placeholder="Email or Phone number"
            className="email-id"
          />
        </div>

        <div className="pwd-box">
          <input type="password" placeholder="Password" className="password" />
        </div>

        <div className="radioBtn">
          <input type="checkbox"/>
          <p className="rem">Remember me</p>
        </div>

        <div className="submit">
          <button type="submit" className="submit-btn">
            Sign in
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
