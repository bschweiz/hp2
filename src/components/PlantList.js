import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'


export const PlantList = (props) => {

    return (
        <>
        <div className="plant__list">
            Plant Test List
            {/* <h1>Your Plants</h1>
            <div className="plants">
                {
                    shuffle(filteredPlants).map(p => {
                        return <PlantCard key={p.id} plant={p} props={props} />
                    })
                }
            </div> */}
        </div>
        </>
    )
}