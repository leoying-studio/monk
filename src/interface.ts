interface ICountDown {
	day: number,
	hour: number,
	minutes: number,
	second: number
}

type timeType = Date | string | number;


export {ICountDown, timeType};