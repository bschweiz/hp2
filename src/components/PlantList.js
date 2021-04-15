import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Plant from '../components/Plant'

export const PlantList = (props) => {
    const { plants, getPlantData } = useContext(PlantContext)

    const [ filteredPlants, setFiltered ] = useState([])

    useEffect(() => {
        getPlantData()
    }, [])

    useEffect (()=> {
        const subset = plants.filter(p => p.userId === parseInt(localStorage.getItem("app_user_id")))
        setFiltered(subset)
    }, [plants])

    return (
        <>
        <div className="plant__list">
            <h1>Your Plants</h1>
            <div className="plants">
                {
                    shuffle(filteredPlants).map(p => {
                        return <PlantCard key={p.id} plant={p} props={props} />
                    })
                }
            </div>
        </div>
        </>
    )
}