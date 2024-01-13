import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../state/store'
import { setMaxValueAC, setMinValueAC } from '../state/count-reducer'

export const CounterSettings = () => {
	const dispatch = useDispatch()
	const maxValue = useSelector((state:AppRootStateType)=> state.maxValue)
	const minValue = useSelector((state:AppRootStateType)=> state.minValue)
	const error = useSelector((state:AppRootStateType)=>state.error)

	const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
		dispatch(setMaxValueAC(+e.currentTarget.value))
	}
	const onChangeMinValue = (e:ChangeEvent<HTMLInputElement>) => {
		dispatch(setMinValueAC(+e.currentTarget.value))
	}
	const resetSettings = () => {
		dispatch(setMinValueAC(0))
		dispatch(setMaxValueAC(10))
	}
	return (
		<div>
			<input onChange={onChangeMinValue}   value={minValue} type="number" placeholder='min value' style={{width: 100, backgroundColor: `${minValue >= maxValue?'red':''}`}}/>
			<input onChange={onChangeMaxValue}   value={maxValue}type="number" placeholder='max value' style={{width: 100, backgroundColor: `${maxValue <= minValue?'red':''}`}} />
			<button onClick={resetSettings}>reset settings</button>
			<div style={{color: 'red'}}>{error}</div>
		</div>
	)
}
