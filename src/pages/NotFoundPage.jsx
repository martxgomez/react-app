import notFoundImage from "../assets/not-found-image.jpeg" 
import "./NotFoundPage.css"

function NotFoundPage({isOn}) {
    return (
      <div className= {isOn ? "page-error-on":"page-error-off"}>
      <img src={notFoundImage} alt="Not found image" />
      <section className="not-found-container">
      <h3>Oops...</h3>
        <h4>You caught us red-handed</h4>
        <p>Reload the page or redirect to the home page.</p>
      </section>
      </div>
    );
  }
  
  export default NotFoundPage;