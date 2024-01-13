import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../state/store'
import { decValueAC, incValueAC, resValueAC } from '../state/count-reducer';



export const Counter = () => {

	const dispatch = useDispatch();
	const value = useSelector((state:AppRootStateType)=> state.value)
	const maxValue = useSelector((state:AppRootStateType)=> state.maxValue)
	const minValue = useSelector((state:AppRootStateType)=> state.minValue)

	const incValue = () => {
		dispatch(incValueAC())
	}
	const decValue = () => {
		dispatch(decValueAC())
	}
	const resValue = () => {
		dispatch(resValueAC())
	}

	return (
		<>
		<div>{value}</div>
		<button disabled={value >= maxValue} onClick={incValue}>+</button>
		<button disabled={value <= minValue} onClick={decValue}>-</button>
		<button onClick={resValue}>reset</button>
		</>
	)
}
