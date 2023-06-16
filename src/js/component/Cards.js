import React from "react";
import placeholder from "../../img/placeholder.webp"


const Cards = () => {
    return (
        <div className="card-group">
            <div className="card mx-4 my-4 rounded-top border-secondary">
                <img src={placeholder} className="card-img-top w-100% rounded-top" alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus viverra nisi quis aliquet.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
            <div className="card mx-4 my-4 border-secondary">
                <img src={placeholder} className="card-img-top " alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus viverra nisi quis aliquet.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
            <div className="card mx-4 my-4 border-secondary">
                <img src={placeholder} className="card-img-top" alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus viverra nisi quis aliquet.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
            <div className="card mx-4 my-4 border-secondary">
                <img src={placeholder} className="card-img-top" alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus viverra nisi quis aliquet.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
        </div> 
    )
}

         {/* <div className="card" style="width: 18rem;">
         <img src="..." className="card-img-top" alt="..."></img>
         <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div> */}
export default Cards;