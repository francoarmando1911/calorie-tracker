import { useMemo } from "react"
import { Activity } from "../types"


type CalorieTrackerProps = {
    activities : Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {

    //contadores
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total +
    activity.calories : total, 0), [activities])

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
    </>
  )
}
