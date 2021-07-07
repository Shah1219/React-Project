import { useSelector, useDispatch } from 'react-redux'
import { getData, getCountry } from '../store/action'
import { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function Covid() {
    const [selectedObj, setSelectedObj] = useState({});
    let state = useSelector(state => state)
    let dispatch = useDispatch();

    const update = () => {
        dispatch(getCountry())
    }
    useEffect(() => {
        dispatch(getCountry())
        dispatch(getData())
    }, [])
    console.log("countries data", state.country)

    const onSelectChange = (e) => {
        console.log(e.target.value, state.covid)
        if (state.covid.length > 0) {
            const filtered = state.covid.filter(item => item.state === e.target.value);
            console.log(filtered)
            if (filtered.length > 0) {
                setSelectedObj(filtered[0])
            } else {
                setSelectedObj({})
            }
        }
    }


    return (
        <div>
            <div className="conatiner-fluid">
                <p className="text-center fontSize">Covid App</p>

            </div>
            <div className="d-flex justify-content-center">
                <select onChange={onSelectChange}>
                    <option>Select Country</option>
                    {state.country.map((v, i) => <option key={i} value={v.alpha2Code}>{v.name}</option>)}
                </select>
            </div>


            <div className="container">
                <div className="row d-flex justify-content-center m-4">
                    <div className="col-md-4 border rounded p-2 m-1">
                        <h3 className="text-light">Positive</h3>
                        <h5 className="text-light">{selectedObj.positive}</h5>
                    </div>
                    <div className="col-md-4 border rounded p-2 m-1">
                        <h3 className="text-light">Total Test Results Source</h3>
                        <h5 className="text-light">{selectedObj.totalTestResultsSource}</h5>
                    </div>
                    <div className="col-md-4 border rounded p-2 m-1">
                        <h3 className="text-light">Total Test Results</h3>
                        <h5 className="text-light">{selectedObj.totalTestResults}</h5>
                    </div>
                    <div className="col-md-4 border rounded p-2 m-1">
                        <h3 className="text-light">Hospitalized Currently</h3>
                        <h5 className="text-light">{selectedObj.hospitalizedCurrently}</h5>
                    </div>
                    <div className="col-md-4 border rounded p-2 m-1">
                        <h3 className="text-light">Hospitalized Cumulative</h3>
                        <h5 className="text-light">{selectedObj.hospitalizedCumulative}</h5>
                    </div>
                    <div className="col-md-4 border rounded p-2 m-1">
                        <h3 className="text-light">On Ventilator Currently</h3>
                        <h5 className="text-light">{selectedObj.onVentilatorCurrently}</h5>
                    </div>
                    <div className="col-md-4 border rounded p-2 m-1">
                        <h3 className="text-light">Death</h3>
                        <h5 className="text-light">{selectedObj.death}</h5>
                    </div>
                    <div className="col-md-3 border rounded p-2">
                        <h3 className="text-light">Hospitalized</h3>
                        <h5 className="text-light">{selectedObj.hospitalized}</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Covid;