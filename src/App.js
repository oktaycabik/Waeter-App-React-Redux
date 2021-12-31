import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getWhater } from "./redux/Whater/whaterSlice";
import {Col, Row} from "reactstrap"
import "./index.css"
function App() {
  const whater = useSelector((state) => state.whater.item);

  const [sel, setsel] = useState("İstanbul");
  const dispatch = useDispatch();
  const city = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Bursa",
    "Adana",
    "Sivas",
    "Antalya",
    "Balıkesir",
    "Çanakkale",
    "Burdur",
    "Mersin",
    "Afyonkarahisar",
    "Ağrı",
    "Kayseri",
    "Yozgat",
    "Yalova",
    "Diyarbakır",
  ];
  useEffect(() => {
    (async () => {
      await dispatch(getWhater(sel));
    })();
  }, [dispatch, sel]);
  return (
    <div>
      
      <section className="vh-100" >
     <div className="bar"> 
     <select 
          className="mt-5"
          value={sel}
          onChange={(e) => setsel(e.target.value)}
          name="country"
          id="country"
        >
          {city.map((a, key) => (
            <option key={key} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
       
       
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div
                className="card shadow-0 border border-dark border-5 text-dark"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body p-4">
                  <div className="row text-center">
                    <div
                      className="col-md-9 text-center border-end border-5 border-dark py-4"
                      style={{ marginTop: "-1.5rem", marginBottom: "-1.5rem" }}
                    >
                      <div className="d-flex justify-content-around mt-3">
                        <p className="small"><h4>{sel}</h4></p>
                        <p className="small">{whater[0]?.date}</p>
                      </div>
                      <div className="d-flex justify-content-around align-items-center py-5 my-4">
                        <p
                          className="fw-bold mb-0"
                          style={{ fontSize: "7rem" }}
                        >
                          {parseInt(whater[0]?.max)}°C
                        </p>
                        <div className="text-start">
                          <p className="h3 mb-3"> {whater[0]?.day}</p>
                          <p className="small mb-0">{whater[0]?.status}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-around align-items-center mb-3">
                        {whater.map((a, key) => (
                          <div
                            key={key}
                            className="flex-column border"
                            style={{ borderRadius: "10px", padding: ".75rem" }}
                          >
                            <p className="small mb-1">{a.day}</p>
                            <img
                              style={{ width: "50px" }}
                              src={a.icon}
                              alt=""
                            />
                            <p className="small mb-0">
                              <strong>{parseInt(a.max)}°C</strong>
                              
                            </p>
                            <p className="small mb-1">{a.status}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
